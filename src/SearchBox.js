import React from "react";

const SearchBox = ({searchfield ,searchChange}) => {
    return (
        <>
            <input className = {'pa3 ba b--green bg-lightest-blue'}
                 type='search'
                 placeholder={'search robots'}
                 onChange={searchChange} />

             {/*scris in continuare pentru culoare al "SearchBox"*/}
        </>
    );
}
export default SearchBox;