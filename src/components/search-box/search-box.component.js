import "./search-box.styles.css";
// import { useState, useEffect } from "react";

const SearchBox = (props) => {
	const { onChangeHandler } = props;
	return (
		<input
			className='search-box'
			placeholder=' type name'
			type='searchbox'
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
