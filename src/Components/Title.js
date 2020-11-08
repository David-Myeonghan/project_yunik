import React from "react";
import "./Title.css";
import logo from "../static/project-yunik.jpeg";

function Title({ title }) {
	return (
		<div className="title__cover">
			<img className="title__image" src={logo} alt="Not found" />
			<h4>{title}</h4>
		</div>
	);
}

export default Title;
