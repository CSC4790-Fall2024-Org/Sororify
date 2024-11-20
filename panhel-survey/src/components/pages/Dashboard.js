import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from '@mui/material';
import axios from 'axios';
import './Dashboard.css'; // Import the CSS file
import KDSurvey from './ChapterSurveys/KDSurvey'; 
import SuperAdminSurvey from './ChapterSurveys/SuperAdminSurvey';

const Dashboard = () => {
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [adminInfo, setAdminInfo] = useState([])
    


    const columns = [
        { field: 'name', headerName: 'Name', width: 150, editable: true },
        { field: 'chapter', headerName: 'Chapter', width: 110, editable: true },
        { field: 'email', headerName: 'Email', width: 200, editable: true },
        { field: 'pin', headerName: 'PIN', width: 200, editable: true },
    ];


    useEffect(() => {  // FETCH CHAPTER SURVEY
        // or any other survey type you want to access
        axios.get(`http://localhost:5000/api/survey-results?surveyType=Admin Survey`)
        //axios.get('http://localhost:5000/api/survey-results?surveyType=KD Survey')
            .then((response) => {
                setAdminInfo(response.data);  // Update the state with fetched results
                console.log('KD Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });
    }, []); 

    useEffect(() => {
        // Transform the fetched data into the format required by the DataGrid
        const transformedRows = adminInfo.map((item) => ({
            id: item._id,
            name: item.surveyData.question1.Name,
            chapter: item.surveyData.question1.Chapter,
            email: item.surveyData.question1.Email,
            pin: item.surveyData.question1.Pin,
        }));
        setRows(transformedRows);
    }, [adminInfo]);
    

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);

    }

    const handleAddRow = () => {
        const newRow = { name: '', chapter: '', email: '', pin: '' };
        axios.post('http://localhost:5000/api/rows', newRow)
            .then(response => {
                console.log('Added row:', response.data); // Log the added row
                setRows([...rows, response.data]);
            })
            .catch(error => {
                console.error('There was an error adding the row!', error); // Log any errors
            });;
    };


    return (
        <Container>
            <h1 className="dashboard-header">Dashboard</h1>
            <Box display="flex" justifyContent="center" mb={2}>
                <Button variant="text"  sx={{ color: '#000080' }} onClick={handleClickOpen}>
                    Add Admin
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#FCFBF4', // Light gray background color
                        color: '#000080', // Navy blue text color
                    },
                }}
            >
                <DialogContent>
                    <SuperAdminSurvey />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="000080">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>


            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowId={(row) => row.id}
                    sx={{
                        '& .MuiDataGrid-root': {
                            backgroundColor: '#ffffff', // White background color
                        },
                        '& .MuiDataGrid-cell': {
                            backgroundColor: '#ffffff',
                            color: '#000080', // Navy blue text color
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#f0f0f0', // Light gray background for headers
                            color: '#000080', // Navy blue text color for headers
                        },
                        '& .MuiDataGrid-footerContainer': {
                            backgroundColor: '#f0f0f0', // Light gray background for footer
                        },
                    }}
                />
            </div>
        </Container>
    );
};

export default Dashboard;
