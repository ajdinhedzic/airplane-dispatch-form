import React from 'react';
import { ResultRow } from './ResultRow';

export const MetarResult = ({metar}) => (
    <table>
        <tbody>
        <ResultRow title={'Station'} data={metar.station}/>
        <ResultRow title={'Time'} data={metar.time}/>
        <ResultRow title={'Flight Category'} data={metar.flightCategory}/>
        <ResultRow title={'Wind'} data={metar.wind}/>
        <ResultRow title={'Sky Condition'} data={metar.skyCondition}/>
        <ResultRow title={'Visibility'} data={metar.visibility}/>
        <ResultRow title={'Temperature (C)'} data={metar.temperature}/>
        <ResultRow title={'Dew Point (C)'} data={metar.dewPoint}/>
        <ResultRow title={'Altimeter'} data={metar.altimeter}/>
        </tbody>
    </table>
);