import React from 'react';

class City extends React.Component {
    render(){
        const {LocationText, State, Lat, Long, EstimatedPopulation, TotalWages} = this.props.city;
        return (
        <div className="city">
            <div className="header">{LocationText}</div>
            <div className="content">
                <ul>
                    <li>State: {State}</li>
                    <li>Location: {`(${Lat}, ${Long})`}</li>
                    <li>Population(estimated): {EstimatedPopulation}</li>
                    <li>Total Wages: {TotalWages}</li>
                </ul>
            </div>
        </div>);
    }
}

export default City;