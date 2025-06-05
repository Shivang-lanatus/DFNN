import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {

    const navigate = useNavigate();

    const columns = [
      { field: 'id', headerName: 'Launch', width: 70 },
      { field: 'Proximity', headerName: 'Proximity', width: 200 },
      { field: 'location', headerName: 'Location', width: 150 },
    ];
  
    //from API response we can use map() and set data in id, proximity like fields...
    const rows = [
      { id: 1, Proximity: 'Concert', location: 'NYC' },
      { id: 2, Proximity: 'Conference', location: 'LA' },
    ];
  
    const handleRowClick = (params) => {
      navigate(`/events/${params.row.id}`);
    };

    return(
        <div style={{ padding: '2rem' }}>
            <DataGrid
              rows={rows}
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