import React from "react";

const Highlight = ({ text, matchClass, nonMatchClass, search }) => {
    if (text && search) {
        const splitWords = text.split(new RegExp(`(${search})`, "gi"));

        if (splitWords.length > 1) {
            const map = splitWords.map((word, i) => {
                if (word.toLowerCase().includes(search.toLowerCase())) {
                    return (
                        <mark
                            className={matchClass}
                            key={`highlighted-${i}-${text}`}
                        >
                            {word}
                        </mark>
                    );
                }

                return word;
            });

            return <>{map}</>;
        } else {
            return <span className={nonMatchClass}>{text}</span>;
        }
    }

    return <>{text}</>;
};

export default Highlight;
