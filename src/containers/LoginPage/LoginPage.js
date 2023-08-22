import React, { useState } from 'react';
import app from 'firebaseImport'; // must to have to init firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button, ProgressDialog } from 'components';
import ResetPasswordModal from './ResetPasswordModal/ResetPasswordModal';
import RegisterUserModal from './RegisterUserModal/RegisterUserModal';

import { CarouselInner } from "./CarouselInnerConfig";

import LoginLogo from 'design/images/Login/login-logo.png';
import showInput from 'design/images/Icons/showInput.svg';
import hideInput from 'design/images/Icons/hideInput.svg';

import "./LoginPage.scss";

const LoginPage = () => {
	const [ isViewPassword, setIsViewPassword ] = useState(false);
	const [ loginUser, setLoginUser ] = useState("");
	const [ loginPassword, setLoginPassword ] = useState("");
	
	const [ signInErrorInfo, setSignInErrorInfo ] = useState("");

	const [ isShowResetPasswordModal, setIsShowResetPasswordModal ] = useState(false);
	const [ isShowRegisterUserModal, setIsShowRegisterUserModal ] = useState(false);
	const [ isShowProgressDialog, setIsShowProgressDialog ] = useState(false);
	

	const checkLoginPermission = async () => {
		var email = loginUser;
		var password = loginPassword;

		setIsShowProgressDialog(true);

		const auth = getAuth();
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			alert("登入成功!")
			// 成功登入要跳轉頁面到其他 page?
		} catch (error) {
			const errorCode = error.code; //auth/invalid-email  auth/user-not-found  auth/wrong-password  auth/too-many-requests  auth/network-request-failed
			let msg = ""
			
			if (errorCode === 'auth/invalid-email') {
				msg = "Invalid Email format. Please check again."
			} else if (errorCode === 'auth/wrong-password') {
				msg = "Invalid password. Please check again."
			} else if (errorCode === 'auth/too-many-requests') {
				msg = "Too many failed login attempts. Try again later."
			} else if (errorCode === 'auth/user-not-found') {
				msg = "Email account not found."
			} else if (errorCode === 'auth/network-request-failed') {
				msg = "Internet connection is unstable. Please try again."
			} else {
				if (loginPassword.length === 0) {
					msg = "Invalid password. Please type password."
				} else {
					msg = "Something wrong! Please Learn Slime for help."
				}
			}

			setSignInErrorInfo(msg)
		}

		setIsShowProgressDialog(false);
	}

	const toggleResetPasswordModal = () => {
		setIsShowResetPasswordModal(prevState => !prevState)
	};

	const toggleRegisterUserModal = () => {
		setIsShowRegisterUserModal(prevState => !prevState)
	};

	const onChangeUserInput = (e) => {
		setLoginUser(e.target.value);
	};

	const onChangePasswordInput = (e) => {
		setLoginPassword(e.target.value);
	};
	
	const onClickIsViewPassword = () => {
		setIsViewPassword(presState => !presState)
	}

	const onClickSignIn = () => { 
		checkLoginPermission();
	}

	const onClickForgetPassword = () => {
		toggleResetPasswordModal();
	}

	const onClickRegister = () => {
		toggleRegisterUserModal()
	}

	// Trigger signIn with 'Enter' key
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			checkLoginPermission();
		}
	};

	const renderSlider = () => {
		const carousel_settings = {
			dots: true,
			arrows: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		return (
			<Slider className="login-carousel" {...carousel_settings}>
				{CarouselInner.map((item, index) => (
					<div className="login-carousel-inner" key={item.text}>
						<img src={item['img']} className="login-carousel-photo" alt={item.text}></img>
						<div className="login-carousel-text">{item['text']}</div>
					</div>
				))}
			</Slider>
		);
	};

	const renderLoginPanelContent = () => {
		return (
			<div className="LoginPage-Panel-Container">
				<div className="login-user-info">
					<div className="login-user-content">
						<div className="login-user-form">
							<div className="login-user-status">
								<div className="login-user-title">Login</div>
							</div>

							<div className="login-user-account">
								<div className="login-user-account-title">User</div>
								
								<input
									className="login-user-account-input"
									value={loginUser}
									placeholder='Trial:slime@resume.com'
									onChange={onChangeUserInput}
									onKeyDown={handleKeyPress}
								/>
							</div>

							<div className="login-user-password">
								<div className="login-user-password-title">Password</div>
								
								<input
									className="login-user-password-input"
									value={loginPassword}
									type={isViewPassword ? "text" : "password"}
									placeholder='Trial:123456'
									onChange={onChangePasswordInput}
									onKeyDown={handleKeyPress}
								/>
								<img
									src={isViewPassword ? showInput : hideInput}
									className="login-user-input-icon"
									onClick={onClickIsViewPassword}
									alt="isViewPassword"></img>
							</div>

							{signInErrorInfo.length > 0 ? (
								<div className="login-user-errorMsg" variant="caption" color="error">
									{signInErrorInfo}
								</div>
							) : (
								<div className="login-user-errorSpace"></div>
							)}
						</div>
						
						<div className="login-user-btn-frame">
							<Button
								className="login-user-btn-login"
								primary
								onClick={onClickSignIn}
							>
								Login
							</Button>

							<div className="login-user-btn-bottom">
								<div className="login-user-btn-forget" onClick={onClickForgetPassword}>
									Forget Password
								</div>

								<div className="login-user-btn-register" onClick={onClickRegister}>
									Register
								</div>
							</div>
							
						</div>
					</div>
				</div>
				{renderSlider()}
			</div>
		);
	}

	const renderLoginPanel = () => {
		return (
			<div className="LoginPage-Panel">
				<div className="LoginPage-Panel-Banner">
					<img src={LoginLogo} className="LoginPage-Panel-Banner-Logo" alt="LoginLogo"></img>
					<span className="LoginPage-Panel-Banner-Text">Login Cat</span>
				</div>
				{renderLoginPanelContent()}
			</div>
		);
	}
	
	return (
		<div className="LoginPage">
			{renderLoginPanel()}
			{isShowResetPasswordModal && <ResetPasswordModal closeModal={toggleResetPasswordModal} setIsShowProgressDialog={setIsShowProgressDialog} loginUser={loginUser} />}
			{isShowRegisterUserModal && <RegisterUserModal
				closeModal={toggleRegisterUserModal}
				setIsShowProgressDialog={setIsShowProgressDialog}
				loginUser={loginUser}
				loginPassword={loginPassword}
			/>}
			<ProgressDialog show={isShowProgressDialog}/>
		</div>
	);
}

export default LoginPage;