import React from 'react';
import './index.css';

const ToDoTitle = ({ title }) => ( // title由父组件传入
    <header className="ToDoTitle">
        <h1>{title}</h1>
    </header>
);

export default ToDoTitle;
