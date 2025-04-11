import Box from '@mui/material/Box';
import React from "react";

// const priorityColors = {
//     low: "#228B22",
//     medium: "#F4BB44",
//     high: "#AA4A44"
//   };

const statusColors = {
  "not started": "#E0E0E0",
  "in progress": "#ADD8E6",
  "done": "#90EE90"
};


function Task(taskProps) { 
  const { name, status } = taskProps.taskProps;
  const statusColor = statusColors[status];

  return ( 
    <Box
        sx={{
          width: '95%',
          border: 2,
          borderRadius: 3,
          borderColor: '#F0F0F0',
          bgcolor: '#FFFFFF',
          '&:hover': {
            bgcolor: '#F0F0F0',
          },
          flexDirection: "column",
          p: 1
        }}
      >
        <h2 class="text-base text-black">{name}</h2>
        <Box
        sx={{
          width:'70%',
          bgcolor: statusColor,
          borderRadius: 2,
          flexDirection: "column",
          justifyContent: "center"
        }}
        >
        <p class="text-sm text-black">{status}</p>
        </Box>
    </Box>
  );
}

export default Task

