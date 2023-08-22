import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './DemoBlock.scss'

const DemoBlock = (props) => {
	const { className, img, imgAlt, title, description, url, inverse } = props;

	return (
		<div className={classnames("DemoBlock", className, { inverse })}>
			<img className="DemoBlock-Img" src={img} alt={imgAlt}/>

			<div className="DemoBlock-Content">
				<div className="DemoBlock-Content-Title">
					{title}
				</div>
				<div className={classnames("DemoBlock-Content-description", { inverse })}>
					{description}
				</div>

				<Link to={url} className="DemoBlock-Content-demoLink">Demo</Link>
			</div>
		</div>
	)
}

export default DemoBlock;