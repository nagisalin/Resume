import classnames from 'classnames';

import './WorkSpaceBlock.scss'

const WorkSpaceBlock = (props) => {
	const { ABtest, className, img, imgAlt, title, description } = props;

	return (
		<div className={classnames("WorkSpace", className)}>
			{(ABtest) ?
				<>
					< img className="WorkSpace-Img before" src={ABtest.imgB} alt={ABtest.imgB_Alt} />
					< img className="WorkSpace-Img after" src={ABtest.imgA} alt={ABtest.imgA_Alt} />
				</>
				:
				< img className="WorkSpace-Img" src={img} alt={imgAlt}/>
			}

			<div className="WorkSpace-Content">
				<div className="WorkSpace-Content-Title">
					{title}
				</div>
				<div className="WorkSpace-Content-description">
					{description}
				</div>
			</div>
		</div>
	)
}

export default WorkSpaceBlock;