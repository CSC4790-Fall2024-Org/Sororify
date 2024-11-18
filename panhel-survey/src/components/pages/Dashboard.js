import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {

    
    const [rows, setRows] = useState([
        { id: 1, name: 'Isabelle Kellezi', chapter: 'AXO', email: 'ikellezi@villanove.edu', pin: 4371 },
        { id: 2, name: 'Ava Tower', chapter: 'XO', email: 'atower@villanova.edu', pin: 3215 },
        { id: 3, name: 'Julia Marcus', chapter: 'KD', email: 'jmarcus@villanova.edu', pin: 1234 },
        { id: 4, name: 'Sophia Lee', chapter: 'DG', email: 'slee@villanova.edu', pin: 5678 },
        { id: 5, name: 'Mia Johnson', chapter: 'DDD', email: 'hihi@villanova.edu', pin: 9876 },
        { id: 6, name: 'Liv Cornwall', chapter: 'APHI', email: 'lcornwall@villanova.edu', pin: 5432 },
        { id: 7, name: 'Maddie Smith', chapter: 'KKG', email: 'msmith@villanova.edu', pin: 8765 },
     ]);

    const columns = [
        { field: 'name', headerName: 'Name', width: 150, editable: true },
        { field: 'chapter', headerName: 'Chapter', width: 110, editable: true },
        { field: 'email', headerName: 'Email', width: 200, editable: true },
        { field: 'pin', headerName: 'PIN', width: 200, editable: true },
    ];

    const handleEditCellChange = (params) => {
        const updatedRows = rows.map((row) => {
            if (row.id === params.id) {
                return { ...row, [params.field]: params.value };
            }
            return row;
        });
        setRows(updatedRows);
    };

    return (
        <Container>
            <h1 className="dashboard-header">Dashboard</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    onEditCellChangeCommitted={handleEditCellChange}
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
