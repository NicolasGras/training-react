import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyClass extends React.Component {
    render() {
        return (
            
            <div>
                <p>By default, this.props object is empty</p>
                <p>props name: {this.props.name}</p>
            </div>
            
        );
    }
}

ReactDOM.render(
    <MyClass />,
    document.getElementById('root')
);
