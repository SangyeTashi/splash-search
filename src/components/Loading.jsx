import React from 'react';
import { ImSpinner3 } from 'react-icons/im';

function Loading() {
    return (
        <div className="text-center animate-spin mx-auto flex items-center justify-center">
            <ImSpinner3 className="animate-pulse text-2xl" />
        </div>
    );
}

export default Loading;
