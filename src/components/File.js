import React from "react";

import Highlight from "./Highlight";

const File = ({ name, search, depth }) => {
    return (
        <li className="directory__list-fileName">
            <h3>
                <Highlight
                    text={name}
                    search={search}
                    matchClass="directory__name--search"
                    nonMatchClass="directory__name--nonMatch"
                    depth={depth}
                />
            </h3>
        </li>
    );
};

export default File;
