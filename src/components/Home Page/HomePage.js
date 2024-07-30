import React from "react";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Search, Settings } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import { keyframes } from '@mui/system';
import { Navigate, useNavigate } from "react-router-dom";

const bounce = keyframes({
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateY(0)',
  },
  '40%': {
    transform: 'translateY(-15px)',
  },
  '60%': {
    transform: 'translateY(-10px)',
  },
});


export default function HomePage() {
    const navigate = useNavigate();

    const cardItems = [
        { text: "Masters", icon: <SchoolIcon /> ,onclick : () => navigate('/Masters')  },
        { text: "Setup", icon: <WorkIcon /> },
        { text: "Attendance", icon: <TodayIcon />, onclick : () => navigate('/Attendance') },
        { text: "Leave", icon: <AssignmentIcon /> },
        { text: "Shift", icon: <AccessTimeIcon /> },
        { text: "Payslip", icon: <ReceiptIcon /> },
        { text: "Slabs", icon: <BookIcon />, onclick : () => navigate('/SlabTemplate') }, 
        { text: "Employee", icon: <PeopleIcon /> },
      ];
      
    
  return (
    <Grid container>
      {/* Navbar and Sidebar */}
      <Grid item xs={12}>
        <div style={{ backgroundColor: "#fff" }}>
          <Navbar />
          <Box height={30} />
          <Box sx={{ display: "flex" }}>
            <Sidenav />
            {/* Main Content */}
            <Grid item xs={12} sm={10} md={9} lg={8} xl={7} style={{ marginLeft: "auto", marginRight: "auto", margin: "100px 50px 50px 50px" ,textAlign: 'left' }}>
              <Typography variant="h5" gutterBottom sx={{ color: "black" }}>
                HR Management System
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Search Integration..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3, bgcolor: "#ffffff", width: "400px" }} // Ensure the input field has a white background for readability
              />
              <Card sx={{ height: "74%", p: 2 }}>
                <Box
                  sx={{
                    border: "2px solid #1976d2",
                    borderRadius: "8px",
                    p: 3,
                    height: "100%",
                    bgcolor: "#9E9EDE",
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Grid container spacing={3}>
                      {cardItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Card
                            sx={{
                              height: '100%',
                              transition: 'transform 0.4s ease-in-out',
                              '&:hover': {
                                transform: 'scale(1.1) translateY(-10px)',
                                '& .icon-button, & .text': {
                                  animation: `${bounce} 2s infinite`,
                                },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2,
                                height: '100%',
                              }}
                            >
                              <IconButton className="icon-button" sx={{ mb: 2, color: 'black' }} onClick={item.onclick}>{item.icon}</IconButton>
                              <Typography className="text" variant="h6" sx={{color:'black'}}>{item.text}</Typography>
                            </Box>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}