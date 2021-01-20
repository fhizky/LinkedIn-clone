import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__articles">
			<div className="widgets__articlesLeft">
				<FiberManualRecordIcon />
			</div>

			<div className="widgets__articlesRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Is Redux too good?", "Top news - 9999 readers")}
			{newsArticle("Tesla hits new high", "cars & auto - 300 readers")}
			{newsArticle("Corona Virus UK update", "Top news - 886 readers")}
			{newsArticle("Bit Coin breaks $22k", "Crypto - 500 readers")}
			{newsArticle("ReactJS improvement 2021", "Programming - 900 readers")}
		</div>
	);
}

export default Widgets;
