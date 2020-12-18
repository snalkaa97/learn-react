// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person.js";
// import { Component } from ""
class App extends Component {
	state = {
		persons: [
			{ name: "Alka", age: 23 },
			{ name: "Taslim", age: 22 },
			{ name: "Wibi", age: 22 },
		],
		orherState: "some other value",
	};

	SwitchNameHandler = () => {
		console.log("clicked");
		// console.log((state.persons[0].name = "Alkatiri"));
		this.setState({
			persons: [
				{ name: "Alkatiri", age: 23 },
				{ name: "Taslim", age: 22 },
				{ name: "Wibi", age: 21 },
			],
		});
	};
	render() {
		return (
			// React.createElement(
			<div>
				<div className="App">
					<h1>This is React</h1>
					<button onClick={this.SwitchNameHandler}>Switch Name</button>
					<Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
					/>
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
					/>
					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}
					>
						<h1>My hobby is racing</h1>
						<h1>hello</h1>
					</Person>
				</div>
			</div>
		);
	}
	// 	"div",
	// 	{ className: "App" },
	// 	React.createElement("h1", null, "Hello world")
}

export default App;
