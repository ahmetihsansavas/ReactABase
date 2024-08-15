import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

export const NotFound = (props) => {
    const navigate = useNavigate();

    const goDashboard = () => {
        navigate('/');
    };

    return (
        <div className="exception-body notfound">
            <div className="exception-panel">
                <h1>404</h1>
                <h3>not found</h3>
                <p>The page that you are looking for does not exist</p>

                <Button type="button" label="Go back to home" onClick={goDashboard}></Button>
            </div>
            <div className="exception-footer">
                <img src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="exception-logo" alt="expection-logo" />
                <img src={`assets/layout/images/appname-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} className="exception-appname" alt="expection-appname" />
            </div>
        </div>
    );
};
