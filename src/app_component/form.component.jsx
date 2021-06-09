import React from 'react';
import "./form.style.css";

const Form = prop => {
    return(

        <div className="container">
            <div>{prop.error ? error() : null}</div>
            <form onSubmit={prop.loadweather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input 
                    type="text"
                    className="form-control"
                    name="city"
                    autoComplete="off"
                    placeholder="City"/>
                </div>
                <div className="col-md-3">
                    <input
                    type="text"
                    className="form-control"
                    name="country"
                    autoComplete="off"
                    placeholder="Country"/>
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
                    <button className="btn btn-warning">Go</button>
                </div>
            </div>
            </form>
        </div>  
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Did not enter city + country
        </div>
    );
}

export default Form;