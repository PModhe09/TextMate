import React from 'react'
import Title from './Title';
import Links from './Links';
import ToggleMode from './ToggleMode'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Nav = () => {
  return (
    <div>
    <Grid container spacing={0} style={{marginBottom:'2vh'}}>
         <Grid item xs={8}>
            <Item>
               <Title/>
            </Item>
         </Grid>
         <Grid item xs={2}>
             <Item>
                <Links/>
             </Item>
         </Grid>
         <Grid item xs={1.7} style={{marginLeft:'2vw'}}>
              <Item>
                 <ToggleMode/>
              </Item>
          </Grid>
    </Grid>
    </div>

  )
}

export default Nav;
