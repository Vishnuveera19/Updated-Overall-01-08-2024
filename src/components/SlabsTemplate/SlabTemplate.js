import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Container, Button, Box, TextField, ToggleButton, ToggleButtonGroup, TableHead, Table, TableBody, TableRow, Paper, TableCell, TableContainer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Home Page/Sidenav';
import Navbar from '../Home Page/Navbar';

const RootContainer = styled(Container)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
}));

const CustomButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: 'none',
    color: 'white',
}));

const ToggleContainer = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
}));

const TextFieldGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const AddButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
}));

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
    '&.Mui-selected': {
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
    },
}));

const ApplySection = () => {
    const [fields, setFields] = useState([{ id: 1 }]);

    const handleAddFields = () => {
        setFields([...fields, { id: fields.length + 1 }]);
    };

    return (
        <Box>
        <Box >
            {fields.map((field) => (
               
                <TextFieldGroup key={field.id}>
                    <TextField label="Average Monthly Income" variant="outlined" fullWidth />
                    <TextField label="Annual Basis" variant="outlined" fullWidth />
                    <TextField label="Half Yearly Basis" variant="outlined" fullWidth />
                </TextFieldGroup>
            ))}
            <AddButtonContainer>
                <CustomButton variant="contained" onClick={handleAddFields}>
                    Add More
                </CustomButton>
                <CustomButton variant="contained" onClick={handleAddFields}>
                    Save
                </CustomButton>
            </AddButtonContainer>
        </Box>
        </Box>
    );
};

const sampleTables = {
    apply: <ApplySection />,
    pending: (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Pending ID</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Date</TableCell>
                        <TableCell align='center'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" align='center'>
                            1
                        </TableCell>
                        <TableCell align='center'>Jane Smith</TableCell>
                        <TableCell align='center'>2024-07-29</TableCell>
                        <TableCell align='center'>Approved</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    ),
    history: (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>History ID</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Date</TableCell>
                        <TableCell align='center'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" align='center'>
                            1
                        </TableCell>
                        <TableCell align='center'>Bob Johnson</TableCell>
                        <TableCell align='center'>2024-07-29</TableCell>
                        <TableCell align='center'>Rejected</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    ),
    AttBonus: (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>History ID</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Date</TableCell>
                        <TableCell align='center'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" align='center'>
                            1
                        </TableCell>
                        <TableCell align='center'>Bob Johnson</TableCell>
                        <TableCell align='center'>2024-07-29</TableCell>
                        <TableCell align='center'>Rejected</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    ),
};

const SlabTemplate = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('pending');

    const handleToggle = (event, newSelected) => {
        if (newSelected !== null) {
            setSelected(newSelected);
        }
    };

    return (
        <Grid container>
            {/* Navbar and Sidebar */}
            <Grid item xs={12}>
                <div style={{ backgroundColor: '#fff' }}>
                    <Navbar />
                    <Box height={30} />
                    <Box sx={{ display: 'flex' }}>
                        <Sidenav />
                        <Grid item xs={12} sm={10} md={9} lg={8} xl={7} sx={{ marginLeft: 'auto', marginRight: 'auto', margin: '100px 50px 50px 50px' }}>
                            <RootContainer maxWidth="lg">
                                <TitleTypography variant="h4" gutterBottom>
                                    We've got it sorted for you!
                                </TitleTypography>
                                <Typography variant="body1" gutterBottom>   
                                    This is a Slab Section.. Here you can predefine some of the details and use it later in the setup section..
                                </Typography>
                                <ToggleContainer>
                                    <ToggleButtonGroup
                                        value={selected}
                                        exclusive
                                        onChange={handleToggle}
                                        aria-label="text alignment"
                                    >
                                        <CustomToggleButton value="apply" aria-label="apply">
                                            Professional Tax
                                        </CustomToggleButton>
                                        <CustomToggleButton value="pending" aria-label="pending">
                                            OverTime
                                        </CustomToggleButton>
                                        <CustomToggleButton value="history" aria-label="history">
                                            Income Tax
                                        </CustomToggleButton>
                                        <CustomToggleButton value="AttBonus" aria-label="AttBonus">
                                            Attendance Bonus
                                        </CustomToggleButton>
                                    </ToggleButtonGroup>
                                </ToggleContainer>
                                {sampleTables[selected]}
                            </RootContainer>
                        </Grid>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
};

export default SlabTemplate;
