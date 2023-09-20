import React from 'react'
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import moment from 'moment';

let coloursList = ["lightblue", "magenta", "lightgreen", "lightcoral", "aquamarine", "cyan", "greenyellow", "burlywood"]

function WeatherCards({ index, name, country, temp, tempMax, tempMin, pressure, humidity, visibility, speed, direction, sunrise, sunset, description, dateTime }) {
    return (
        <Card sx={{ maxWidth: 550 }} className='full-card' >
            <CardActionArea>
                <CardContent className='top-card' style={{ backgroundColor: coloursList[index] }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6} style={{ fontSize: 25 }}>
                            {name}, {country}
                        </Grid>
                        <Grid item xs={6} md={6} style={{ fontSize: 35 }}>
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
                <CardContent className='bottom-card'>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={4}>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>Pressure: {pressure}hPa</li>
                                <li>Humidity: {humidity}%</li>
                                <li>Visibility: {(visibility / 1000).toFixed(1)}km</li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <ul style={{ listStyleType: 'none' }}>
                                <li><i class="gg-arrow-top-right"></i></li>
                                <li>{speed}m/s   {direction}degree</li>
                            </ul>

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