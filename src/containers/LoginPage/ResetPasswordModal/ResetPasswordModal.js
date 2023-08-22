import { Fragment, useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { checkUserExistsByEmail } from 'shared/api/user'

import { Modal, Button } from 'components';

import './ResetPasswordModal.scss';

const ResetPasswordModal = ({ closeModal, setIsShowProgressDialog, loginUser = "" }) => {
	const [ resetEmail, setResetEmail ] = useState(loginUser)
	const [ isEmailSent, setIsEmailSent ] = useState(false)
	
	const [ errorInfo, setErrorInfo ] = useState("")

	const onChangeResetEmail = (e) => {
		setResetEmail(e.target.value.trim())
	}

	// Trigger set with 'Enter' key
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			sendResetPasswordEmail();
		}
	};

	const sendResetPasswordEmail = async () => {
		if (resetEmail.length === 0) {
			setErrorInfo("Please enter registed email.")
			return;
		}

		setIsShowProgressDialog(true);

		const userExists = await checkUserExistsByEmail(resetEmail)
		if (!userExists) {
			setErrorInfo("UnRegistered Email!! Please check your email.")
			setIsShowProgressDialog(false);
			return;
		}

		const auth = getAuth();
		sendPasswordResetEmail(auth, resetEmail)
		.then(() => {
			setIsEmailSent(true)
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
				className="resetPassword-view-modal"
				isOpen={true}
				onClose={closeModal}
				isShowClose={false}
			>
				<div className="resetPassword-view-modal-body">
					<div className="resetPassword-view-modal-title">
						{isEmailSent ? "Instructions Sent" : "Reset Password"}
					</div>

					<div className="resetPassword-view-modal-content">
						{isEmailSent ? 
							"We've sent an email with a link to reset your password.\nPlease Check your email for password reset instructions."
							:
							"Please enter your registed email\nwe'll mail you instructions to reset your password."}
					</div>

					{!isEmailSent ?
						<Fragment>
							<input
								className="resetPassword-view-modal-email-input"
								value={resetEmail}
								placeholder='Please enter registed email'
								onChange={onChangeResetEmail}
								onKeyDown={handleKeyPress}
							/>
							<span className="input-errorInfo">{errorInfo}</span>
						</Fragment>
					:
						<div className="resetPassword-view-modal-done"></div>
					}
					
					<Button
						className="resetPassword-view-modal-btn"
						primary={true}
						onClick={isEmailSent ? closeModal : sendResetPasswordEmail}
					>
						{isEmailSent ? "Ok" : "Send Email"}
					</Button>
				</div>
			</Modal>
		</Fragment>
	);
}

export default ResetPasswordModal;