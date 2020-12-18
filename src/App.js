// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person.js";
const App = (props) => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: "Alka", age: 23 },
			{ name: "Taslim", age: 22 },
			{ name: "Wibi", age: 22 },
		],
	});

	const [otherState, setOtherState] = useState("some other value");

	console.log(personsState, otherState);

	const SwitchNameHandler = () => {
		console.log("clicked");
		// console.log((state.persons[0].name = "Alkatiri"));
		setPersonsState({
			persons: [
				{ name: "Alkatiri", age: 23 },
				{ name: "Taslim", age: 22 },
				{ name: "Wibi", age: 21 },
			],
		});
	};

	return (
		// React.createElement(
		// 	"div",
		// 	{ className: "App" },
		// 	React.createElement("h1", null, "Hello world")
		<div>
			<div className="App">
				<h1>This is React</h1>
				<button onClick={SwitchNameHandler}>Switch Name</button>
				<Person
					name={personsState.persons[0].name}
					age={personsState.persons[0].age}
				/>
				<Person
					name={personsState.persons[1].name}
					age={personsState.persons[1].age}
				/>
				<Person
					name={personsState.persons[2].name}
					age={personsState.persons[2].age}
				>
					<h1>My hobby is racing</h1>
					<h1>hello</h1>
				</Person>
			</div>
		</div>
	);
};

export default App;
