import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Button, Grid, } from '@material-ui/core';
import { connect } from 'react-redux';
import login from '../actions/login'

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			contact: '',
			otp: '',
			otpFieldType: "hidden",
			otpSent: false,
		};
	}

	handleContactChange = (evt) => {
		this.setState({ contact: evt.target.value });
	}

	handleOTPChange = (evt) => {
		this.setState({ otp: evt.target.value });
	}
	handleSubmit = (evt) => {
		
		if(!this.state.otpSent){
			//sendOtp
			this.setState({otpSent:true})
			this.setState({ otpFieldType: "" });
		}
	}

	render() {
		return (
			<div>
				<Grid
				container
				direction = "column"

				>
				<TextField
					id="contact"
					label="Contact"
					placeholder="Contact"
					margin="normal"
					variant="outlined"
					style={{ width: 200 }}
					value={this.state.contact}
					onChange={this.handleContactChange}
				/>

				<TextField
					type={this.state.otpFieldType}
					id="OTP"
					//label="OTP"
					placeholder="OTP"
					margin="normal"
					variant="outlined"
					style={{ width: 200 }}
					value={this.state.otp}
					onChange={this.handleOTPChange}
				/>

				<Button
					variant="outlined"
					onClick={this.handleSubmit}
				>
					Login
				</Button>
				</Grid>

			</div>
		)
	}
}

export default connect(null, { login })(LoginForm);