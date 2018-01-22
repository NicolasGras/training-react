# training-react

https://reactjs.org/tutorial/tutorial.html

**React.Compoment**
```
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
```