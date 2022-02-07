import React,{ useRef} from 'react';
import { Link } from 'react-router-dom';
import '@styles/login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	const from = useRef(null);

	const handleSubmit = (event) =>{
		event.preventDefault();
		const fromData = new FormData(from.current);
		const data = {
			username:fromData.get('email'),
			password: fromData.get('password'),
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={from}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button"onClick={handleSubmit}> Log in</button>
					<Link to="/">Forgot my password</Link>
				</form>
				<button className="secondary-button signup-button" >Sign up</button>
			</div>
		</div>
	);
}

export default Login;