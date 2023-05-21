import React from "react";

const Card = () => {
    return (
        // <h1>roboFriends</h1>
        <div className={'bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-8'}>
            <img alt={'robots'} src={'https://robohash.org/Andra?200x200'} />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;