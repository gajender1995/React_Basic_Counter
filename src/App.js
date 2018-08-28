import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Mbutton extends React.Component {
render(){
return (
<button onClick = { () =>  this.props.onClickArg(this.props.value)} >+{this.props.value}</button>
);
}
}

const Myresult = (props) => {
return (
<div>{props.value}</div> 
);
}

class AppMain extends React.Component {
state = { counter : 1};
handelEvent = (value) => {
this.setState((prevState) => ({
counter : this.state.counter +value 
}));
}
render(){
return (
<div> Counter Increment <br/>
<Mbutton value={1} onClickArg={this.handelEvent}/>
<Mbutton value={2} onClickArg={this.handelEvent}/>
<Mbutton value={5} onClickArg={this.handelEvent}/>
<Mbutton value={10} onClickArg={this.handelEvent}/>
<Myresult value={this.state.counter}/>
</div>
);
}
}



export default AppMain;
