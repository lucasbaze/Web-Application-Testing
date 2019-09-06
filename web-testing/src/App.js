import React, { useState, useEffect } from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

const App = () => {
    let [balls, setBalls] = useState(0);
    let [fouls, setFouls] = useState(0);
    let [strikes, setStrikes] = useState(0);

    const handleHit = e => {
        setBalls(0);
        setFouls(0);
        setStrikes(0);
    };

    const handleBallChange = e => {
        if (balls++ < 3) {
            setBalls(balls++);
        } else {
            handleHit();
        }
    };

    const handleFoulChange = e => {
        if (fouls++ < 2 && strikes++ < 2) {
            setFouls(fouls++);
            setStrikes(strikes++);
        } else {
            setFouls(fouls++);
        }
        return;
    };

    const handleStrikeChange = e => {
        if (strikes++ < 2) {
            setStrikes(strikes++);
        } else {
            handleHit();
        }
    };

    return (
        <div className="App">
            <Display balls={balls} fouls={fouls} strikes={strikes} />
            <Dashboard
                handleBallChange={handleBallChange}
                handleFoulChange={handleFoulChange}
                handleStrikeChange={handleStrikeChange}
                handleHit={handleHit}
            />
        </div>
    );
};

export default App;
