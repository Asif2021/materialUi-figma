import * as React from "react";
import './AppBar.css'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import BasicMenu from "./Menu";
import LanguageIcon from "@mui/icons-material/Language";
import Badge from "@mui/material/Badge";


const drawerWidth = 230;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "start", p:'50px' }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        // onClick={handleProfileMenuOpen}
        color="inherit"
        sx={{py:'40px'}}
      >
        <img src="./images/avatar.svg" alt="avatar" />
      </IconButton>

      <Box>
        <Button color="inherit" sx={{py:'20px'}}>support</Button>
        <Box>
          <Button color="inherit">
            language
          </Button>
        </Box>
        <Box>
         <Button  color="inherit" sx={{py:'20px'}}>
          create
         </Button>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar component="nav" style={{ padding:'18px 160px', backgroundColor: "#141416"}} className="appbar" >
        <Toolbar>
          <Box
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr:2, display: { sm: "none" } }}
            className="menu_icon"          >
            <MenuIcon  />
          </Box>
          
          <Box sx={{mr:2, display: { sm: "none", width:'100%' } }}>
            <img src="./images/logo.svg" alt="logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <img src="./images/logo.svg" alt="logo" sx={{display:{sm:'none'}}} />
            <img src="./images/divider.svg" alt="divider" className="divider"/>
           <Button sx={{color:'#777E90'}}>
           <BasicMenu />
           </Button>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, color:'#777E90' }}>
            <Button className="appbar_connect_btn">support</Button>
            <Button sx={{marginX:'24px'}} className="appbar_connect_btn" startIcon={<LanguageIcon />}>
              language
            </Button>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge sx={{marginX:'24px'}} color="success" badgeContent="" variant="dot">
                <img src="./images/Notification.svg" alt="" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src="./images/avatar.svg" alt="avatar" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default DrawerAppBar;
