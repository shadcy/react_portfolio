import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./case.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Shukai Trust</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">March 2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./case.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Winspire Tech</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./case.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">RecruitWizer</div>
							<div className="work-subtitle">
								Full Stack  Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>


						<div className="work">
							<img
								src="./case.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Shukai Engineers pvt ltd.</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>



					</div>
				}
			/>
		</div>
	);
};

export default Works;
