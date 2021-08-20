import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
	SignInContainer,
	ButtonsBarContainer,
	SignInTitle,
} from "./sign-in.styles";

export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}

		this.setState({ email: "", password: "" });
	};

	handleCange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
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
							onClick={signInWithGoogle}
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
