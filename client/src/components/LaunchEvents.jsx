import { useParams, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

export const LaunchEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [launchEvents, setLaunchEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/data/events/${id}/events`);
        const data = await response.json();
        setLaunchEvents(data.data);
        console.log(data.data);
      } catch (error) {
        console.error('Error fetching Launch events:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleRowClick = (params) => {
    const eventName = params.row.eventName;
    navigate(`/events/${id}/${encodeURIComponent(eventName)}`);
  };

  const columns = [
    {
      field: "timeProcessed",
      headerName: "Time Processed",
      width: 150,
    },
    {
      field: "eventName",
      headerName: "Event Name",
      width: 200,
    },
    {
      field: "timeRemaining",
      headerName: "Time Remaining",
      width: 150,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "responseRecommendation",
      headerName: "Response Recommendation",
      width: 200,
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Launch Events - Launch ID: {id}</h2>

      {launchEvents.length > 0 ? (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={launchEvents}
            columns={columns}
            getRowId={(row) => row.eventName}
            onRowClick={handleRowClick}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={(model) => setPaginationModel(model)}
            pageSizeOptions={[5, 10]}
            sx={{
              "& .MuiDataGrid-row:hover": {
                cursor: "pointer",
              },
            }}
          />
        </div>
      ) : (
        <div>
          <h3>No events found for Launch ID: {id}</h3>
          <p>Please check the launch ID.</p>
        </div>
      )}
    </div>
  );
};
