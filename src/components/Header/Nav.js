import React from 'react'
import Title from './Title';
import Links from './Links';
import ToggleMode from './ToggleMode'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';



const commonStyles = {
   borderColor: 'text.primary',
   border: 2,
 };

const Nav = ({isDark,setDark}) => {
   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#4834d4' : '#a29bfe',
      ...theme.typography.body2,
      padding: theme.spacing(2.4),
      textAlign: 'center',
      color: theme.palette.text.primary,
   }));
   
   const handleClick=()=>{
      console.log(isDark);
      setDark(!isDark);
   }
  return (
    <div className='mt-1.5 flex-col items-center '>
    {/* {console.log(isDark)} */}
    <Grid container spacing={1} >
         <Grid item lg={8} md={6} sm={8} xs={7}>
            <Item sx={{ ...commonStyles }}>
               <Title/>
            </Item>
         </Grid>
         <Grid item xs={2} sm={2} xs={3}>
             <Item sx={{ ...commonStyles }}>
                <Links/>
             </Item>
         </Grid>
         <Grid item xs={2}  sm={2} xs={2}onClick={handleClick}>
             <Item sx={{ ...commonStyles }}>
             <ToggleMode isDark={isDark}/>
             </Item>
         </Grid>
    </Grid>
    </div>

  )
}

export default Nav;
