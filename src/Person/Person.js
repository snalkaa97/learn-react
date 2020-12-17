import React from "react";

const person = (obj) => {
	return (
		<div>
			<p>
				I'm a {obj.name} and I'm {obj.age} years old
			</p>
			<div>{obj.children}</div>
		</div>
	);
};

export default person;
