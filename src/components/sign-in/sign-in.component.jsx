
import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-buttom/custom-buttom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleCange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
			<div className="sign-in">
				<h2>I already have an account</h2>
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
					<div className='buttons'>
						<CustomButtom type="submit">Sign in</CustomButtom>
						<CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButtom>
					</div>
				</form>
			</div>
		);
    }
}