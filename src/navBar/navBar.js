import React from 'react';
import './navBar.css';

class NavBar extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <a href='' className='navBarItem'>Home</a>
                    <a href='' className='navBarItem'>Mission</a>
                    <a href='' className='navBarItem'>Pending Additions</a>
                    <a href='' className='navBarItem'>Historical Timelines</a>
                    <a href='' className='navBarItem'>Fantasy Timelines</a>
                </ul>
            </div>
        );
    }
};

export default NavBar;


 