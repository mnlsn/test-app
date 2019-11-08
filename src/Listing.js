import React, { useEffect, useState } from "react";
import axios from "axios";
import { css, Global } from "@emotion/core";

import List from "./components/List";

const Listing = () => {
    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const getDirectory = async () => {
            const result = await axios("./listing.json");

            setList(result.data);
        };

        getDirectory();
    }, []);

    const handleSearchInput = e => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <Global
                styles={css`
                    body {
                        font-family: "Helvetica Neue", "Helvetica", "Arial",
                            sans-serif;
                        font-weight: 400;
                    }

                    h1 {
                        font-weight: 400;
                        float: left;
                        margin-right: 1em;
                    }

                    input {
                        display: inline-block;
                        margin-top: 1em;
                        padding: 0.7em 1em;
                        font-size: 16px;
                    }

                    ul {
                        clear: left;
                        list-style: none;
                        padding: 0 0 0 1em;
                    }

                    h2 {
                        font-weight: 400;
                        border-bottom: 1px solid #dadada;
                        padding: 0 0 0.2em;
                        cursor: pointer;
                    }

                    h3 {
                        font-weight: normal;
                        border-bottom: 1px solid #dadada;
                        padding: 0 0 0.2em;
                    }

                    .directory__name--search {
                        color: #fff;
                        background-color: #4e4e4e;
                    }

                    .directory__name--nonMatch {
                        color: #dadada;
                    }
                `}
            />
            <div>
                <h1>Directory</h1>

                <input
                    tabIndex="1"
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={e => handleSearchInput(e)}
                />

                <List data={list} search={searchText} />
            </div>
        </>
    );
};

export default Listing;
