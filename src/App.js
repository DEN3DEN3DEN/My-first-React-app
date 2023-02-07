import { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Container from './components/Container';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header className="Header" />
                <Nav className="Nav" />
                <Container className="Main" />
            </div>
        );
    }
}
