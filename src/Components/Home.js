import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Title from "./Title";

function Home() {
	return (
		<div className="home">
			{/* <div className="home__cover">
				<img
					className="home__image"
					src="https://static.wixstatic.com/media/73bef0_ee6f181bf44c4eac95902bcdd3be48e4~mv2.jpg/v1/fill/w_212,h_210,al_c,q_80,usm_0.66_1.00_0.01/Transparent%20white.webp"
					alt="Not found"
				/>
			</div> */}
			<Title />

			<Button variant="outlined">Click here to sign up for a class</Button>

			<div className="home__text">
				<p>1. Click above button register. Class registration will begin 72 hours before each class.</p>
				<p>2. Send $18 payment via e-transfer to yunik.dance@gmail.com</p>
				<p>
					<bold>·</bold> You will receive a confirmation email after payment is received.
				</p>
				<p className="home__textCenter">If the class is full, you will be directed to a saitlist form to fill out.</p>
			</div>

			<div className="home__upcoming">upcoming classes</div>
			{/* Align list items */}
		</div>
	);
}

export default Home;
