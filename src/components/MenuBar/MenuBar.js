import {React} from 'react'
import { Grid,Paper } from '@mui/material'
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const MenuBar = () => {

  return (
     <div >
        <Grid container spacing={1} >
            <Grid item xs={4} sm={4} md={4} lg={4}>
               <Link to='/grammar-punctuation-enhancer'>
                  <Item>Grammer</Item>
               </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Link to='/text-enhancer'>
                  <Item>Text Enhancer</Item>
              </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Link to='/text-analyzer'>
                  <Item>Text Analyzer</Item>
              </Link>
            </Grid>
        </Grid>
     </div>
  )
}

export default MenuBar
