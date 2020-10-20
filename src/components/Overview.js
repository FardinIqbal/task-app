// Overview.js

import React from "react";
import uniqid from "uniqid"

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task, i) => {
                return(
                    <div>
                        <li key={uniqid()}>{(i+1) + ": " + task}</li>
                    </div>
                    );
            })}
        </ul>
    );
};

export default Overview;