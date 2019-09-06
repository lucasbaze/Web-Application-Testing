import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <button data-testid="ball-button" onClick={props.handleBallChange}>
                Ball
            </button>
            <button data-testid="foul-button" onClick={props.handleFoulChange}>
                Foul
            </button>
            <button
                data-testid="strike-button"
                onClick={props.handleStrikeChange}
            >
                Strike
            </button>
            <button data-testid="hit-button" onClick={props.handleHit}>
                Hit
            </button>
        </div>
    );
};

export default Dashboard;
