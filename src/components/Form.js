import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStates,
} from "../redux/slice/statesApiSlice";

import {
  setFormValue,
  resetForm,
} from "../redux/slice/formSlice";
import { addContact } from "../redux/slice/tableSlice";
import {
  fetchTemperatureData,
  resetTemperature,
} from "../redux/slice/weatherApiSlice";
import { tokens } from "../theme"


function Form() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const statesData = useSelector((state) => state.statesApi.data);
  const statesLoading = useSelector((state) => state.statesApi.isLoading);
  const formData = useSelector((state) => state.form);
  const temp = useSelector(
    (state) => state.weatherApi.data && state.weatherApi.data.current_weather
  );

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  const handleAddFormChange = async (e) => {
    const { name, value } = e.target;
    dispatch(setFormValue({ field: name, value }));

    if (name === "state" && statesData) {
      const selectedState = statesData.find((state) => state.name === value);
      if (selectedState) {
        const { lat, lon } = selectedState;
        dispatch(fetchTemperatureData({ latitude: lat, longitude: lon }));
      }
    }
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      state: formData.state,
      temperature: temp?.temperature || "",
    };

    dispatch(addContact(newContact));
    dispatch(resetForm());
    dispatch(resetTemperature());
  };
  console.log("temp", temp?.temperature);

  if (statesLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box sx={{ backgroundColor: "colors.primary[500] !important", padding: "20px" }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <form className="form1" >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" component="label">
                Name
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                type="text"
                value={formData.name}
                name="name"
                onChange={handleAddFormChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="label">
                Age
              </Typography>
              <TextField
                label="Age"
                variant="outlined"
                size="small"
                type="number"
                value={formData.age}
                name="age"
                onChange={handleAddFormChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="label">
                Email
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                type="email"
                value={formData.email}
                name="email"
                onChange={handleAddFormChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="label">
                Phone Number
              </Typography>
              <TextField
                label="Phone Number"
                variant="outlined"
                size="small"
                type="tel"
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleAddFormChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="label">
                State
              </Typography>
              <Select
                label="State"
                value={formData.state}
                name="state"
                size="small"
                onChange={handleAddFormChange}
                fullWidth
              >
                {statesData &&
                  statesData.map((state) => (
                    <MenuItem key={state.id} value={state.name}>
                      {state.name}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="label">
                Temperature
              </Typography>
              <TextField
                label=""
                variant="outlined"
                size="small"
                type="number"
                value={temp?.temperature || ""}
                name="temperature"
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                onClick={handleAddFormSubmit}
                startIcon={<AddIcon />}
                sx={{ backgroundColor: colors.greenAccent[500] }}
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
   
     </Box>
  );
}

export default Form;
