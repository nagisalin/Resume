import { Fragment, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { checkUserExistsByEmail } from 'shared/api/user';
import { isEmailValid } from 'shared/utils/utils';

import { Modal, Button } from 'components';

import './RegisterUserModal.scss';

const RegisterUserModal = ({ closeModal, setIsShowProgressDialog, loginUser = "" , loginPassword = ""}) => {
	const [ email, setEmail ] = useState(loginUser)
	const [ password, setPassword ] = useState(loginPassword)
	const [ isSignUp, setIsSignUp ] = useState(false)
	
	const [ errorInfo, setErrorInfo ] = useState("")

	const onChangeEmail = (e) => {
		setEmail(e.target.value.trim())
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value.trim())
	}

	// Trigger signUp with 'Enter' key
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			signUp();
		}
	};

	const signUp = async () => {
		if (email.length === 0) {
			setErrorInfo("Please enter email.")
			return;
		}

		if (password.length === 0) {
			setErrorInfo("Please enter password.")
			return;
		}

		setIsShowProgressDialog(true);
		if (!isEmailValid(email)) {
			setErrorInfo("Invalid Email format! Please check your email.")
			setIsShowProgressDialog(false);
			return;
		}

		const userExists = await checkUserExistsByEmail(email)
		if (userExists) {
			setErrorInfo("Already Registered Email! Please login by email.")
			setIsShowProgressDialog(false);
			return;
		}

		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;

			setIsSignUp(true)
			setIsShowProgressDialog(false);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode && errorMessage) {
				setErrorInfo(errorMessage)
			}
			setIsShowProgressDialog(false);
		});
	}

	return (
		<Fragment>
			<Modal
				className="registerUser-view-modal"
				isOpen={true}
				onClose={closeModal}
				isShowClose={false}
			>
				<div className="registerUser-view-modal-body">
					<div className="registerUser-view-modal-title">
						{isSignUp ? "Registed" : "Sign Up"}
					</div>

					<div className="registerUser-view-modal-content">
						{isSignUp ? 
							"Sign up with your Email Instantly."
							:
							"Please enter your email and password to sign up."}
					</div>

					{!isSignUp ?
						<Fragment>
							<input
								className="registerUser-view-modal-email-input"
								value={email}
								placeholder='Please enter email'
								onChange={onChangeEmail}
								onKeyDown={handleKeyPress}
							/>
							<input
								className="registerUser-view-modal-password-input"
								value={password}
								placeholder='Please enter password'
								onChange={onChangePassword}
								onKeyDown={handleKeyPress}
							/>
							<span className="input-errorInfo">{errorInfo}</span>
						</Fragment>
					:
						<div className="registerUser-view-modal-done"></div>
					}
					
					<Button
						className="registerUser-view-modal-btn"
						primary={true}
						onClick={isSignUp ? closeModal : signUp}
					>
						{isSignUp ? "Ok" : "Sign Up"}
					</Button>
				</div>
			</Modal>
		</Fragment>
	);
}

export default RegisterUserModal;