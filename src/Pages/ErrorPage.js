import React from 'react';
import thanos from '../Images/Transparent/thanos1.png';

function ErrorPage() {
    return (
        <div className="error-page">
            <img src={thanos} alt='Thanos from Endgame' className="error-page-img"/>
            <h1 className='.text-error-page'>ERROR 404: THANOS SURVIVED</h1>
        </div>
    )
}

export default ErrorPage;