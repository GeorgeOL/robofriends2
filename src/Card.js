import React from "react";

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    return (
        // <h1>roboFriends</h1>
        <div className={'tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-8'}>
            <img alt={'robots'} src={`https://robohash.org/${id}?100x100`} />
            <div>s
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;