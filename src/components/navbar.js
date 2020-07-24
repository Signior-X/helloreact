import React from 'react';

import {Link} from 'react-router-dom';

function Navbar(
    {
        pages,
    }
) {
    return(
        <nav className="nav">
            <div className="nav-container">
                {/* For the Logo */}
                <div className="brand">
                    <Link to="/">
                        Hello React
                    </Link>
                </div>

                {/* For the Navigation */}
                <div className="links">
                    <Link to="/about">
                        About
                    </Link>

                </div>

                {/* For the Dark Mode */}
                <div className="cta">
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
