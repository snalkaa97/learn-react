import React, { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
	state = {
		username: "snalkaa",
	};

	nameChangedHandler = (event) => {
		this.setState({
			username: event.target.value,
		});
	};

	render() {
		const style = {
			backgroundColor: "black",
			font: "inherit",
			border: "1px solid #ffff",
			color: "white",
		};

		return (
			<div className="App" style={style}>
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<UserInput
					changed={this.nameChangedHandler}
					currentName={this.state.username}
				/>
				<UserOutput username={this.state.username} />
				<UserOutput username={this.state.username} />
				<UserOutput username="alka123" />
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;
