//Using functions - hooks
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.js";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [personList, setPersonList] = useState([]);
	const [filteredList, setFilteredList] = useState(personList);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((jsonResponse) => {
				setPersonList(jsonResponse);
			})
			.catch((e) => console.log(e));
	}, []);

	useEffect(() => {
		const filteredList = personList.filter((p) =>
			p.name.toLowerCase().includes(searchField)
		);
		setFilteredList(filteredList);
	}, [searchField, personList]);

	const onSearchChange = (event) => {
		console.log("onSearchChange called");
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<div>
				<h1>{`DIRECTORY`}</h1>
			</div>

			<div className='search-area'>
				<p>Search Students Name</p>
				<SearchBox onChangeHandler={onSearchChange}></SearchBox>
			</div>
			<div>
				<CardList list={filteredList}></CardList>
			</div>
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			personList: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((jsonResponse) => {
// 				this.setState(
// 					() => {
// 						return { personList: jsonResponse };
// 					},
// 					() => {}
// 				);
// 			})
// 			.catch((e) => console.log(e));
// 	}

// 	onSearchChange = (event) => {
// 		const word = event.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchField: word };
// 		});
// 	};

// 	render() {
// 		const { personList, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredPersonlist = personList.filter((p) =>
// 			p.name.toLowerCase().includes(searchField)
// 		);
// 		const people = "SCHOOL";
// 		return (
// 			<div className='App'>
// 				<div>
// 					<h1>{`${people} DIRECTORY`}</h1>
// 				</div>

// 				<div className='search-area'>
// 					<p>Search Students Name</p>
// 					<SearchBox onChangeHandler={onSearchChange}></SearchBox>
// 				</div>
// 				<div>
// 					<CardList list={filteredPersonlist}></CardList>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
