import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

function Error({ error }) {
    return (
        <div className="h-[200px] flex items-center flex-col justify-center">
            <MdErrorOutline width={50} height={50} />
            <h2>Error</h2>
            <p>{error.message}</p>
        </div>
    );
}

export default Error;
