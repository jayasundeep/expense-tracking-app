import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h3>Hi, this is from info component</h3>
        <p>Content is: {props.info} </p>
    </div>
);

const withAuthenticatedWarning = (WrappedContent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated === true ? 
                <div>
                    <p>This session is authenticated!</p>
                    <WrappedContent {...props} />
                </div>
                : <p>Please login to view the Info!</p>
            }
            
        </div>
    );
}

const AuthenticatedInfo = withAuthenticatedWarning(Info);

ReactDOM.render(<AuthenticatedInfo isAuthenticated={true} info='secret'/>, document.getElementById('app'));