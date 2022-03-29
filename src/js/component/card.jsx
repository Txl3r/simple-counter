import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

const Cards = (props) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);
	let one = Math.floor(count / props.number);

	return <span>{one % 10}</span>;
};
Cards.propTypes = {
	number: propTypes.number,
};

export default Cards;
