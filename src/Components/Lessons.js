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
					<h3>Private Lessons</h3>
					<h4>Private Lesson Booking:</h4>
					<p>To book a Private Class, please press the button below!</p>
					<Button variant="outlined">Private Lesson Booking</Button>
				</div>
				<div className="lessons__block">
					<h4>Private Lesson Prices:</h4>
					<p>
						<b>Intro class:</b> This class is suitable for beginners who would like to learn basic moves and work on
						different grooves/footsteps. First 30 minutes, we will focus on warm up and basic moves, and then we will
						work on a 30 min routine. We will not be learning a K-Pop choreography. Longer classes will be available
						upon request.
					</p>

					<p>
						<b>Private Choreography:</b> In this class, I will be teaching you a K-Pop choreography or any other dance
						choreography video of your choice.
					</p>
					<p>﹒ If your group would like to learn different parts or formation work, it will be extra $10/person.</p>
					<p>
						<b>Location:</b> All classes will take place at The Dance Centre located in downtown.
					</p>
					<p className="lessons__italic">***Prices include studio rental costs, insurance, and tax***</p>
					<p>Cancellation Policy:</p>
					<p>
						Full payment will be due at the time of booking for Private Lessons. Due to a no-refund policy at The Dance
						Centre, you will be refunded 60% of your payment if you cancel at anytime.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Lessons;
