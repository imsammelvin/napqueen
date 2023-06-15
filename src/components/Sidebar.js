import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import OrderIcon from "@mui/icons-material/PlaylistAddCheck";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CatalogIcon from "@mui/icons-material/MenuBook";
import ReportIcon from "@mui/icons-material/Assessment";
import HelpIcon from "@mui/icons-material/Help";

const drawerWidth = 240;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : 64,
        flexShrink: 0,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
      anchor="left"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          edge="start"
          sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="close sidebar"
          onClick={toggleSidebar}
          edge="start"
          sx={{ mr: 2, ...(isOpen ? {} : { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <DashboardIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <BarChartIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Charts" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <InventoryIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Inventory" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <OrderIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Order" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <CalendarTodayIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Calendar" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <CatalogIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Catalog" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <ReportIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Report" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <AccountCircleIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Profile" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <SettingsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Settings" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ marginRight: "-20px" }}>
            <HelpIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Help" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
