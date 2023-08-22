import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Modal.scss';

ReactModal.setAppElement('#root');

const Modal = (props) => {
	const { className, overlayClassName, buttonClassName, onClose, isShowClose, children, ...otherProps } = props;
	
	const closeModal = () => {
		if (onClose) onClose();
	};

	const css = classnames('component-modal', className);
	const overlay = classnames('component-modal-overlay', overlayClassName);
	const button = classnames('icon icon-close-light modal-close-button', buttonClassName);

	return (
		<ReactModal
			className={css}
			overlayClassName={overlay}
			onRequestClose={onClose}
			{...otherProps}
		>
			{isShowClose && <button className={button} onClick={closeModal}/>}
			{children}
		</ReactModal>
	);
}

Modal.propTypes = {
	className: PropTypes.string,
	overlayClassName: PropTypes.string,
	buttonClassName: PropTypes.string,
	onClose: PropTypes.func.isRequired, // set this to onClick Overlay will default call this function to close
	isShowClose: PropTypes.bool, //set to render cancel crossIcon rightTop side
	shouldCloseOnOverlayClick: PropTypes.bool,
	shouldCloseOnEsc: PropTypes.bool,
};

Modal.defaultProps = {
	className: '',
	overlayClassName: '',
	buttonClassName: '',
	onClose: () => { },
	isShowClose: true,
	shouldCloseOnOverlayClick: true,
	shouldCloseOnEsc: true,
};

export default Modal;