import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from'react';

export const ListEvents = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/v1/data/events');
          const data = await response.json();
          setEvents(data.data);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
    
      fetchData();
    }, []);

    const columns = [
      { field: 'id', headerName: 'Launch', width: 70 },
      { field: 'Proximity', headerName: 'Proximity', width: 200 },
      { field: 'location', headerName: 'Location', width: 150 },
    ];
  
    const handleRowClick = (params) => {
      navigate(`/events/${params.row.id}`);
    };

    return(
        <div style={{ padding: '2rem' }}>
            <DataGrid
              rows={events}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              onRowClick={handleRowClick}
              sx={{
                '& .MuiDataGrid-row:hover': {
                  cursor: 'pointer',
                },
              }}
            />
        </div>
    )
}