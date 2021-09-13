import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/index';

function About() {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					<p>Hello there 👋</p>
					<p>
						<span className="no-break">I'm a Web Developer, </span>
						<span className="no-break">RPG conqueror, </span>
						<br />
						<span className="no-break">avid reader, </span>
						<span>and </span>
						<span className="no-break">TV enthusiast.</span>
					</p>
				</div>
				<div className="about-photo">
					<img
						src={require('../../../assets/coding.png').default}
						alt="coding girl"
						className="picture"
					/>
				</div>
			</div>
			<SocialContact />
		</div>
	);
}

export default About;
