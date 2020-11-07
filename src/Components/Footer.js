import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";

function Footer() {
	return (
		<div className="footer">
			<a className="footer__link" target="_blank" href="https://www.instagram.com/project_yunik/">
				<Button>
					<h4>Yunik⠀·</h4>
					<p>⠀Vancouver⠀</p>
					<InstagramIcon fontSize="large" />
				</Button>
			</a>
		</div>
	);
}

export default Footer;
