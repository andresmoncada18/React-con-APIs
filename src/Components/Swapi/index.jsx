import React, { Component } from 'react';
import './Swapi.css';

class Swapi extends Component {
    render() {
        const { name, birth_year, gender } = this.props;
        
        return (
            <div className="Swapi">
                <span>Name: {name}</span>
                <span>Birth Year: {birth_year}</span>
                <span>Gender: {gender}</span>
                <span>Hello Julio</span>
            </div>
        );
    }
}

export default Swapi;