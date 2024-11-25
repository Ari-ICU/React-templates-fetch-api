import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jimmy Doe",
      role: "Farmer",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
      bgClass: "team-bg-1",
    },
    {
      name: "Marry Doe",
      role: "Farmer",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
      bgClass: "team-bg-2",
    },
    {
      name: "Simon Joe",
      role: "Farmer",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
      bgClass: "team-bg-3",
    },
  ];

  return (
    <div className="mt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                Our <span className="orange-text">Team</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, fuga quas itaque eveniet beatae optio.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 ${index === 2 ? "offset-md-3 offset-lg-0" : ""}`}
            >
              <div className="single-team-item">
                <div className={`team-bg ${member.bgClass}`}></div>
                <h4>
                  {member.name} <span>{member.role}</span>
                </h4>
                <ul className="social-link-team">
                  <li>
                    <Link to={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
