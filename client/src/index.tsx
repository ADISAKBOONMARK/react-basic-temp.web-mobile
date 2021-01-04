import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './App';

const Main = () => (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));
