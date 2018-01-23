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

**Communication between components**

When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent 

*Define onClick function in Parent component and plug it in Children*
```
class Square extends React.Component {
    ...
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.state.value}
        </button>
      );
    } 
}

class Board extends React.Component {
    ...    
    
    renderSquare(i) {
      return (
        <Square 
          value = {this.state.squares[i]} 
          onClick = {() => ...} />
      );
    }
}

```


