import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "./appStore";

const drawerWidth = 225;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "black",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: "black",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: theme.zIndex.drawer,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const TemporaryDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: "100%",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "100%",
    backgroundColor: "black",
  },
}));

export default function Sidenav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);
  const updateOpen = useAppStore((state) => state.updateOpen);
  const [openLeave, setOpenLeave] = React.useState(false);
  const [openSalary, setOpenSalary] = React.useState(false);
  const isLoggedIn = sessionStorage.getItem("user") !== null;
  const handleDrawerToggle = () => {
    updateOpen(!open);
  };

  const handleLeaveClick = () => {
    setOpenLeave(!openLeave);
  };

  const handleSalaryClick = () => {
    setOpenSalary(!openSalary);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Permanent Drawer for Large Screens */}
      <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
              <Avatar>{sessionStorage.getItem("user").charAt(0)}</Avatar>
              <Typography color={"white"} sx={{ margin: 2 }}>
                {sessionStorage.getItem("user")}
              </Typography>
            </Box>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0, color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/HomePage")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0, color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleSalaryClick}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Salary" sx={{ opacity: open ? 1 : 0, color: "white" }} />
              {open && (openSalary ? <ExpandLessIcon sx={{ color: "white" }} /> : <ExpandMoreIcon sx={{ color: "white" }} />)}
            </ListItemButton>
          </ListItem>
          {open && (
            <Collapse in={openSalary} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/salary/view")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Payslip" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/salary/history")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Loans" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          )}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleLeaveClick}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Leave" sx={{ opacity: open ? 1 : 0, color: "white" }} />
              {open && (openLeave ? <ExpandLessIcon sx={{ color: "white" }} /> : <ExpandMoreIcon sx={{ color: "white" }} />)}
            </ListItemButton>
          </ListItem>
          {open && (
            <Collapse in={openLeave} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/LeaveApply")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Leave Apply" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/LeaveRequestManager")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Leave Requests" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          )}
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/info")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Info" sx={{ opacity: open ? 1 : 0, color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Temporary Drawer for Small Screens */}
      <TemporaryDrawer
        variant="persistent"
        open={open}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
              <Avatar>{sessionStorage.getItem("user").charAt(0)}</Avatar>
              <Typography color={"white"} sx={{ margin: 2 }}>
                {sessionStorage.getItem("user")}
              </Typography>
            </Box>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0, color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/HomePage")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0, color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleSalaryClick}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Salary" sx={{ opacity: open ? 1 : 0, color: "white" }} />
              {open && (openSalary ? <ExpandLessIcon sx={{ color: "white" }} /> : <ExpandMoreIcon sx={{ color: "white" }} />)}
            </ListItemButton>
          </ListItem>
          {open && (
            <Collapse in={openSalary} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/salary/view")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Payslip" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/salary/history")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Loans" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          )}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleLeaveClick}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Leave" sx={{ opacity: open ? 1 : 0, color: "white" }} />
              {open && (openLeave ? <ExpandLessIcon sx={{ color: "white" }} /> : <ExpandMoreIcon sx={{ color: "white" }} />)}
            </ListItemButton>
          </ListItem>
          {open && (
            <Collapse in={openLeave} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/leave/overview")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Overview" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/leave/requests")}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#7f7f7f",
                        transform: "scale(1.10)",
                      },
                    }}
                  >
                    <ListItemText primary="Requests" sx={{ opacity: open ? 1 : 0, color: "white", marginLeft: "50px" }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
          )}
          <ListItem disablePadding sx={{ display: "block" }} onClick={() => navigate("/info")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "#7f7f7f",
                  transform: "scale(1.10)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Info" sx={{ opacity: open ? 1 : 0, color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </TemporaryDrawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          p: 3,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        {/* Add your content here */}
      </Box>
    </Box>
  );
}
