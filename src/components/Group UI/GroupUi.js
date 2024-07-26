import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getRequest, postRequest } from "../../serverconfiguration/requestcomp";
import { ServerConfig } from "../../serverconfiguration/serverconfig";
import { REPORTS, SAVE } from "../../serverconfiguration/controllers";
import { Save } from "@mui/icons-material";


function GroupUi() {
  const [showTextField, setShowTextField] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [Names, setGroupNames] = useState([]);
  const location = useLocation();
  const navdata1 = location.state;

  const navigate = useNavigate();
  console.log(navdata1);

  const handleMoveEmployee = () => {
    navigate('/EmployeeShift')
  }
  const handleAddButtonClick = () => {
    setShowTextField(true);
  };

  const handleAddInfos = () => {
    navigate("addinfos", { state: navdata1 });
  };

  useEffect(() => {
    async function getData() {
      const Names = await postRequest(ServerConfig.url, REPORTS, {
        query: `select * from Group_details`,
      });
      return Names;
    }

    getData().then((e) => setGroupNames(e.data));
  }, []);

  const handleSaveButtonClick = () => {
    postRequest(ServerConfig.url, SAVE, {
      query: `INSERT INTO [dbo].[Group_details]([Group_name])VALUES('${groupName}')`,
    })
      .then((response) => {
        if (response.status === 200 || response.status === "success") {
          alert("Data saved successfully!");
          window.location.reload();
        } else {
          alert("Failed to save data.");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while saving data.");
        window.location.reload();
      });
  };

  return (
    <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }}
>
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        height: "200px",
        width: "800px",
        margin: "auto",
        position: "relative",
        backgroundColor:"#EFEDF4"
      }}>
      <Grid  >
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Create Group Name
      </Typography>
      </Grid>

      <Grid style={{marginTop: "40px"}}>

      <Button
        variant="outlined"
        onClick={handleAddButtonClick}
        style={{ marginBottom: "20px" }}>
        Add New Group
      </Button>
      <Button
        variant="outlined"
        onClick={handleAddInfos}
        style={{ marginBottom: "20px", marginLeft: "20px" }}>
        Add Infos
      </Button>
      <Button
        variant="outlined"
        onClick={handleMoveEmployee}
        style={{ marginBottom: "20px", marginLeft: "15px"  }}>
        Move Employee to group
      </Button>
      </Grid>
      {showTextField && (
        <>
          <TextField
            variant="outlined"
            placeholder="Enter Group Name"
            fullWidth
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <Button variant="contained" onClick={handleSaveButtonClick}>
            Save
          </Button>

          {Names.length > 0 ? (
            <ul>
              {Names.map((Names, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  style={{ marginRight: "480px", textAlign: "left" }}>
                  {index + 1}. {Names.Group_name}
                </Typography>
              ))}
            </ul>
          ) : (
            <Typography>No GroupName found.</Typography>
          )}
        </>
      )}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}></Box>
    </Box>
    </Box>
  )
}

export default GroupUi;
