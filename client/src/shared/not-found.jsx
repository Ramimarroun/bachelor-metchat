import React from "react";
import { Flex } from "../components/Flex";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="text-center">
            <Flex vertical className="m-auto" style={{ maxWidth: 300 }}>
                <span style={{ fontSize: 80 }}>404</span>
                <span>Resource Not Found!</span>
                <Link to="/" className="text-link btn">
                    go to home
                </Link>
            </Flex>
        </div>
    );
};
