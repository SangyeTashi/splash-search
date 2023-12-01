import React from 'react';
import { ImSpinner3 } from 'react-icons/im';

function Loading() {
    return (
        <div className="animate-spin mx-auto flex justify-center">
            <ImSpinner3 className="animate-pulse text-2xl" />
        </div>
    );
}

export default Loading;
