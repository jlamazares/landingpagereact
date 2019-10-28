import React from "react";
import "../../styles/home.scss";
import { TheJumboTron } from "../component/jumbotron";
import { Cards } from "../component/cards";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="container">
			<TheJumboTron />
		</div>
		<div id="allcards">
			<div className="firstcard">
				<Cards />
			</div>
			<div className="secondcard">
				<Cards />
			</div>
			<div className="thirdcard">
				<Cards />
			</div>
			<div className="fourthcard">
				<Cards />
			</div>
		</div>
	</div>
);
