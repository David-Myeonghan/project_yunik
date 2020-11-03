import React from "react";
import "./Lessons.css";
import Button from "@material-ui/core/Button";
import Title from "./Title";

function Lessons() {
	return (
		<div className="lessons">
			<Title title="Private Lessons" />

			<div className="lessons__text">
				<div className="lessons__block">
					<h2>How to sign up for class</h2>
					<h3>1. Click "Sign Up Form" below to register.</h3>
					<h3>2. Send e-transfer to yunik.dance@gmail.com</h3>
					<h3>3. You will reeive a confirmation email after payment is received.</h3>
					<Button variant="outlined">Sign Up Form</Button>
				</div>
			</div>
		</div>
	);
}

export default Lessons;
