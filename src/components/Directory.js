import React, { useState } from "react";

import File from "./File";
import Highlight from "./Highlight";

const Directory = ({ name, contents, search, depth }) => {
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    const sub =
        contents.length < 1
            ? null
            : contents.map((c, i) => {
                  if (c.type === "directory") {
                      return (
                          <Directory
                              name={c.name}
                              contents={c.contents}
                              search={search}
                              key={`dir-${i}-${depth}`}
                              depth={depth + 1}
                          />
                      );
                  } else if (c.type === "file") {
                      return (
                          <File
                              name={c.name}
                              search={search}
                              key={`file-${i}-${depth}`}
                          />
                      );
                  }

                  return null;
              });
    return (
        <li>
            <h2 className="directory__name" onClick={() => toggleOpen()}>
                <Highlight
                    text={name}
                    search={search}
                    matchClass="directory__name--search"
                    nonMatchClass="directory__name--nonMatch"
                />
            </h2>
            {open ? <ul className="directory__list">{sub}</ul> : null}
        </li>
    );
};

export default Directory;
