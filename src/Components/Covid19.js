import React from "react";
import "./Covid19.css";
import Title from "./Title";

function Covid19() {
	return (
		<div className="covid19">
			<Title title="COVID-19 Policies" />

			<div className="covid19__block">
				<h3>COVID-19 Policies</h3>
				<h4>COVID-19 Policies at the Dance Centre</h4>
				<p>
					· Masks - Every person entering the building must wear a mask in all the common areas (ie everywhere except in
					the studios). If you do not have your own mask, disposable masks will be provided at the front desk at a cost
					of $2 incl GST.
				</p>
				<p>
					Physical Distancing – Decals are situated throughout the building to guide in the 2 metre physical distancing
					measures as directed by the Provincial Health Authority. Access to the building will not be permitted until
					there is sufficient space in the lobby.
				</p>
				<p>
					Shoe Bags – Please bring a pair of indoor shoes to use inside the studio. Please bring a bag to hold your
					outdoor shoes and place on the mat located at each studio entrance.
				</p>
				<p>No bare feet – in the studios or anywhere in the building </p>
				<p>
					Contact Tracing – We will ask everyone for a phone number as they sign in. Please bring your own pen to sign
					in.
				</p>
				<p>Elevator – maximum 2 people in the elevator; elevator will be up only, please use the stairs to descend.</p>
			</div>
			<div className="covid19__block">
				<h4>COVID-19 Policies during class</h4>
				<p>
					Masks are optional. I will be wearing a mask during the class, however, it is up to you whether you would like
					to wear one or not while dancing.
				</p>
				<p>
					Please social distance from other students. There will be no floor markings, but please pick a spot to dance
					at during the whole class.
				</p>
				<p>
					Please choose a spot to leave your belongings at the beginning of the class. Please make sure that it is
					distanced from another student’s belongings.
				</p>
				<p>When the class is finished, please exit the building as soon as possible. </p>
				<p className="covid19__italic">
					*** Please note that although we have the safety protocols in place, there may be an inherent risk for
					COVID-19 exposure. ***
				</p>
			</div>
		</div>
	);
}

export default Covid19;
