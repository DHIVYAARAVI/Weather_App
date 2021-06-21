import React from 'react'
import './displayWeather.css'
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'

export default function DisplayWeather(props) {
    const { data } = props
    console.log(data)
    let iconurl='';  
    let background = '';
    if(data.cod !== "404")
        iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` 
 

    const background_select = () =>{
        background = document.getElementById("main")
        if(data.weather[0].main === 'Clouds' || data.weather[0].main === 'Clear'){
            background.style.backgroundImage = `url(${img1})`;
        }
        else if(data.weather[0].main === 'Haze' || data.weather[0].main === 'Mist' || 
        data.weather[0].main === 'Rain' || data.weather[0].main === 'Thunderstorm'){
            background.style.backgroundImage  = `url(${img2})`
        }
        else if(data.weather[0].main === 'Snow'){
            background.style.backgroundImage  = `url(${img3})`;
        }
    }

    return(
        <div className="topic">
            {
                data.cod !== "404" ?
                <React.Fragment>
                    <div className="maincard" onLoad={background_select} id="main">
                        <div className="heading">
                            {data.name}, {data.sys.country} Weather
                        </div>
                        <div className="time">
                            As of {new Date().toLocaleTimeString()}
                        </div>
                        <h1 className="weather_celsius">
                            <div>{Math.floor(data.main.temp - 273.15)}</div>
                            <sup>o</sup>
                            <div className={"weather_icon"}>
                                <div>{data.weather[0].main}</div>
                                <img src={iconurl} alt=""/>
                            </div>
                        </h1>
                        <div className={"weather_description"}>{data.weather[0].description}</div>
                    </div><br></br>
                    <div className="weather_details">
                        <table className="section1">
                            <div className='border'>
                                <td>High/Low</td>
                                <td></td>
                                <td>
                                    {Math.floor(data.main.temp_max - 273.15)} / {" "}
                                    {Math.floor(data.main.temp_min - 273.15)}
                                </td>                                
                            </div><br></br>
                            <div className='border'>
                                <td>Humidity</td>
                                <td></td>
                                <td>
                                    {data.main.humidity} %
                                </td>
                            </div><br></br>
                            <div className='border'>
                                <td>Pressure</td>
                                <td></td>
                                <td>
                                    {data.main.pressure} hPa
                                </td>                                
                            </div><br></br>
                            <div className="last_border1">
                                <td>Visibility</td>
                                <td></td>
                                <td>
                                    {data.visibility / 1000} Km
                                </td>
                            </div><br></br>
                        </table>
                        <div></div>
                        <table className="section2">
                            <div className='border'>
                                <td>Wind</td>
                                <td></td>
                                <td>
                                    {( Math.floor(data.wind.speed * 18) / 5 )} km/hr
                                </td>
                            </div><br></br>
                            <div className='border'>
                                <td>Wind Direction</td>
                                <td></td>
                                <td>
                                    {data.wind.deg} <sup>o</sup> deg
                                </td>
                            </div><br></br>
                            <div className='border'>
                                <td>Sunrise</td>
                                <td></td>
                                <td>
                                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                </td>
                            </div><br></br>
                            <div className="last_border2">
                                <td>Sunset</td>
                                <td></td>
                                <td>
                                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                </td>
                            </div>
                        </table>
                    </div>
                </React.Fragment> 

                : <div className="maincard" style={{backgroundColor: "cyan"}}>
                    {data.message}
                </div>
            }
        </div>

    )

}
    

