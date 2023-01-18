import React from 'react';
import useTitle from '../../Hooks/useTitle';

const NotFound = () => {
    useTitle('404 - Not found')

    return (
        <div>
            Not Found
        </div>
    );
};

export default NotFound;