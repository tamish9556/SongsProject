import { Link} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction, IconButton} from "@mui/material";
import {ReplayCircleFilled } from "@mui/icons-material";

function BackButton() {
    return(
        <>
            <Link to="/"> 
            <BottomNavigation sx={{ width: 240 }}>
                <BottomNavigationAction label="Back" value="Back" icon={<IconButton style={{color:'purple'}} aria-label="back" size="large"><ReplayCircleFilled fontSize="inherit"></ReplayCircleFilled></IconButton> } />
            </BottomNavigation>
            </Link>
        </>
    )
}

export default BackButton;