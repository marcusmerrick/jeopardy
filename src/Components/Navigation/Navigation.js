import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className="Navigation">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='Clock'>Clock</Link></li>
                <li><Link to='Contact'>Contact</Link></li>
                <li><Link to='Jeopardy'>Jeopardy</Link></li>
            </ul>
        </div>
    )
};

export default Navigation;