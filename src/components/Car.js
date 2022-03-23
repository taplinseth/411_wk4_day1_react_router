import React from 'react';
import cars from '../cars.json';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const Car = (props) => {
    const id = parseInt(props.match.params.id);
    const car = cars.find(data => data.id === id);
    console.log(cars);
    return (
        <Container className="vehicle-card" maxWidth="sm">
            <Paper id="car-paper" elevation={3} sx={{height: '30vh' }}>
                <h1 id="car-info">{`${car.Name}`}</h1>
                <Chip id="car-info"  label={`ID: ${car.id}`} />
                <Chip id="car-info" label={`Name: ${car.Name}`} />
                <Chip id="car-info" label={`Miles_per_Gallon: ${car.Miles_per_Gallon}`} />
                <br />
                <Chip id="car-info" label={`Cylinders: ${car.Cylinders}`} />
                <Chip id="car-info" label={`Displacement: ${car.Displacement}`} />
                <Chip id="car-info" label={`Horsepower: ${car.Horsepower}`} />
                <br />
                <Chip id="car-info" label={`Weight_in_lbs: ${car.Weight_in_lbs}`} />
                <Chip id="car-info" label={`Acceleration: ${car.Acceleration}`} />
                <Chip id="car-info" label={`Year: ${car.Year}`} />
                <br />
                <Chip id="car-info" label={`Origin: ${car.Origin}`} />
            </Paper>
        </Container>
        
    )
}

export default Car;