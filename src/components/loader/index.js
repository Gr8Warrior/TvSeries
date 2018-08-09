import React from 'react';
import loaderSrc from  '../../assets/loading.gif'
import './index.css'
const Loader = props => (
    <div>
        <img className = "loader-icon-width" 
            alt="loading..." 
            src = {loaderSrc}
        />
        </div>
)

export default Loader;