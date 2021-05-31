import React, { Component } from 'react'
export default class Button extends Component {
  render(){
    let { title, task } = this.props
    return(
      <button onClick = { task }>{ title }</button>
    )}
}

export default class App extends Component {
	constructor(){
	  super();
	  this.state= {
	    count:0
	  }
	}

	incrementCount= () => {
	  this.setState({
	    count:this.state.count+1
	  })
	}

	decrementCount= () => {
	  this.setState({
	    count:this.state.count-1
	  })
	}

	render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  }
}

