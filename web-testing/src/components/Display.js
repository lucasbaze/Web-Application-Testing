import React from 'react';

const Display = ({ balls, fouls, strikes }) => {
    return (
        <div style={{ display: 'flex' }}>
            <h3 data-testid="display-balls" style={{ marginRight: 10 }}>
                Balls: {balls}
            </h3>
            <h3 data-testid="display-fouls" style={{ marginRight: 10 }}>
                Fouls: {fouls}
            </h3>
            <h3 data-testid="display-strikes">Strikes: {strikes}</h3>
        </div>
    );
};

export default Display;
