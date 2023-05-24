import React from "react";
import CardList from "./CardList";
import {robot} from "./robot";
import SearchBox from './/SearchBox';

const App = () => {
    return (

        <dl className='tc'>
            <h1>Robofriens</h1>
            <dt><SearchBox /></dt>
            <CardList robot={robot} />
        </dl>

    );
}
 export default App;