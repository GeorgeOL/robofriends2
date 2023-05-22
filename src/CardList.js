import React from "react";
import Card from "./Card";
// import { robot } from "./robot";

const CardList = ({ robot }) => {
    // const cardComponent =

return (
        <div>
            {
                robot.map((user, i) => {
                    return (
                        <Card
                            key= {i}
                            id={robot[i].id}
                            name={robot[i].name}
                            email={robot[i].email} />
                    )
                })
            }
        </div>
    );
}

export default CardList;