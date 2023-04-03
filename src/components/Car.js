import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";

// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const id = useParams().id;
  const car = cars.find((car) => car.id === Number(id));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h1>{car.Name}</h1>
        {Object.keys(car).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${car[key]}`} />;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
