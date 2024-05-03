import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, FormControl, InputLabel, Select, MenuItem, Typography, Grid, Paper } from '@material-ui/core';
import DashboardResponsable from './dashboardResponsable';

export function Equipe() {
  const [namedeveloppeur, setNamedeveloppeur] = useState([]);
  const [namedprojet, setNamedprojet] = useState('');
  const [developers, setDevelopers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/allUsers")
      .then(response => {
        // Filtrer les utilisateurs ayant le rôle de développeur
        const developerUsers = response.data.filter(user => user.role === 'developpeur');
        setDevelopers(developerUsers);
      })
      .catch(err => console.log(err));

    axios.get("http://localhost:5000/projet/allProjets")
      .then(response => {
        setProjects(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDeveloperChange = (event) => {
    const selectedDevelopers = event.target.value;
    setNamedeveloppeur(selectedDevelopers);
  };

  return (
    <>
      <DashboardResponsable />
      <Container maxWidth="md" style={{ marginTop: '40px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <FormControl fullWidth>
                <InputLabel id="select-project-label">Projet</InputLabel>
                <Select
                  labelId="select-project-label"
                  id="select-project"
                  value={namedprojet}
                  onChange={(e) => setNamedprojet(e.target.value)}
                >
                  <MenuItem value="">Sélectionnez un projet</MenuItem>
                  {projects.map(project => (
                    <MenuItem key={project._id} value={project.name}>
                      {project.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <FormControl fullWidth>
                <InputLabel id="select-developer-label">Développeur</InputLabel>
                <Select
                  labelId="select-developer-label"
                  id="select-developer"
                  multiple
                  value={namedeveloppeur}
                  onChange={handleDeveloperChange}
                >
                  <MenuItem value="">Sélectionnez un ou plusieurs développeurs</MenuItem>
                  {developers.map(developer => (
                    <MenuItem key={developer._id} value={developer.name}>
                      {developer.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <StyledTypography variant="h6">Projet sélectionné :</StyledTypography>
              <StyledTypography variant="body1">{namedprojet}</StyledTypography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <StyledTypography variant="h6">Développeurs sélectionnés :</StyledTypography>
              <StyledTypography variant="body1">{namedeveloppeur.join(', ')}</StyledTypography>
            </StyledPaper>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

const StyledPaper = (props) => (
  <Paper elevation={3} style={{ padding: '20px', ...props.style }}>
    {props.children}
  </Paper>
);

const StyledTypography = (props) => (
  <Typography {...props} style={{ fontWeight: 'bold', ...props.style }}>
    {props.children}
  </Typography>
);
