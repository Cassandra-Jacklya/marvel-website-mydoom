import React from 'react';

const AppWrapper = ( {children} ) => {
    return (
        <div className='App'>
            {children}
        </div>
    );
}

export default AppWrapper;