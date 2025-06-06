import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Typography,
  Collapse
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const EventDetails = () => {
    const { id, eventName } = useParams();
    const decodedEventName = decodeURIComponent(eventName);
    const [selectedCOA, setSelectedCOA] = useState('Assess');
    const [showCOAOptions, setShowCOAOptions] = useState(false);
    const [eventDetails, setEventDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/v1/data/events/${id}/events/${decodedEventName}`);
          const data = await response.json();
          setEventDetails(data.data);
        } catch (error) {
          console.error('Error fetching Launch events:', error);
        }
      };
      fetchData();
    }, []);

    const COA_OPTIONS = {
      'Do Nothing': {
        text: 'Take no action and continue monitoring the situation.',
        conflictsWith: ['Prevent', 'Mitigate', 'Evade']
      },
      'Attribute': {
        text: 'Identify and attribute the source of the potential threat.',
        conflictsWith: []
      },
      'Assess': {
        text: 'Assign task force to assess which blue satellites may be affected by potential future launch.',
        conflictsWith: []
      },
      'Mitigate': {
        text: 'Implement measures to reduce the impact of the potential threat.',
        conflictsWith: ['Do Nothing']
      },
      'Prevent': {
        text: 'Enact orbit corrections so that blue satellites avoid predicted launch corridor.',
        conflictsWith: ['Do Nothing']
      },
      'Evade': {
        text: 'Execute evasive maneuvers to avoid potential collision or interference.',
        conflictsWith: ['Do Nothing']
      },
      'Resume Mission': {
        text: 'Return to normal operations after threat has passed.',
        conflictsWith: []
      },
      'Damage Assessment': {
        text: 'Evaluate any damage or impact that has occurred.',
        conflictsWith: []
      }
    };

    // Mock data
    const blueObjects = [
        { id: 1, name: 'Amer-123' },
        { id: 2, name: 'GPS-343' },
        { id: 3, name: 'GPS-243' },
        { id: 4, name: 'Amer-232' },
        { id: 5, name: 'GPS-444' }
    ];

    const redObjects = [
        { 
            id: 1,
            country: 'PRC',
            launchVehicle: 'On Ground',
            satId: '',
            orbit: 'MEO',
            missionType: 'Unknown',
            payload: 'Unknown',
            dateLaunched: '4/2/2025',
            details: 'Details'
        }
    ];

    const isOptionDisabled = (optionKey) => {
      return COA_OPTIONS[optionKey].conflictsWith.includes(selectedCOA);
    };

    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
        
    const columns = [
        { field: 'eventName', headerName: 'Event Name', width: 150 },
        { field: 'launchSite', headerName: 'Launch Site', width: 150 },
        { field: 'surpriseLaunch', headerName: 'Surprise Launch?', width: 150 },
        { field: 'eventTime', headerName: 'Event Time', width: 150 },
        { 
            field: 'blueObjs', 
            headerName: 'Blue Objs', 
            width: 200,
            renderCell: (params) => (
                <div>
                    {params.value}
                    <button style={{ marginLeft: '5px', backgroundColor: '#00FFFF', fontSize: '10px', borderRadius: '20px', padding: '2px 5px' }}>
                        Object Info
                    </button>
                </div>
            )
        },
        { 
            field: 'redObjs', 
            headerName: 'Red Objs', 
            width: 200,
            renderCell: (params) => (
                <div>
                    {params.value}
                    <button style={{ marginLeft: '5px', backgroundColor: '#00FFFF', fontSize: '10px', borderRadius: '20px', padding: '2px 5px' }}>
                        Object Info
                    </button>
                </div>
            )
        },
        { field: 'periodOfInterest', headerName: 'Period of Interest', width: 300 },
    ];

    const blueColumns = [
        { field: 'name', headerName: 'Name', width: 200 }
    ];

    const redColumns = [
        { field: 'country', headerName: 'Country', width: 100 },
        { field: 'launchVehicle', headerName: 'Launch Vehicle', width: 120 },
        { field: 'satId', headerName: 'Sat ID', width: 80 },
        { field: 'orbit', headerName: 'Orbit', width: 80 },
        { field: 'missionType', headerName: 'Mission Type', width: 120 },
        { field: 'payload', headerName: 'Payload(s)', width: 120 },
        { field: 'dateLaunched', headerName: 'Date Launched', width: 120 },
        { 
            field: 'details', 
            headerName: 'Details', 
            width: 100,
            renderCell: () => (
                <button style={{ backgroundColor: '#6495ED', color: 'white', fontSize: '10px', borderRadius: '5px', padding: '2px 8px', border: 'none' }}>
                    Details
                </button>
            )
        }
    ];
    
    const handleCOASelection = (optionKey) => {
      setSelectedCOA(optionKey);
    };
    
    const handleConfirm = () => {
        alert(`Confirmed action: ${selectedCOA}`);
    };
    
    return (
        <div style={{ padding: '2rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#6495ED', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
                    Current Time: {new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}
                </div>
                <div style={{ backgroundColor: '#E8F5E9', color: 'black', padding: '10px 20px', borderRadius: '5px' }}>
                    Peacetime
                </div>
            </div>
            
            {/* Event details table */}
            <div style={{ height: 'auto', width: '100%', marginBottom: '20px' }}>
               {eventDetails ? <DataGrid
                    rows={Array.isArray(eventDetails) ? eventDetails : [eventDetails]}
                    columns={columns}
                    getRowId={(row) => row.eventName}
                    hideFooter={true}
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    disableRowSelectionOnClick
                /> : (
                  <div style={{ padding: '20px', backgroundColor: '#ffdddd', color: '#d8000c', border: '1px solid #d8000c', borderRadius: '5px' }}>
                    No event data found for this ID and name.
                  </div>
                )}
            </div>
            
            {/* Response recommendation */}
            <div style={{ backgroundColor: '#808080', padding: '20px', color: 'white', marginBottom: '20px', position: 'relative' }}>
                <div style={{ marginBottom: '10px' }}>
                    <span>Response Recommendation: </span>
                    <span style={{ backgroundColor: 'yellow', color: 'black', padding: '2px 5px' }}>
                        {selectedCOA}
                    </span>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    {COA_OPTIONS[selectedCOA]?.text}
                </div>
                <div style={{ backgroundColor: 'red', color: 'white', padding: '2px 5px', display: 'inline-block' }}>
                    COA Expiration: <i>2 hours 27 minutes</i>
                </div>
                <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '10px' }}>
                    <button onClick={handleConfirm} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                        Confirm
                    </button>
                    <button onClick={() => setShowCOAOptions(true)} style={{ backgroundColor: '#6495ED', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                        Change COA
                    </button>
                </div>
            </div>
            
            {/* Display Details button */}
            <button onClick={() => setShowDetails(!showDetails)} style={{ backgroundColor: '#6495ED', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
                {showDetails ? 'Hide Details' : 'Display Details'}
            </button>

            {/* Details Section */}
            <Collapse in={showDetails}>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                    {/* Blue Objects */}
                    <div style={{ flex: 1 }}>
                        <div style={{ backgroundColor: '#6495ED', color: 'white', padding: '10px', marginBottom: '10px' }}>
                            <span style={{ backgroundColor: 'white', color: '#6495ED', padding: '5px 15px', marginRight: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
                                Blue Object(s)
                            </span>
                            🇺🇸
                        </div>
                        <div style={{ backgroundColor: '#87CEEB', color: 'white', padding: '10px', marginBottom: '10px', fontSize: '12px' }}>
                            These objects are predicted to be in launch corridor at predicted launch times.
                        </div>
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid
                                rows={blueObjects}
                                columns={blueColumns}
                                hideFooter={true}
                                disableColumnMenu
                                disableRowSelectionOnClick
                            />
                        </div>
                    </div>

                    {/* Red Objects */}
                    <div style={{ flex: 2 }}>
                        <div style={{ backgroundColor: '#DC143C', color: 'white', padding: '10px', marginBottom: '10px' }}>
                            <span style={{ backgroundColor: 'white', color: '#DC143C', padding: '5px 15px', marginRight: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
                                Red Object(s)
                            </span>
                            🇨🇳
                        </div>
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid
                                rows={redObjects}
                                columns={redColumns}
                                hideFooter={true}
                                disableColumnMenu
                                disableRowSelectionOnClick
                            />
                        </div>
                    </div>
                </div>
            </Collapse>
            
            {/* COA Modal */}
            <Modal open={showCOAOptions} onClose={() => setShowCOAOptions(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" gutterBottom>
                        Change COA(s) (single select)
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        {Object.entries(COA_OPTIONS).map(([optionKey, optionData]) => {
                            const isDisabled = isOptionDisabled(optionKey);
                            const isSelected = selectedCOA === optionKey;
                            
                            return (
                                <Box key={optionKey} sx={{ mb: 1 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={isSelected}
                                                onChange={() => !isDisabled && handleCOASelection(optionKey)}
                                                disabled={isDisabled}
                                            />
                                        }
                                        label={
                                            <Typography 
                                                sx={{ 
                                                    fontWeight: isSelected ? 'bold' : 'normal',
                                                    backgroundColor: optionKey === 'Prevent' ? '#00FFFF' : '#00FF00',
                                                    color: 'black',
                                                    padding: '4px 8px',
                                                    borderRadius: '4px',
                                                    display: 'inline-block',
                                                    minWidth: '120px',
                                                    opacity: isDisabled ? 0.5 : 1
                                                }}
                                            >
                                                {optionKey}
                                                {isDisabled && <span style={{ color: '#ff9800', fontWeight: 'bold', marginLeft: '8px' }}>(Not available)</span>}
                                            </Typography>
                                        }
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                        <Button variant="contained" onClick={() => setShowCOAOptions(false)} sx={{ backgroundColor: '#6495ED' }}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};