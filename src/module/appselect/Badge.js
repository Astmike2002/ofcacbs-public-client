// src/Badge.js

import React from 'react';
import './style.module.css'; // Import the CSS for styling

const Badge = ({ count, color, children }) => {
    return (
        <span className="badge" style={{ backgroundColor: color, width: 160, margin: 5}}>
            {children}
            {count > 0 && <span className="badge-count">{count}</span>}
        </span>
    );
};

export default Badge;