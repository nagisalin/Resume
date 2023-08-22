import ResumeHeader from './ResumeHeader/ResumeHeader';
import Information from 'containers/Resume/Information/Information';
import Experience from 'containers/Resume/Experience/Experience';
import SideProject from 'containers/Resume/SideProject/SideProject';
import Learn from 'containers/Resume/Learn/Learn';

import "./Resume.scss";

const Resume = () => {
	return (
		<div className="Resume">
			<ResumeHeader />
			<Information />
			<Experience />
			<SideProject />
			<Learn />
		</div>
	);
}

export default Resume;