import { useParams } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

export const EventDetails = () => {
    const { eventName } = useParams();
    const decodedEventName = decodeURIComponent(eventName);
    const [selectedCOA, setSelectedCOA] = useState('Assess');
    const [showCOAOptions, setShowCOAOptions] = useState(false);
    
    const COA_OPTIONS = [
      'Do Nothing',
      'Attribute',
      'Assess',
      'Mitigate',
      'Prevent',
      'Evade',
      'Resume Mission',
      'Damage Assessment',
    ];

    const coaOptionStyles = {
      container: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#808080',
        padding: '20px',
        borderRadius: '5px',
        zIndex: 1000,
        minWidth: '400px',
      },
      header: {
        color: 'white',
        marginTop: 0,
      },
      list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      },
      item: {
        display: 'flex',
        alignItems: 'center',
      },
      checkbox: {
        marginRight: '10px',
      },
      label: (option) => ({
        backgroundColor: option === 'Prevent' ? '#00FFFF' : '#00FF00',
        color: 'black',
        padding: '5px 10px',
        borderRadius: '3px',
        width: '150px',
        cursor: 'pointer',
      }),
      footer: {
        marginTop: '20px',
        textAlign: 'right',
      },
      closeButton: {
        backgroundColor: '#6495ED',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '3px',
        cursor: 'pointer',
      },
    };
    
    const eventsData = [
        {
            eventName: 'Pre-Launch Meeting',
            launchSite: 'Balkonur, RUS',
            surpriseLaunch: 'Yes',
            eventTime: '25-12-25',
            blueObjs: 'AMER-123',
            redObjs: 'Rocket Booster',
            periodOfInterest: 'POI Timestamp1-timestamp2'
        },
        {
            eventName: 'Domestic Launch',
            launchSite: 'Cape Canaveral, USA',
            surpriseLaunch: 'No',
            eventTime: '30-12-25',
            blueObjs: 'AMER-456',
            redObjs: 'Satellite',
            periodOfInterest: 'POI Timestamp3-timestamp4'
        }
    ];
    
    const eventData = eventsData.find(event => event.eventName === decodedEventName) || eventsData[1];
    
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
    
    const rows = [eventData];
    
    // Handle COA change
    const handleChangeCOA = () => {
        setShowCOAOptions((prev) => !prev);
    };
    
    // Handle confirm button click
    const handleConfirm = () => {
        alert(`Confirmed action: ${selectedCOA}`);
    };
    
    return (
        <div style={{ padding: '2rem' }}>
            {/* Header with current time */}
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
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.eventName}
                    hideFooter={true}
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    disableRowSelectionOnClick
                />
            </div>
            
            {/* Response recommendation and action buttons */}
            <div style={{ backgroundColor: '#808080', padding: '20px', color: 'white', marginBottom: '20px', position: 'relative' }}>
                <div style={{ marginBottom: '10px' }}>
                    <span>Response Recommendation: </span>
                    <span style={{ backgroundColor: 'yellow', color: 'black', padding: '2px 5px' }}>
                        {selectedCOA}
                    </span>
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    {selectedCOA === 'Assess' ? 
                        'Assign task force to assess which blue satellites may be affected by potential future launch.' :
                        'Enact orbit corrections so that blue satellites avoid predicted launch corridor.'}
                </div>
                
                <div style={{ backgroundColor: 'red', color: 'white', padding: '2px 5px', display: 'inline-block' }}>
                    COA Expiration: <i>2 hours 27 minutes</i>
                </div>
                
                <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={handleConfirm}
                        style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Confirm
                    </button>
                    <button 
                        onClick={handleChangeCOA}
                        style={{ backgroundColor: '#6495ED', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Change COA
                    </button>
                </div>
            </div>
            
            {/* Display Details button */}
            <button style={{ backgroundColor: '#6495ED', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Display Details
            </button>
            
            {/* COA Options Dialog - Simplified */}
            {showCOAOptions && (
              <div style={coaOptionStyles.container}>
                <h3 style={coaOptionStyles.header}>Change COA(s) (single select)</h3>

                <div style={coaOptionStyles.list}>
                  {COA_OPTIONS.map((option) => (
                    <div key={option} style={coaOptionStyles.item}>
                      <input
                        type="checkbox"
                        id={option.replace(/\s/g, '')}
                        checked={selectedCOA === option}
                        onChange={() => {
                          setSelectedCOA(option);
                          setShowCOAOptions(false);
                        }}
                        style={coaOptionStyles.checkbox}
                      />
                      <label
                        htmlFor={option.replace(/\s/g, '')}
                        style={coaOptionStyles.label(option)}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                <div style={coaOptionStyles.footer}>
                  <button
                    onClick={() => setShowCOAOptions(false)}
                    style={coaOptionStyles.closeButton}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
        </div>
    );
};