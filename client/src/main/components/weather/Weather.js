import React from 'react';
import Metar from './Metar';

export const Weather = () => (
    <div className="card w-100">
        <div className="card-header">
            <div className="row">
                Weather
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <Metar title="Departure"/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <Metar title="Destination"/>
                </div>
            </div>
        </div>
    </div>
);