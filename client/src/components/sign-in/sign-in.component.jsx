import { useState } from "react";
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

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleCange = (e) => {
		const { value, name } = e.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your e-mail and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					handleChange={handleCange}
					name="email"
					type="email"
					value={email}
					label="E-mail"
					required
				/>
				<FormInput
					handleChange={handleCange}
					name="password"
					type="password"
					value={password}
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
};

const mapDispatchoProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
}); 


export default connect(null, mapDispatchoProps)(SignIn);