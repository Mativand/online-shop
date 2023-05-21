import './babel'
import './styles/style.css';
import './styles/style.less';
import './styles/style.scss';
import {render} from "react-dom";
import React from "react";

const App: React.FC = () => {
    return (
        <div>
            hello
        </div>
    );
};

render(<App/>, document.getElementById('root'));