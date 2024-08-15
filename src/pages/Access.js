import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

export const Access = (props) => {
    const navigate = useNavigate();

    const goDashboard = () => {
        navigate('/');
    };

    return (
        <div className="exception-body accessdenied">
            <div className="exception-panel">
                <h1>ACCESS</h1>
                <h3>denied</h3>
                <p>You are not allowed to view this page.</p>
                <Button type="button" label="Go back to home" onClick={goDashboard}></Button>
            </div>
            <div className="exception-footer">
                <img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="exception-logo" alt="exception-logo" />
                <img src={`assets/layout/images/appname-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="exception-appname" alt="exception-appname" />
            </div>
        </div>
    );
};
