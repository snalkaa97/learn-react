import React from "react";
import "./person.css";
const person = (obj) => {
	return (
		<div className="Person">
			<p onClick={obj.click}>
				I'm a {obj.name} and I'm {obj.age} years old
			</p>
			<div>{obj.children}</div>
			<input type="text" onChange={obj.changed} value={obj.name} />
		</div>
	);
};

export default person;
