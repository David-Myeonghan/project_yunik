import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Header() {
	return (
		<div className="header">
			<div className="header__container">
				<Link className="header__link" to="/">
					<Button>Home</Button>
				</Link>
				<Link className="header__link" to="/classinfo">
					<Button>Class Info</Button>
				</Link>
				<Link className="header__link" to="/private-lessons">
					<Button>Private Lessons</Button>
				</Link>
				<Link className="header__link" to="/covid-19-policies">
					<Button>COVID-19 Policies</Button>
				</Link>
				<Link className="header__link" to="/faqs">
					<Button>FAQs</Button>
				</Link>
				<Link className="header__link" to="/contact">
					<Button>Contact</Button>
				</Link>
			</div>
		</div>
	);
}

export default Header;
