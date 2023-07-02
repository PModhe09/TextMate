import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const ToggleMode = ({isDark}) => {
  return(
    <div className="text-xl">
    {isDark === true
    ?<DarkModeOutlinedIcon/>:<LightModeOutlinedIcon/>
    }
       
    </div>
  )
  
}

export default ToggleMode
