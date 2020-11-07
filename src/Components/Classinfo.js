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
					<h3>How to sign up for class</h3>
					<h4>1. Click "Sign Up Form" below to register.</h4>
					<p>· Class registration will begin 72 hours before each class and closes 6 hours before class start time</p>
					<h4>2. Send e-transfer to yunik.dance@gmail.com</h4>
					<h4>3. You will reeive a confirmation email after payment is received.</h4>
					<h4 className="classinfo__italic">
						If the class is full, you will be directed to a waitlist form to fill out. You will be notified by email
						when spot becomes available.
					</h4>
					<Button variant="outlined">Sign Up Form</Button>
				</div>

				<div className="classinfo__block">
					<h3>Cancelling a class</h3>
					<h4>1. If you need to cancel your class, please fill out the "Cancellation Form".</h4>
					<h4>2. All refunds will be sent through e-transfer. The password will be yunik2020</h4>
					<p>· 24 hours before class: Full Refund</p>
					<p>· Less than 24 hours ~ class start tiem = $5 Cancellation Fee</p>
					<p>· No show: No refund</p>

					<Button variant="outlined">Cancellation Form</Button>
				</div>

				<div className="classinfo__block">
					<h3>Song Suggestions</h3>
					<h4>1. If you have a song you would like to suggest, please fill out the "Song Suggestions" Form.</h4>
					<p>· You can suggest max 3 songs / month.</p>
					<h4>
						2. Every week, the top two songs from the Song Suggestions sheet will be posted on Instagram for public
						vote.
					</h4>
					<h4>3. The song with more votes will be chosen as the song for the following week's class.</h4>
					<Button variant="outlined">Song Suggestions</Button>
				</div>
			</div>
		</div>
	);
}

export default Classinfo;
