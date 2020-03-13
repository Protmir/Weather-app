import React from 'react';
import './Info.css';

class Info extends React.Component {

    render() {
        const ms = this.props.day.dt * 1000;
        const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

        return (
            <div className = "infoAboutWeather">
                <div>
                    <h3>{weekdayName}</h3>
                    <h2>{Math.round(this.props.day.main.temp)} °C</h2>
                    <div>
                        <button>{this.props.day.weather[0].description}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;