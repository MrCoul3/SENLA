import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import Apps from "./App";
import ReduxToDo from "./ReduxApps/ToDoApp/ToDoApp";

ReactDOM.render(
    <React.StrictMode>
        {/*<Apps />*/}
        <ReduxToDo />
    </React.StrictMode>,
    document.getElementById('root')
);
