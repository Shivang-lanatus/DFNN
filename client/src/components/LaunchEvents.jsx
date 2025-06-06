import { useParams, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

export const LaunchEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const handleRowClick = (params) => {
    const eventName = params.row.eventName;
    navigate(`/events/${id}/${encodeURIComponent(eventName)}`);
  };

  const getEventsData = (id) => {
    const eventsData = {
      1: [
        {
          eventName: "Pre-Launch Meeting",
          timeProcessed: "2 hours",
          timeRemaining: "0 hours",
          location: "Conference Room A",
          responseRecommendation: "Proceed",
        },
        {
          eventName: "System Check",
          timeProcessed: "45 minutes",
          timeRemaining: "15 minutes",
          location: "Server Room",
          responseRecommendation: "Monitor",
        },
        {
          eventName: "Final Review",
          timeProcessed: "0 minutes",
          timeRemaining: "3 hours",
          location: "Main Hall",
          responseRecommendation: "Prepare",
        },
        {
          eventName: "Launch Ceremony",
          timeProcessed: "0 minutes",
          timeRemaining: "2 days",
          location: "Auditorium",
          responseRecommendation: "Schedule",
        },
        {
          eventName: "Launch Analysis",
          timeProcessed: "0 minutes",
          timeRemaining: "3 days",
          location: "Analysis Lab",
          responseRecommendation: "Plan",
        },
        {
          eventName: "Post-Launch",
          timeProcessed: "0 minutes",
          timeRemaining: "3 days",
          location: "Analysis Lab",
          responseRecommendation: "Plan",
        },
        {
          eventName: "Launch",
          timeProcessed: "0 minutes",
          timeRemaining: "3 days",
          location: "Analysis Lab",
          responseRecommendation: "Plan",
        },
        {
          eventName: "Analysis",
          timeProcessed: "0 minutes",
          timeRemaining: "3 days",
          location: "Analysis Lab",
          responseRecommendation: "Plan",
        },
      ],
      2: [
        {
          eventName: "Planning Session",
          timeProcessed: "3 hours",
          timeRemaining: "0 hours",
          location: "Meeting Room B",
          responseRecommendation: "Complete",
        },
        {
          eventName: "Resource Allocation",
          timeProcessed: "1 hour",
          timeRemaining: "2 hours",
          location: "Office 201",
          responseRecommendation: "Continue",
        },
        {
          eventName: "Quality Assurance",
          timeProcessed: "0 minutes",
          timeRemaining: "4 hours",
          location: "QA Lab",
          responseRecommendation: "Initiate",
        },
        {
          eventName: "Stakeholder Review",
          timeProcessed: "0 minutes",
          timeRemaining: "1 day",
          location: "Boardroom",
          responseRecommendation: "Prepare",
        },
        {
          eventName: "Go-Live Event",
          timeProcessed: "0 minutes",
          timeRemaining: "3 days",
          location: "Main Campus",
          responseRecommendation: "Ready",
        },
      ],
      3: [
        {
          eventName: "Initial Briefing",
          timeProcessed: "0 minutes",
          timeRemaining: "5 days",
          location: "Conference Hall",
          responseRecommendation: "Schedule",
        },
        {
          eventName: "Technical Setup",
          timeProcessed: "0 minutes",
          timeRemaining: "6 days",
          location: "Tech Center",
          responseRecommendation: "Plan",
        },
        {
          eventName: "Beta Testing",
          timeProcessed: "0 minutes",
          timeRemaining: "7 days",
          location: "Testing Lab",
          responseRecommendation: "Prepare",
        },
        {
          eventName: "User Training",
          timeProcessed: "0 minutes",
          timeRemaining: "8 days",
          location: "Training Room",
          responseRecommendation: "Design",
        },
        {
          eventName: "Launch Day",
          timeProcessed: "0 minutes",
          timeRemaining: "9 days",
          location: "Main Venue",
          responseRecommendation: "Coordinate",
        },
      ],
    };

    return eventsData[id] || [];
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

  const eventsData = getEventsData(id);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Launch Events - Launch ID: {id}</h2>

      {eventsData.length > 0 ? (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={eventsData}
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
