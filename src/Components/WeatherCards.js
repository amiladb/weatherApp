import React from 'react'
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import moment from 'moment';

let coloursList = ["lightblue", "magenta", "lightgreen", "lightcoral", "red"]

function WeatherCards({ index, name, country, temp, tempMax, tempMin, pressure, humidity, visibility, speed, direction, sunrise, sunset, description, dateTime }) {
    return (
        <Card sx={{ maxWidth: 500 }} >
            <CardActionArea>
                <CardContent className='top-card' style={{ backgroundColor: coloursList[index] }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            {name}, {country}
                        </Grid>
                        <Grid item xs={6} md={6}>
                            {Math.floor(temp)}<sup>0</sup>C
                        </Grid>
                        <Grid item xs={6} md={6}>
                            {moment(dateTime).format('h:mm a, MMM D')}
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Temp Min: {Math.floor(tempMin)}<sup>0</sup>C</li>
                                <li>Temp Max: {Math.floor(tempMax)}<sup>0</sup>C</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            {description}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={4}>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Pressure: {pressure}hPa</li>
                                <li>Humidity: {humidity}%</li>
                                <li>Visibility: {(visibility / 1000).toFixed(1)}km</li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            {speed}ms<sup>-1</sup> {direction}degree
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Sunrise: {moment(sunrise).format('h:mm a')}</li>
                                <li>Sunset: {moment(sunset).format('h:mm a')}</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default WeatherCards