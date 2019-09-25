import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Weather } from './components/weather/Weather';
import { WeightAndBalance } from './components/WeightAndBalance';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <h1>Airplane Dispatch Form</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <Weather/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <WeightAndBalance/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
