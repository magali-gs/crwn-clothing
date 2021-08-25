import { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
import {
	SignInContainer,
	ButtonsBarContainer,
	SignInTitle,
} from "./sign-in.styles";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleCange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;

		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your e-mail and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleCange}
						name="email"
						type="email"
						value={this.state.email}
						label="E-mail"
						required
					/>
					<FormInput
						handleChange={this.handleCange}
						name="password"
						type="password"
						value={this.state.password}
						label="Password"
						required
					/>
					<ButtonsBarContainer>
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		);
	}
}

const mapDispatchoProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
}); 


export default connect(null, mapDispatchoProps)(SignIn);