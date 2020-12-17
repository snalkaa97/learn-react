// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Person from "./Person/Person.js";
function App() {
	return (
		// React.createElement(
		// 	"div",
		// 	{ className: "App" },
		// 	React.createElement("h1", null, "Hello world")
		<div>
			<div className="App">
				<h1>This is React</h1>
				<Person name="Alka" age="23" />
				<Person name="Taslim" age="22" />
				<Person name="Wibi" age="22">
					<h1>My hobby is racing</h1>
					<h1>hello</h1>
				</Person>
			</div>
		</div>
	);
}

export default App;
