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

**Constructor definition**

```
constructor(props) {
  super(props);         // Must be set otherwise nothing can be set in constructor
                        // "Syntax error: 'this' is not allowed before super()"
  this.state = {
    value: null
  }
}
```