import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Experience = () => {

    const [Education, setEducation] = useState(false);

    return (
        <div className='py-24 my-10'>

            <div>
                <button onClick={() => { setEducation(!Education) }} className={`h-[46px] bg-[#E84949] text-white py-2.5 px-6 rounded my-5 hover:bg-[#e84949e3]`}>Experience</button>
                <button onClick={() => { setEducation(!Education) }} className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-6 rounded my-5 hover:bg-[#4f47c8e3] mx-5`}>Education</button>
            </div>

            {
                !Education ?
                    <div className="experience">
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-2/3 mx-auto my-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3 className="title text-xl font-bold py-4 ">Senior Software Engineer - Self Employed</h3>
                            <div className='overview'>
                                <strong>Stack: React, Node, Angular, Spring, Microservices, AWS, etc</strong>
                                <ul>
                                    <li>Developed web applications for many clients using HTML5, CSS3, JavaScript, React, Node, Spring, etc</li>
                                    <li>Worked with React Router for developing SPAs</li>
                                    <li>Involved in creating MongoDB collections documents and developing Mongoose</li>
                                    <li>Used Jasmine and Karma as end to end testing tools for debugging and software quality assurance</li>
                                </ul>
                            </div>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' />  Jul 2018 - Present</p>
                        </div>
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-2/3 mx-auto my-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3 className="title text-xl font-bold py-4 ">Project Manager & Senior Software Engineer - Gordon Food Service </h3>
                            <div className='overview'>
                                <strong> Stack: Angular, Docker, GCP, Java 11, Kubernetes(K8), Spring Boot</strong>
                                <p>  Technology Project Manager maintains vendor relationships and manages the various technology facets
                                    for store construction projects. I developed a streamlined RFP process for significant
                                    projects utilizing the power of shared Google tools. We have 21 store remodels and 2 new stores actively
                                    under construction.</p>
                            </div>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' />  Nov 2018 – Jul 2022</p>
                        </div>
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-2/3 mx-auto my-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3 className="title text-xl font-bold py-4 ">Senior Software Engineer - Travelport </h3>
                            <div className='overview'>
                                <strong> Stack: React, Node, Nest.js, Java Spring, AWS, Tomcat, Swagger, Active MQ, etc</strong>
                                <ul>
                                    <li>Developed and Maintained interactive and dynamic web pages with cross browser compatibility using
                                        hand coded semantic HTML, CSS, JavaScript, React and Bootstrap.</li>
                                    <li>Server instances on AWS, Tomcat, Swagger were installed and used for deploying Microservices.</li>
                                    <li>Developed messaging module using Spring JMS, Apache Camel and Active MQ and other services were
                                        built using Nest.js, and Spring</li>
                                </ul>
                            </div>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' />  Jan 2017 - Nov 2018</p>
                        </div>
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-2/3 mx-auto my-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3 className="title text-xl font-bold py-4 ">Software Engineer - IndiaNIC Infotech Limited  </h3>
                            <div className='overview'>
                                <strong> Stack: React, Ajax Hibernate, Javascript, Java Spring, React, Node, Jenkins, Docker, Microservices, etc</strong>
                                <ul>
                                    <li>Using Node.js, React.js, Angular to create maintainable single page applications, backed by RESTful web
                                        services</li>
                                    <li>Mentoring other engineers in unit testing and simplifying software architecture</li>

                                </ul>
                            </div>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' />   Aug 2014 – Jan 2017</p>
                        </div>
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-2/3 mx-auto my-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3 className="title text-xl font-bold py-4 ">Software Developer - Amway   </h3>
                            <div className='overview'>
                                <strong>  Stack: HTML, CSS, JavaScript, AngularJS, Spring MVC, SQL, JDBC, Junit, etc</strong>
                                <ul>
                                    <li>Implemented a startup company's expenses management app using AgularJS and Spring</li>
                                    <li>Developed an online-learning educational app for high schools</li>
                                    <li>Assisted FE and BE engineers in developing common utilities</li>
                                </ul>
                            </div>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' />   Sep 2012- Jun 2014</p>
                        </div>
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-2/3 mx-auto my-4" data-aos="fade-up"
                            data-aos-duration="3000">
                            <h3 className="title text-xl font-bold py-4 "> Telecommunications Specialist - Gordon Food Service    </h3>
                            <div className='overview'>

                                <p>Unified Communications Administrator. I maintain phone systems for more than 175 stores. I am
                                    spearheading the 2022 initiative to bring all stores into compliance with the E911 laws.</p>
                            </div>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' />     Jul 2000 - Aug 2010</p>
                        </div>
                    </div>
                    :

                    <div className="education text-left shadow p-2 rounded my-4 md:w-1/2 mx-auto" data-aos="fade-up"
                        data-aos-duration="3000">
                        <h3 className="title text-xl font-bold py-4 ">Calvin University</h3>
                        <p className='overview'>Master's degree, Computer science</p>
                        <p className='py-2'><FontAwesomeIcon icon="fa-school" className='px-2' />  2008-2012</p>
                    </div>
            }







        </div>
    );
};

export default Experience;