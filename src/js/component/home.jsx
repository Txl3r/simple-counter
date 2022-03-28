import React, { useState, useEffect } from "react";
import Card from "react";

//create your first component
const Home = () => {
	const [count2, setCount2] = useState(0);
	const [count, setCount] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setCount2((count2) => count2 + 1);
		}, 10000);
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, []);

	if (count === 10) {
		setCount(0);
	}
	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">
					{count}
					{count2}
				</h5>
			</div>
		</div>
	);
};

export default Home;
