import React, { Fragment } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { Button, ProgressBar } from 'components';

import './ProgressDialog.scss'

Modal.setAppElement('#root')

const DefaultStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: '#0000000',
		border: 'none',
	},
	overlay: {
		zIndex: 140,
	},
};

const ProgressDialog = (props) => {
	const { className, overlayClassName, customStyle, show, message, title, onOk, onClose } = props;

	ProgressDialog.propTypes = {
		message: PropTypes.string,
		title: PropTypes.string,
	};

	const onOkClick = () => {
		onOk();
	}

	const onCloseClick = () => {
		onClose();
	}

	const renderBody = () => {
		return (
			<Fragment>
				{title && (
					<div className="ProgressDialog-Header">
						<h2>{title}</h2>
					</div>
				)}
				<div className="ProgressDialog-Body">
					<div>
						<div className="ProgressDialog-Body-Message">{message || 'Loading...'}</div>
						<ProgressBar
							striped
							animated
							variant="warning"
							style={{ width: '500px', height: '35px' }}
							progress={100}
						/>


					</div>
				</div>
			</Fragment>
		);
	};

	return (
		<Modal
			isOpen={show}
			style={customStyle ? customStyle : DefaultStyles}
			className={className}
			overlayClassName={overlayClassName}>
			{renderBody()}
			{onOk || onClose ? (
				<div className="ProgressDialog-Footer">
					{onOk ? (
						<Button primary onClick={onOkClick}>
							confirm
						</Button>
					) : (
						''
					)}
					{onClose ? (
						<Button onClick={onCloseClick}>
							close
						</Button>
					) : (
						''
					)}
				</div>
			) : (
				''
			)}
		</Modal>
	);
}

export default ProgressDialog;
