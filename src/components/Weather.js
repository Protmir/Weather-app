import React from 'react';
import Info from './Info';

const URL_Key = "a9a3a62789de80865407c0452e9d1c27";
const city = "Grodno";

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=${URL_Key}`;

class Weather extends React.Component {
    state = {
      days: []
    }
  
    componentDidMount = () => {
      fetch(URL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
        this.setState({days: dailyData})
      })
    }
  
    formatCards = () => {
      return this.state.days.map((day, index) => <Info day={day} key={index}/>)
    }
  
    render() {
      return (
        <div className>
        <h1 className>Прогноз погоды на 5 дней</h1>
        <h5 className>{city}</h5>
          <div className>
  
            {this.formatCards()}
  
          </div>
        </div>
      )
    }
  }

export default Weather;