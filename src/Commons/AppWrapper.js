import React from 'react';

const AppWrapper = ( {children} ) => {
    return (
        <div className='App'>
            <div className='bg'>
                {children}
            </div>
        </div>
    );
}

export default AppWrapper;