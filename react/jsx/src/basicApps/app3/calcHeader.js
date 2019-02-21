import React from 'react';

export const CalcHeader = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row mx-auto">
                <h1><i className="icon calculator text-light"></i></h1>
                <div className="h3 ml-3 my-auto text-light">{props.title}</div>
            </div>
        </div>
    </nav>
);