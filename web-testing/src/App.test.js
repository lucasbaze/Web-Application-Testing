import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('should click up to 4 then reset to 0', () => {
    const { getByTestId } = rtl.render(<App />);
    rtl.fireEvent.click(getByTestId('ball-button'));
    rtl.fireEvent.click(getByTestId('ball-button'));
    rtl.fireEvent.click(getByTestId('ball-button'));
    rtl.fireEvent.click(getByTestId('ball-button'));

    expect(getByTestId('display-balls')).toHaveTextContent('Balls: 0');
});

test('2 strikes, 3 fouls, 3 balls', () => {
    const { getByTestId } = rtl.render(<App />);

    //Balls
    rtl.fireEvent.click(getByTestId('ball-button'));
    rtl.fireEvent.click(getByTestId('ball-button'));
    rtl.fireEvent.click(getByTestId('ball-button'));

    //Strikes
    rtl.fireEvent.click(getByTestId('strike-button'));
    rtl.fireEvent.click(getByTestId('strike-button'));

    //Foul
    rtl.fireEvent.click(getByTestId('foul-button'));
    rtl.fireEvent.click(getByTestId('foul-button'));
    rtl.fireEvent.click(getByTestId('foul-button'));

    expect(getByTestId('display-balls')).toHaveTextContent('Balls: 3');
    expect(getByTestId('display-fouls')).toHaveTextContent('Fouls: 3');
    expect(getByTestId('display-strikes')).toHaveTextContent('Strikes: 2');
});
