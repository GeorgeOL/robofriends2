import React from "react";
import CardList from "./CardList";
// import {robot} from "./robot";
import SearchBox from './/SearchBox';
import './App.css';



class App extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            robot: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>  response.json())
            .then(users => this.setState({ robot: users}));

    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        const filterRobot = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filterRobot);
    }
    render() {
        const filterRobot = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robot.length === 0 ) {
            return <h1 className={'tc f1'}>Loading</h1>
        } else {
            return (
                <dl className={'tc'}>
                    <h1 className={'f1'}>Robofriends</h1>
                    <h2 className={'f5'}><SearchBox searchChange={this.onSearchChange}/></h2>
                    <CardList robot={filterRobot}/>
                </dl>

            );
        }
    }

}
 export default App;