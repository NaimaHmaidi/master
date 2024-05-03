const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');
const User = require('../models/User'); // Modèle d'utilisateur
const express = require('express');
const router = express.Router();

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

router.post('/signup', async (req, res) => {
    try {
        const { name, email, phone,address,domaine,password,picture } = req.body;
           
        const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({
        name,
        email,
        phone,
        address,
        domaine,
        password: hashedPassword,
        picture,
      });
  
      await newUser.save();
        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);


        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, name, email, phone,userId, hashedPassword, domaine,address,phone });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
}) ;

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: 'User not found' });
        }

        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ email: email });

        if(!users.length) return res.status(400).json({ message: 'User not found' });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success) {
            res.status(200).json({ token, name: users[0].name, email, userId: users[0].id, role:user.role});
        } else {
            res.status(500).json({ message: 'Incorrect password' });
        }
    } catch (error) {ads
        console.log(error);

        res.status(500).json({ message: error });
    }
});
router.post('/forgot-password', (req, res) => {
    const {email }= req.body;
    User.findOne({email: email})
    .then(user => {
        if(!user) {
            return res.send({Status: "User not existed"})
        } 
         token = jwt.sign({id: user._id}, 'CVNHFFTYJK', {expiresIn: "1d"})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rymahammami42@gmail.com',
              pass: 'iqme wwtc abmg sbqm'
            }
          });
          
          var mailOptions = {
            from: 'rymahammami42@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:3001/resetPass/${user._id}/${token}`
  
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status: "Success"})
            }
          });
    })
  });
  router.post('/reset-password/:id/:token', (req, res) => {
    const {id, token} = req.params
    const {password} = req.body
  
    jwt.verify(token, "CVNHFFTYJK", (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcrypt.hash(password, 10)
            .then(hash => {
                User.findByIdAndUpdate({_id: id}, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    })
  });
  router.post("/create",  (req, res) => {
    const { name, email, address, phone, domaine, password, picture } = req.body;
    
    User.create({ name, email, address, phone, domaine, password, picture })
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  });
  router.get('/allUsers', (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ message: err.message }));
  });
  router.put('/updateRole/:userId', async (req, res) => {
    const { userId } = req.params;
    const { role } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, { role }, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating user role.' });
    }
  });
  router.get('/usersWithoutRoles', async (req, res) => {
    try {
      const usersWithoutRoles = await User.find({ role: 'user' });
      res.json(usersWithoutRoles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving users without roles.' });
    }
  });
  router.get('/usersWithRoles', async (req, res) => {
    try {
      // Recherche tous les utilisateurs avec un rôle défini et différent de 'user'
      const usersWithRoles = await User.find({ role: { $exists: true, $ne: 'user' } });
      res.json(usersWithRoles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving users with roles.' });
    }
  });
  router.get('/usersWithRoles', async (req, res) => {
    try {
      // Recherche tous les utilisateurs avec un rôle défini et différent de 'user'
      const usersWithRoles = await User.find({ role: { $exists: true, $ne: 'user' } });
      res.json(usersWithRoles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving users with roles.' });
    }
  });
  
router.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    User.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  });
  router.get('/getUser/:id', (req,res)=>{
    const id = req.params.id;
    User.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
  });
  router.put('/update/:id', (req, res) =>{
    const id = req.params.id;
    User.findByIdAndUpdate({_id:id},
       {
    
        name: req.body.name, 
        email: req.body.email,
        address: req.body.address, 
        phone: req.body.phone, 
        domaine: req.body.domaine,
        role: req.body.role,
    
      })
    .then(users => res.json(users))
      .catch(err => res.json(err))
    });

module.exports = router;