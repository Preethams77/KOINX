import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

 

  return (
    <div>
        <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className="new"  /></IconButton>
     
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
          <div className='drawer-div'>
                <a href="/">
            <p>Crypto Taxes</p>
            </a>
            <a href="/">
            <p>Free Tools</p>
            </a>
            <a href="/">
            <p>Resource Center</p>
            </a>
          </div>
          </Drawer>
     
    </div>
  );
}

      