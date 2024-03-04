import PropsTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h1 className='welcome-message'>Welcome {props.username} </h1>
    const loginPrompt = <h1 className='login-prompt'>Please login</h1>

    return( props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.prototypes = {
    isLoggedIn: PropsTypes.bool,
    username: PropsTypes.string,
}

//set default props
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting