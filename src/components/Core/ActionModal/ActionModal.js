import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import cx from 'classnames';
import { Button, Modal } from 'components';

import './ActionModal.scss';

// type
const ActionModal = ({
	className,
	type = 'action',
	overlayClassName,
	isOpen,
	isShowClose = true,
	isHideCancelBtn = false,
	isHideConfirmBtn = false,
	modalTitle = '',
	modalBodyClassname,
	cancelButtonText,
	cancelButtonClassname,
	cancelButtonType,
	isCancelButtonDisabled,
	onCancelButtonClick,
	confirmButtonText,
	confirmButtonClassname,
	confirmButtonType,
	isConfirmButtonDisabled,
	onClose,
	onConfirm,
	shouldCloseOnOverlayClick = true,
	alertText = "",
	modalBody = null,
	children = null, // modal body
}) => {

	// prevent Body Scrolling
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	// prevent Body Scrolling
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	const getModalTitle = () => {
		if (Array.isArray(modalTitle)) {
			return modalTitle.map((item, index) => {
				return (
					<span key={index} className={cx('header-title', { shrink: index === 1 })}>
						{item}
					</span>
				);
			});
		}

		return <span className="header-title"> {modalTitle} </span>;
	};

	return (
		<Modal
			className={cx(type, className)}
			overlayClassName={cx('ActionModalOverlay', overlayClassName)}
			isOpen={isOpen}
			onClose={onClose}
			isShowClose={isShowClose}
			shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
		>
			<div className="modal-header-cont">
				{getModalTitle()}
			</div>

			<div className={cx('modal-body-cont', modalBodyClassname)}>
				{modalBody}
				{children}
				{<div className="alert-text">{alertText}</div>}
			</div>

			<div className="modal-footer-cont">
				{!isHideCancelBtn && (
					<Button
						data-cy="cancel"
						{...(cancelButtonType && { [cancelButtonType]: true })}
						className={cx(cancelButtonClassname)}
						disabled={isCancelButtonDisabled}
						onClick={onCancelButtonClick || onClose}
					>
						{cancelButtonText || '取消'}
					</Button>
				)}

				{!isHideConfirmBtn && (
					<Button
						data-cy="confirm"
						{...(confirmButtonType ? { [confirmButtonType]: true } : { primary: true })}
						className={cx(confirmButtonClassname)}
						disabled={isConfirmButtonDisabled}
						onClick={onConfirm}
					>
						{confirmButtonText || '確認'}
					</Button>
				)}
			</div>
		</Modal>
	);
};

ActionModal.propTypes = {
	type: PropTypes.oneOf(['action', 'confirmation']),
	cancelButtonClassname: PropTypes.string,
	overlayClassName: PropTypes.string,
	cancelButtonText: PropTypes.string,
	cancelButtonType: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'tertiary', 'primaryYellow', 'alert']),
	isCancelButtonDisabled: PropTypes.bool,
	children: PropTypes.node,
	modalBody: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	className: PropTypes.string,
	confirmButtonClassname: PropTypes.string,
	confirmButtonText: PropTypes.string,
	confirmButtonType: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'tertiary', 'primaryYellow', 'alert']),
	isConfirmButtonDisabled: PropTypes.bool,
	isHideCancelBtn: PropTypes.bool,
	isHideConfirmBtn: PropTypes.bool,
	isOpen: PropTypes.bool,
	isShowBackButton: PropTypes.bool,
	isShowClose: PropTypes.bool,
	modalBodyClassname: PropTypes.string,
	modalTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	onBack: PropTypes.func,
	onCancelButtonClick: PropTypes.func,
	onClose: PropTypes.func,
	onConfirm: PropTypes.func,
	shouldCloseOnOverlayClick: PropTypes.bool,
	alertText: PropTypes.string,
};

export default ActionModal;
