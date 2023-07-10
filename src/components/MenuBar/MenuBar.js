import {React} from 'react'
import { Grid,Paper } from '@mui/material'
import { styled } from '@mui/material/styles';



import { Link } from 'react-router-dom';

const commonStyles = {
  // borderColor: 'text.primary',
  // border: 2,
  fontSize:'2vh',
  "&:hover": {
    color: 'white',
    backgroundColor: '#0984e3'
  }
};

const MenuBar = ({isDark,setDark}) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#152737' : '#a29bfe',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  return (
     <div className='mt-4'>
        <Grid container spacing={2}  >
            <Grid  item xs={4} sm={4} md={4} lg={4} >
               <Link to='grammar-corrector'>
                  <Item  sx={{ ...commonStyles }}>Grammer</Item>
               </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} >
              <Link to='/text-enhancer'>
                  <Item  sx={{ ...commonStyles }}>Enhancer</Item>
              </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} >
              <Link to='/text-analyzer'>
                  <Item  sx={{ ...commonStyles }}>Analyzer</Item>
              </Link>
            </Grid>
        </Grid>
     </div>
  )
}

export default MenuBar
