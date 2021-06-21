import React, {useState} from 'react'
import './Weather.css'
import DisplayWeather from './DisplayWeather'

export default function Weather() {

    const APIKEY = "45a5ed1163f013136fc444265d6d0e22"

    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    const [weather, setWeather] = useState([])

    function weatherget(e){
        e.preventDefault();
        if(form.city === ''){
            alert("Add Values in City")
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            .then(res =>{
                res.json().then((response)=>{
                    setWeather({
                        data: response
                    })
                })
            });
        }
    }

    const handleClick = (e) =>{
        let name = e.target.name
        let value = e.target.value
        if(name === 'city'){
            setForm({...form, city: value})
        }
        if(name === 'country'){
            setForm({...form, country: value})
        }
    }

    return (
        <div className="body"> 
            <div className="title">Weather App</div><br></br><br></br>
            <form>
                <input type="text" name="city" placeholder="city" onChange={ e => handleClick(e)} />&emsp;&emsp;
                <input type="text" name="country" placeholder="country" onChange={ e => handleClick(e)} />&emsp;&emsp;
                <button className="getweather" onClick={e => weatherget(e)}>Weather</button>
            </form> <br></br><br></br>
            {
                weather.data !== undefined ? 
                <div> <DisplayWeather data={weather.data} /> </div> :
                null
            }
        </div>
    )
}
