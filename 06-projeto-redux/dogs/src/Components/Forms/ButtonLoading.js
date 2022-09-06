import React from "react";
import Button from "./Button";

const ButtonLoading = () => {
    return (
        <Button disabled>
            <div className="loading-button"></div>
        </Button>
    );
};

export default ButtonLoading;
