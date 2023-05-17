import React from "react";

type ItemProps = {
    text: string;
};

const Item: React.FC<ItemProps> = ({ text }) => {
    return (
        <p>
            {text.split("\n").map((txt, index) => (
                <React.Fragment key={index}>
                    {txt}
                    <br />
                </React.Fragment>
            ))}
        </p>
    );
};

export default Item;