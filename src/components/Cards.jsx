import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import'../css/Card.css'
import Button from '@mui/material/Button';
import axios from 'axios';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({img,Title,AuthorName,Id, ImgId}) {

//  console.log('klk id imge',ImgId);
function DeleteC(id,imgid) {
  axios.delete(`https://localhost:44394/Api/Pictues/${imgid}`)
  .then(response => {
   
     axios.delete(`https://localhost:44394/Api/Books/${id}`)
    console.log(response);
    window.location.reload();
  })
  .catch(error => {
   
    alert(error);
  });
}
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ?  '#1A2027' : '#fff',
      }}
    >
      
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="img book" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <h6>Titulo:</h6> {Title}
              </Typography>
              <Typography variant="body2" gutterBottom>
             
              </Typography>
              <Typography variant="body2" >
              <h6>Autor:</h6> {AuthorName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button variant="contained"  onClick={() =>DeleteC(Id,ImgId)} >Delete</Button>
              </Typography>
            </Grid>
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
  );
}
