import React from "react";
import "./Title.css";

function Title({ title }) {
	return (
		<div className="title__cover">
			<img
				className="title__image"
				src="https://static.wixstatic.com/media/73bef0_ee6f181bf44c4eac95902bcdd3be48e4~mv2.jpg/v1/fill/w_212,h_210,al_c,q_80,usm_0.66_1.00_0.01/Transparent%20white.webp"
				alt="Not found"
			/>
			<h4>{title}</h4>
		</div>
	);
}

export default Title;
