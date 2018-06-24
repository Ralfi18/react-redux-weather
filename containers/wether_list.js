import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WetherList extends Component {

    renderWather(cityData) {
        // console.log(cityData.list);
        const id = cityData.city.id;
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        // console.log(w);
        return(
            <tr key={id}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange"/>
                </td>
                <td>
                    <Chart data={humidity} color="green"/>
                </td>
                <td>
                    <Chart data={pressure} color="blue"/>
                </td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temerature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>    
                <tbody>
                    {this.props.weather.map(this.renderWather)}
                </tbody>
            </table> 
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WetherList);