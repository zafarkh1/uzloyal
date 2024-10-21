import React from 'react';
import { useTranslation } from 'react-i18next';
import Appointment from './Appointment';

const AttorneyDetails = () => {
  const { t } = useTranslation(); // Correct hook for translations

  return (
    <div className="attorney-pg-area section-padding mt-16 lg:mt-64">
      <div className="container">
        <div className="attorney-single-wrap">
          <div className="attorney-info-wrap">
            <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4">
              {/* Attorney image section */}
              <div className="w-full lg:w-5/12">
                <div className="attorney-info-img">
                  <img
                    src="/assets/certificates/expert.jfif"
                    alt="Robert Fox"
                    className="w-full h-auto rounded-lg shadow-md" // Added rounded corners and shadow
                  />
                </div>
              </div>

              {/* Attorney details section */}
              <div className="w-full lg:w-7/12">
                <div className="attorney-info-text">
                  <h2 className="text-2xl font-bold mb-2">Robert Fox</h2>
                  <ul className="mt-4 space-y-1"> {/* Added space between list items */}
                    <li>
                      {t('Position')}: <span className="font-medium">Family Lawyer</span>
                    </li>
                    <li>
                      {t('Experience')}: <span className="font-medium">12 Years</span>
                    </li>
                    <li>
                      {t('Address')}: <span className="font-medium">6391 Elgin St. Celina, Delaware 10299</span>
                    </li>
                    <li>
                      {t('Phone')}: <span className="font-medium">+00 568 746 987</span>
                    </li>
                    <li>
                      {t('Email')}: <span className="font-medium">youremail@gmail.com</span>
                    </li>
                  </ul>

                  {/* Certificates */}
                  <div className="certificates-wrap mt-8">
                    <h2 className="text-xl font-bold mb-4">{t('certificates')}</h2>
                    <div className="certificates-items flex flex-nowrap mt-4 space-x-4 overflow-x-auto">
                      {/* Certificate items */}
                      {[ 
                        "/assets/certificates/Family-Law-Certificate.jpg",
                        "/assets/certificates/Certificate1.jpg",
                        "/assets/certificates/Certificate_2018-03.jpg",
                        "/assets/certificates/certificate4.webp"
                      ].map((src, index) => (
                        <div className="certificates-item flex-shrink-0" key={index}>
                          <img
                            src={src}
                            alt={`Certificate ${index + 1}`}
                            className="w-40 h-auto rounded-md" // Added rounded corners
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Component */}
            <div className="attorney-experience-area attorney-widget mt-12">
              <div className="flex flex-wrap">
                {/* Personal Experience Section */}
                <div className="w-full lg:w-1/2 p-4">
                  <div className="experience-wrap">
                    <h2 className="text-xl font-bold">Personal Experience</h2>
                    <p className="mt-2">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                    </p>
                    <p className="mt-2">
                      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                    </p>
                    {/* Experience Bar */}
                    <div className="experience-bar mt-4">
                      <div className="progress bg-gray-200 rounded">
                        <div
                          className="progress-bar bg-[#cdb091] rounded"
                          role="progressbar"
                          style={{ width: '100%' }} // Assuming 12 years out of 12
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="w-full lg:w-1/2 p-4">
                  <div className="education-area">
                    <h2 className="text-xl font-bold">Education</h2>
                    <ul className="mt-2 list-disc list-inside">
                      <li>Academy University School of Law, Boston, MA</li>
                      <li>Admization Institute of Law and Technology, Juzment School of Management, Cambridge</li>
                      <li>The Syntify High School Of New York</li>
                      <li>Education & Court Admissions</li>
                      <li>Admization Institute of Law and Technology, Juzment School of Management, Cambridge</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="skills-area">
                <div className="flex flex-wrap">
                  {/* Skills Section */}
                  <div className="w-full lg:w-1/2 p-4">
                    <div className="experience-wrap h-full flex flex-col">
                      <h2 className="text-xl font-bold">Skills</h2>
                      <div className="wpo-skill-section mt-4 flex-grow">
                        {[
                          { title: 'Business Law', percentage: 85 },
                          { title: 'Family Law', percentage: 80 },
                          { title: 'Personal Injury', percentage: 95 },
                          { title: 'Criminal Law', percentage: 70 },
                        ].map((skill) => (
                          <div className="wpo-progress-single mb-4" key={skill.title}>
                            <h5 className="progress-title">{skill.title}</h5>
                            <div className="progress bg-gray-200 rounded">
                              <div
                                className="progress-bar bg-[#cdb091] rounded"
                                role="progressbar"
                                style={{ width: `${skill.percentage}%` }}
                              ></div>
                            </div>
                            <span className="progress-number ml-2">{skill.percentage}%</span>
                            {/* Bold Line with Percentage */}
                            <div className="mt-1 relative">
                              <div
                                className="bg-[#cdb091] h-2 rounded"
                                style={{ width: `${skill.percentage}%` }}
                              ></div>
                              <span className="absolute left-1/2 transform -translate-x-1/2 top-[-22px] font-medium text-white">
                                {skill.percentage}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="w-full lg:w-1/2 p-4 mb-0">
                    <div className="education-area ex-widget h-full flex flex-col">
                      <h2 className="text-xl font-bold">Achievements</h2>
                      <ul className="mt-6 list-inside achievement-list flex-grow">
                        <li className="mb-6">Best Lawyer award 2017</li>
                        <li className="mb-6">Special awards for Family law activity 2018</li>
                        <li className="mb-6">Won 100 cases in 2018</li>
                        <li className="mb-6">Super Lawyers’ Top 50 Lawyers in USA</li>
                        <li className="mb-6">Young Star Award at criminal law in 2021</li>
                        <li>Greatest Lawyer Top 10</li>
                      </ul>
                        
                    </div>
                  </div>
             
                </div>
              </div>
            
                 {/* SendMessages Component */}
            <div className="send-message-wrap"> 
              <Appointment />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyDetails;
