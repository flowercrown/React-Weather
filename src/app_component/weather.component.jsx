import React from 'react';

const Weather = (prop) => {
    return (
        <div className = "container">
            <div className="cards pt-4">
                <h1> {prop.city}, {prop.country} </h1> 
                <h5 className="py-4">
                    <i className={`wi ${prop.weatherIcon} display-1`}></i>
                 </h5>
                 <h1 className="py-2">{prop.celsius}&deg;</h1>
                {/**show max and min temps */}
                {minmaxTemp(prop.temp_min,prop.temp_max)}

                <h4 className="py-3">{prop.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;