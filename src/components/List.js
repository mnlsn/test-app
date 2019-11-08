import React from "react";

import Directory from "./Directory";
import File from "./File";

const List = ({ data, search }) => {
    const dir = data.map((d, i) => {
        if (d.type === "directory") {
            return (
                <Directory
                    name={d.name}
                    contents={d.contents}
                    search={search}
                    depth={1}
                    key={`dir-${i}-1`}
                    open={true}
                />
            );
        } else if (d.type === "file") {
            return (
                <File
                    name={d.name}
                    search={search}
                    depth={1}
                    key={`file-${i}-1`}
                />
            );
        }

        return null;
    });

    return <ul>{dir}</ul>;
};

export default List;
