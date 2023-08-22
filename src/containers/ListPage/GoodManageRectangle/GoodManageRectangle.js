import PropTypes from 'prop-types';

import { IconMenu } from 'components';

import './GoodManageRectangle.scss';

const GoodManageRectangle = (props) => {
	const { listIndexNum, good, onEditGood, onRemoveGood } = props;

	const editGood = () => {
		if (onEditGood) {
			onEditGood(good);
		}
	};
	const removeGood = () => {
		if (onRemoveGood) {
			onRemoveGood(good.id);
		}
	};

	return (
		<div className="Good-Manage-Rectangle">
			<div className="Good-Manage-Rectangle-Container">
				<span className="Good-Manage-Rectangle-Index">{listIndexNum}</span>

				<div className="Good-Manage-Rectangle-Info">
					<div className="Good-Manage-Rectangle-Info-displayName">{good?.displayName}</div>

					<div className="Good-Manage-Rectangle-Info-price">{good?.price}</div>
					<div className="Good-Manage-Rectangle-Info-amount">{good?.amount}</div>

					<div className="Good-Manage-Rectangle-Info-location">{good?.location}</div>
				</div>
			</div>

			<IconMenu className="Good-Manage-Rectangle-IconMenu" menuPosition="right">
				<IconMenu.Item onClick={editGood}>修改商品</IconMenu.Item>

				<IconMenu.Item onClick={removeGood} redText>
					刪除商品
				</IconMenu.Item>
			</IconMenu>

			<div className="Good-Manage-Rectangle-Divider" />
		</div>
	);
};

GoodManageRectangle.propTypes = {
	listIndexNum: PropTypes.number.isRequired,
	good: PropTypes.object.isRequired,
	onRemoveGood: PropTypes.func.isRequired,
};

export default GoodManageRectangle;
