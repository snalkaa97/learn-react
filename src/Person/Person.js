import React from "react";

const person = (obj) => {
	return (
		<div>
			<p onClick={obj.click}>
				I'm a {obj.name} and I'm {obj.age} years old
			</p>
			<div>{obj.children}</div>
			<input type="text" onChange={obj.changed} value={obj.name} />
		</div>
	);
};

export default person;
