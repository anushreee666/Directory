import "./card-list.styles.css";
import Card from "../card/card.component.js";
// import { useState, useEffect } from "react";
const CardList = (props) => {
	const { list } = props;

	return (
		<div className='grid-container'>
			{list.map((item) => {
				return (
					<Card
						key={item.id}
						id={item.id}
						name={item.name}
						email={item.email}></Card>
				);
			})}
		</div>
	);
};

export default CardList;
