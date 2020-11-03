import React from "react";
import "./Classinfo.css";
import Button from "@material-ui/core/Button";
import Title from "./Title";

function Classinfo() {
	return (
		<div className="classinfo">
			<Title title="Class Information" />

			<div className="classinfo__text">
				<div className="classinfo__block">
					<h2>How to sign up for class</h2>
					<h3>1. Click "Sign Up Form" below to register.</h3>
					<h3>2. Send e-transfer to yunik.dance@gmail.com</h3>
					<h3>3. You will reeive a confirmation email after payment is received.</h3>
					<Button variant="outlined">Sign Up Form</Button>
				</div>

				<div className="classinfo__block">
					<h2>Cancelling a class</h2>
					<h3>1. If you need to cancel your class, please fill out the "Cancellation Form".</h3>
					<h3>2. All refunds will be sent through e-transfer. The password will be yunik2020</h3>
					<Button variant="outlined">Cancellation Form</Button>
				</div>

				<div className="classinfo__block">
					<h2>Song Suggestions</h2>
					<h3>1. If you have a song you would like to suggest, please fill out the "Song Suggestions" Form.</h3>
					<h3>
						2. Every week, the top two songs from the Song Suggestions sheet will be posted on Instagram for public
						vote.
					</h3>
					<h3>3. The song with more votes will be chosen as the song for the following week's class.</h3>
					<Button variant="outlined">Song Suggestions</Button>
				</div>
			</div>
		</div>
	);
}

export default Classinfo;
