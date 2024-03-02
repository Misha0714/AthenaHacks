import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function ResourceForm() {
  const classes = useStyles();
  const [resource, setResource] = useState({
    type: "",
    quantity: "",
    location: "",
  });

  const handleChange = (e) => {
    setResource({ ...resource, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API request to your server with the resource data
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        name="type"
        label="Type"
        value={resource.type}
        onChange={handleChange}
      />
      <TextField
        name="quantity"
        label="Quantity"
        value={resource.quantity}
        onChange={handleChange}
      />
      <TextField
        name="location"
        label="Location"
        value={resource.location}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default ResourceForm;
