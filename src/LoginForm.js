import React, { Component } from 'react';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.username + ' tried to login');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <TextField hintText="Username" onChange= {(event, newValue) => this.setState({username:newValue})} />
                    <TextField hintText="Password" onChange= {(event, newValue) => this.setState({password:newValue})} />
                    <RaisedButton label='Submit' primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style= {
    margin: 15,
};
export default LoginForm;
