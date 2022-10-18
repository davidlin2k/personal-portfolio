import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaUniversity } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { GiPig } from 'react-icons/gi';
import { GrSwift } from 'react-icons/gr';
import { Button } from "@mui/material";

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor={'#256D85'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={{ borderTop: '5px solid #47B5FF' }}
                    date="Oct 2022"
                    iconStyle={{ background: '#47B5FF', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">Winner of HTV7</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <p>
                    Won an MLH Sponsor Award in Hack The Valley 7 with the project Private Bit
                    </p>
                    <p>React.js | Node.js | Blockchain | API</p>
                    <Button variant="contained" href="https://github.com/davidlin2k/PrivateBit" sx={{ backgroundColor: "#47B5FF" }}>Link</Button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={{ borderTop: '5px solid #f15139' }}
                    date="Aug 2022"
                    iconStyle={{ background: '#f15139', color: '#fff' }}
                    icon={<GrSwift />}
                >
                    <h3 className="vertical-timeline-element-title">HeadsUp Clone</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <ul>
                        <li>An iOS application that aims to have the same functionality as an existing game called HeadsUp</li>
                    </ul>
                    <p>Swift | SQL | Machine Learning</p>
                    <Button variant="contained" href="https://github.com/davidlin2k/HeadsUpClone" sx={{ backgroundColor: "#f15139", marginLeft: "auto"}}>Link</Button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #002a5c' }}
                    date="Sep 2021 - Present"
                    iconStyle={{ background: '#002a5c', color: '#fff' }}
                    icon={<FaUniversity />}
                >
                    <h3 className="vertical-timeline-element-title">University of Toronto</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <p>
                    {"Bachelor of Science (B.Sc.) Computer Science Specialist & Data Science Specialist Candidate (Expected graduation in Jun 2026)"}
                    </p>
                    <ul>
                        <li>
                            <p>{"Arts & Science Internship Program"}</p>
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #000' }}
                    date="May 2022 - Sep 2022"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Quantasphere Business Solutions Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Burnaby, BC</h4>
                    <p>
                    Software Engineering Intern
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '5px solid #FFC0CB' }}
                    date="Jan 2019 - May 2020"
                    iconStyle={{ background: '#FFC0CB', color: '#fff' }}
                    icon={<GiPig />}
                >
                    <h3 className="vertical-timeline-element-title">Pega Trading Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Burnaby, BC</h4>
                    <p>
                    Founder
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
    );
}

export default Experience;