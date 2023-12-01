import React from 'react';
import { BiError } from 'react-icons/bi';

function Error({ error }) {
    return (
        <div className="h-[200px] flex items-center flex-col justify-center">
            <BiError className="text-3xl" />
            <h2>Error:</h2>
            <p>{error.message}</p>
        </div>
    );
}

export default Error;
