import "./card.styles.css";
// import { Component } from "react";
const Card = (props) => {
	const { id, name, email } = props;

	return (
		<div
			key={id}
			className='grid-item'>
			<div key={id}>
				<div className='item-id'>{id}</div>
				<img
					alt={`img`}
					src={`https://robohash.org/${id}?set=set2&size=150x150`}
				/>
				<div>{name}</div>
				<div>{email}</div>
			</div>
		</div>
	);
};

export default Card;
