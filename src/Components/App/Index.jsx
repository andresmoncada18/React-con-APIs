import React, { Component } from 'react';
import Header from '../Header';
import Swapi from '../Swapi';
import './App.css';
const SWAPI_URL = 'https://swapi.dev/api/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        const endpoint = SWAPI_URL + 'people/';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                this.setState({ people: results });
            });
    }

    render() {
        return (
            <div className="app">
                <Header />
                <section className="app__people">
                    {
                        this.state.people.map((p, index) => {
                            return (
                                <Swapi name={p.name}
                                    birth_year={p.birth_year}
                                    gender={p.gender}
                                    key={index} />
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

export default App;