import React from "react";
import CardList from "../components/CardList";
// import {robot} from "./robot";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';



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
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { robot, searchfield } = this.state;
        robot.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        const filterRobot = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robot.length ?
            <h1 className={'tc f1'}>Loading</h1> :
            (
                <dl className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robot={filterRobot} />
                        </ErrorBoundry>
                    </Scroll>
                </dl>

            );
        }


}
 export default App;