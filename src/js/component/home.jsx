import Card from "./card.jsx";
import React from "react";
//create your first component
const Home = () => {
	return (
		<div className="card bg-dark text-light" style={{ width: "18rem" }}>
			<div className="card-body fa fa-clock text-light">
				<Card number={1000} />
				<Card number={100} />
				<Card number={10} />
				<Card number={1} />
			</div>
		</div>
	);
};

export default Home;
