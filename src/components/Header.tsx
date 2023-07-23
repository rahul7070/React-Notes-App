import { AppBar, Toolbar, Typography } from '@mui/material';
import { logo } from "../constants/constant";

const Header:React.FunctionComponent = ()=>{
    return (
        <AppBar>
            <Toolbar >
                <img src={logo} alt="logo" style={{width:80, marginRight:10}} />
                <Typography>Evernote</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;