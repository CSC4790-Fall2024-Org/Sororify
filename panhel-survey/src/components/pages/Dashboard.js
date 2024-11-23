import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import axios from 'axios';
import { BarChart,BarElement, XAxis, LineChart, LineSeries, LineElement, YAxis, Tooltip, Legend, ResponsiveContainer } from '@mui/x-charts';
import './Dashboard.css'; // Import the CSS file
import SuperAdminSurvey from './ChapterSurveys/SuperAdminSurvey';

const Dashboard = () => {
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [adminInfo, setAdminInfo] = useState([])
    const [axoMembers, setAxoMembers] = useState([])
    const [aphiMembers, setAphiMembers] = useState([])
    const [xoMembers, setXoMembers] = useState([])
    const [dddMembers, setDddMembers] = useState([])
    const [dgMembers, setDgMembers] = useState([])
    const [kdMembers, setKdMembers] = useState([])
    const [kkgMembers, setKkgMembers] = useState([])
    const [pnmSurvey, setPnmSurvey] = useState([])


    const columns = [
        { field: 'name', headerName: 'Name', width: 150, editable: true },
        { field: 'chapter', headerName: 'Chapter', width: 110, editable: true },
        { field: 'email', headerName: 'Email', width: 200, editable: true },
        { field: 'pin', headerName: 'PIN', width: 200, editable: true },
    ];


    useEffect(() => {  // FETCH CHAPTER SURVEY
        // or any other survey type you want to access
        axios.get(`http://localhost:5000/api/survey-results?surveyType=Admin Survey`)
            .then((response) => { setAdminInfo(response.data); })
            .catch((error) => {console.error('Error fetching DG Survey results:', error);});

        axios.get(`http://localhost:5000/api/survey-results?surveyType=AXO Survey`)
            .then((response) => { setAxoMembers(response.data); console.log('axo survey', response.data); })
            .catch((error) => {console.error('Error fetching DG Survey results:', error);});

        axios.get(`http://localhost:5000/api/survey-results?surveyType=APHI Survey`)
            .then((response) => { setAphiMembers(response.data);  })
            .catch((error) => { console.error('Error fetching DG Survey results:', error); });

        axios.get(`http://localhost:5000/api/survey-results?surveyType=XO Survey`)
            .then((response) => {   setXoMembers(response.data); })
            .catch((error) => {console.error('Error fetching DG Survey results:', error);  });

        axios.get(`http://localhost:5000/api/survey-results?surveyType=DDD Survey`)
            .then((response) => { setDddMembers(response.data);  })
            .catch((error) => {console.error('Error fetching DG Survey results:', error); });

        axios.get(`http://localhost:5000/api/survey-results?surveyType=DG Survey`)
            .then((response) => { setDgMembers(response.data); })
            .catch((error) => { console.error('Error fetching DG Survey results:', error);});

        axios.get(`http://localhost:5000/api/survey-results?surveyType=KD Survey`)
            .then((response) => {setKdMembers(response.data);  })
            .catch((error) => {   console.error('Error fetching DG Survey results:', error);});

        axios.get(`http://localhost:5000/api/survey-results?surveyType=KKG Survey`)
            .then((response) => { setKkgMembers(response.data);  })
            .catch((error) => { console.error('Error fetching DG Survey results:', error); });

        axios.get('http://localhost:5000/api/survey-results?surveyType=PNM Survey')
            .then((response) => { setPnmSurvey(response.data);  console.log('PNM Survey survey results fetched:', response.data); })
            .catch((error) => { console.error('Error fetching PNM Survey survey results:', error); });
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

        axios.get(`http://localhost:5000/api/survey-results?surveyType=Admin Survey`)
        //axios.get('http://localhost:5000/api/survey-results?surveyType=KD Survey')
            .then((response) => {
                setAdminInfo(response.data);  // Update the state with fetched results
                console.log('Admin Survey results fetched:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching DG Survey results:', error);
            });        

    }

    const chapterCounts = [
        { chapter: 'AXO', count: axoMembers.length },
        { chapter: 'APHI', count: aphiMembers.length },
        { chapter: 'XO', count: xoMembers.length },
        { chapter: 'DDD', count: dddMembers.length },
        { chapter: 'DG', count: dgMembers.length },
        { chapter: 'KD', count: kdMembers.length },
        { chapter: 'KKG', count: kkgMembers.length },
    ];

   // Format the data for the line chart
   const lineChartData = pnmSurvey.map((item, index) => ({
    index: index + 1, // Use the index as the x-axis value
    count: 1, // Each entry represents one response
}));

// Log the lineChartData to the console
console.log(lineChartData);

    return (
        <Container>
            <h1 className="dashboard-header">Dashboard</h1>
            <Container
                sx={{
                    width: 600,
                    height: 400,
                    backgroundColor: '#ffffff', // White background color
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3, // Add shadow
                    borderRadius: 2, // Round the edges
                    mb: 3,
                }}
            >
                <BarChart
                    xAxis={[{ scaleType: 'band',label: 'Member Chapter Survey Responses', data: chapterCounts.map(item => item.chapter) }]}
                    series={[
                        {
                            data: chapterCounts.map(item => item.count),
                            color: '#f94ea0', // Pink color
                        },
                    ]}
                    width={600}
                    height={400}
                    borderRadius={5}
                    
                />

                
            </Container>

            <Container
                sx={{
                    width: 600,
                    height: 400,
                    backgroundColor: '#ffffff', // White background color
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3, // Add shadow
                    borderRadius: 2, // Round the edges
                    mb: 3,
                }}
            >
                 
                 <LineChart
                    series={[
                        {
                            data: lineChartData.map(item => item.count),
                            color: '#3f51b5', // Blue color
                            showMark: false, // Disable points
                        },
                    ]}
                    width={600}
                    height={400}
                >
                    
                </LineChart>
                
            </Container>
         

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


            <h2 className="dashboard-header">Chapter Admins</h2>
            <Box display="flex" justifyContent="center" mb={2}>
                <Button variant="text"  sx={{ color: '#000080' }} onClick={handleClickOpen}>
                    Add Admin
                </Button>
            </Box>
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
                            backgroundColor: '#ffffff', // Light gray background for footer
                        },
                    }}
                />
            </div>
        </Container>
    );
};

export default Dashboard;
