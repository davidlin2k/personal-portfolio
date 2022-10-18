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
                    <div className="ResumeProjectsBlock-technologies">
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">React.js</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Node.js</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Blockchain</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">API</span></div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Winner of HTV7</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <p>
                    Won an MLH Sponsor Award in Hack The Valley 7 with the project Private Bit
                    </p>
                    <Button variant="contained" href="https://github.com/davidlin2k/PrivateBit" sx={{ display: "flex", backgroundColor: "#47B5FF", marginTop: "10px" }}>Source Code</Button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={{ borderTop: '5px solid #f15139' }}
                    date="Aug 2022"
                    iconStyle={{ background: '#f15139', color: '#fff' }}
                    icon={<GrSwift />}
                >
                    <div className="ResumeProjectsBlock-technologies">
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">XCode</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Swift</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">SQL</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Machine Learning</span></div>
                    </div>
                    <h3 className="vertical-timeline-element-title">HeadsUp Clone</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
                    <ul>
                        <li>An iOS application that aims to have the same functionality as an existing game called HeadsUp</li>
                    </ul>
                    <Button variant="contained" href="https://github.com/davidlin2k/HeadsUpClone" sx={{ display: "flex", backgroundColor: "#f15139", marginTop: "5px" }}>Source Code</Button>
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
                    <div className="ResumeProjectsBlock-technologies">
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Firebase</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">SQL</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Unit Testing</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">VB.NET</span></div>
                    </div>
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
                    <div className="ResumeProjectsBlock-technologies">
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Leadership</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Communication</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">Finance</span></div>
                        <div role="button" class="jss86" tabindex="-1"><span class="jss91">PHP</span></div>
                    </div>
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