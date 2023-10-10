import React, { useState, useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tyreWidth: "",
    acceptRatio: "",
    rim: "",
  });
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [checkData, setCheckData] = useState({ packages: true });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCheckbox = (event) => {
    setCheckData({ ...checkData, [event.target.name]: event.target.checked });
  };
  const handleSubmit = (event) => {
    console.log(formData, "formData");
    event.preventDefault();
    if (validateForm()) {
      // Submit form or perform other actions
      emailjs
        .send(
          "service_nqf40pw",
          "template_xtkeqzs",
          formData,
          "Ki-BNbhmC262gInc_"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // Reset form data

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        package: "",
        tyreWidth: "",
        acceptRatio: "",
        rim: "",
        battery: "",
      });
      setFormErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="f_sec_1">
        <TextField
          variant="filled"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          error={!!formErrors.firstName}
          helperText={formErrors.firstName}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          variant="filled"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          error={!!formErrors.lastName}
          helperText={formErrors.lastName}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          variant="filled"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          variant="filled"
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!formErrors.phone}
          helperText={formErrors.phone}
          required
          fullWidth
          margin="normal"
        />
        <FormLabel component="legend">Type of Services * </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              name="packages"
              defaultChecked
              onChange={handleCheckbox}
            />
          }
          label="SERVICE PACKAGES"
        />
        <FormControlLabel
          control={<Checkbox name="tyres" onChange={handleCheckbox} />}
          label="Tyres"
        />
        <FormControlLabel
          control={<Checkbox name="battery" onChange={handleCheckbox} />}
          label="Battery"
        />
      </div>
      <div className="f_sec_2">
        {checkData.packages && (
          <>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Select Package</InputLabel>
              <Select
                variant="filled"
                name="package"
                value={formData.package}
                onChange={handleChange}
                error={!!formErrors.package}
              >
                <MenuItem value="STANDARD">STANDARD SERVICE</MenuItem>
                <MenuItem value="PREMIUM">PREMIUM SERVICE</MenuItem>
                <MenuItem value="SUPERB">SUPERB SERVICE</MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        {checkData.tyres && (
          <>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Tyre Width</InputLabel>
              <Select
                variant="filled"
                name="tyreWidth"
                value={formData.tyreWidth}
                onChange={handleChange}
                error={!!formErrors.tyreWidth}
              >
                <MenuItem value="175">175</MenuItem>
                <MenuItem value="185">185</MenuItem>
                <MenuItem value="195">195</MenuItem>
                <MenuItem value="205">205</MenuItem>
                <MenuItem value="215">215</MenuItem>
                <MenuItem value="225">225</MenuItem>
                <MenuItem value="235">235</MenuItem>
                <MenuItem value="245">245</MenuItem>
                <MenuItem value="255">255</MenuItem>
                <MenuItem value="265">265</MenuItem>
                <MenuItem value="275">275</MenuItem>
                <MenuItem value="285">285</MenuItem>
                <MenuItem value="295">295</MenuItem>
                <MenuItem value="305">305</MenuItem>
                <MenuItem value="315">315</MenuItem>
                <MenuItem value="325">325</MenuItem>
                <MenuItem value="335">335</MenuItem>
                <MenuItem value="345">345</MenuItem>
                <MenuItem value="355">355</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Accept Ratio</InputLabel>
              <Select
                variant="filled"
                name="acceptRatio"
                value={formData.acceptRatio}
                onChange={handleChange}
                error={!!formErrors.acceptRatio}
              >
                <MenuItem value="25Z">25Z</MenuItem>
                <MenuItem value="30">30</MenuItem>
                <MenuItem value="30Z">30Z</MenuItem>
                <MenuItem value="35">35</MenuItem>
                <MenuItem value="40">40</MenuItem>
                <MenuItem value="40Z">40Z</MenuItem>
                <MenuItem value="45">45</MenuItem>
                <MenuItem value="45Z">45Z</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="50Z">50Z</MenuItem>
                <MenuItem value="55">55</MenuItem>
                <MenuItem value="60">60</MenuItem>
                <MenuItem value="65">65</MenuItem>
                <MenuItem value="70">70</MenuItem>
                <MenuItem value="75">75</MenuItem>
                <MenuItem value="80">80</MenuItem>
                <MenuItem value="85">85</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Rim</InputLabel>
              <Select
                variant="filled"
                name="rim"
                value={formData.rim}
                onChange={handleChange}
                error={!!formErrors.rim}
              >
                <MenuItem value="14">14</MenuItem>
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="16">16</MenuItem>
                <MenuItem value="17">17</MenuItem>
                <MenuItem value="18">18</MenuItem>
                <MenuItem value="19">19</MenuItem>
                <MenuItem value="20">20</MenuItem>
                <MenuItem value="21">21</MenuItem>
                <MenuItem value="22">22</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
        {checkData.battery && (
          <>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Battery Brand</InputLabel>
              <Select
                variant="filled"
                name="battery"
                value={formData.battery}
                onChange={handleChange}
                error={!!formErrors.battery}
              >
                <MenuItem value="Any">Any</MenuItem>
                <MenuItem value="ACDelco">ACDelco </MenuItem>
                <MenuItem value="Amaron">Amaron </MenuItem>
                <MenuItem value="BOSCH">BOSCH </MenuItem>
                <MenuItem value="Deta">Deta </MenuItem>
              </Select>
            </FormControl>
          </>
        )}
        <Button
          sx={{
            marginTop: "1rem",
            bgcolor: "black",
            "&:hover": {
              backgroundColor: "#d3c300",
              outline: "1px solid black",
              color: "black",
            },
          }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default MyFormComponent;
