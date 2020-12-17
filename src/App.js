// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Person from "./Person/Person.js";
function App() {
	const state = {
		persons: [
			{ name: "Alka", age: 23 },
			{ name: "Taslim", age: 22 },
			{ name: "Wibi", age: 22 },
		],
	};
	return (
		// React.createElement(
		// 	"div",
		// 	{ className: "App" },
		// 	React.createElement("h1", null, "Hello world")
		<div>
			<div className="App">
				<h1>This is React</h1>
				<button>Switch Name</button>
				<Person name={state.persons[0].name} age={state.persons[0].age} />
				<Person name={state.persons[1].name} age={state.persons[1].age} />
				<Person name={state.persons[2].name} age={state.persons[2].age}>
					<h1>My hobby is racing</h1>
					<h1>hello</h1>
				</Person>
			</div>
		</div>
	);
}

export default App;
