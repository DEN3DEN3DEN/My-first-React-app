import React, { Component } from 'react'
import '../components/Nav.css';

export default class Nav extends Component {
  render() {
    return (
        <nav className='Nav'>
            <ul>
                <li>Contacts</li>
                <li>About US</li>
                <li>Catalog</li>
            </ul>
      </nav>
    )
  }
}