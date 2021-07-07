import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { data } from './fakeDB/data.js';

const App = () => {
    const [ value, setValue ] = useState(0);

    return(
        <div className= "container">
            <img src = { data[value].image } alt={ data[value].id } />
            <h2>{ data[value].name}</h2>
            <div className= "slider-actions">
                <button type="button" onClick={() => value === 0 ? setValue(data.length - 1) : setValue(value - 1)}>
                    <img src="./assets/images/left-arrow.png" alt="left-arrow" />
                </button>
                <button className="btn-right" type="button" onClick={() => value === (data.length - 1) ? setValue(0) : setValue(value + 1)}>
                    <img src="./assets/images/right-arrow.png" alt="right-arrow" />
                </button>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));