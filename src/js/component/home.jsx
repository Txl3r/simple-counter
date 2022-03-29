import React, { useState, useEffect } from "react";
import Card from "react";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);

	let one = Math.floor(count / 1000);
	let two = Math.floor(count / 100);
	let three = Math.floor(count / 10);
	let four = Math.floor(count / 1);
	return (
		<div className="card bg-dark text-light" style={{ width: "18rem" }}>
			<div className="card-body">
				<h1 className="fa fa-clock text-light">
					{one % 10}
					{two % 10}
					{three % 10}
					{four % 10}
				</h1>
			</div>
		</div>
	);
};

export default Home;
