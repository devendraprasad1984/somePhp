import React from 'react';

export const DisplayHistory = (props) => (
    <div className="history">
        {
            props.history.map((exp, i) => {
                return (
                    <div className="history-item" key={i}>
                        <button className="btn btn-block btn-light">
                            <div className="p-2 text-right">
                                <div className="font-weight-bold">{exp.expression}&nbsp;= {exp.result}</div>
                            </div>
                        </button>
                        <div className="history-trash" >
                            <div className="text-center text-danger">
                                <i className="fa fa-trash-o fa-2x my-2"></i>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>
);