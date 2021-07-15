import React, { Component } from 'react';
import HeaderOption from '../HeaderOption';
import headerOptions from './headerOptions.json';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: 'home'
        }
    }

    onClick = (activeOption) => {
        this.setState({ activeOption: activeOption });
    }

    render() {
        return (
            <header className="header">
                <nav className="header__nav nav">
                    <ul className="nav__list list">
                        {
                            headerOptions.map((hopt, index) => {
                                return (
                                    <HeaderOption activeOption={this.state.activeOption}
                                        onClick={this.onClick}
                                        optionText={hopt.optionText}
                                        option={hopt.option}
                                        key={index} />
                                );
                            })
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;