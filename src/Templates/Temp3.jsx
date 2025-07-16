import React from "react";
import { forwardRef } from "react";
const Student = forwardRef((props, ref) => {
  const { personal, experience, education, skills } = props;

  console.log("personal data reaches temp3", personal);
  console.log("education data reaches temp3", education);
  console.log("exp data reaches temp3", experience);
  console.log("skills data reaches temp3", skills);

  return (
    <div ref={ref}>
      <div className="bg-white text-gray-800 p-12 space-y-8 leading-relaxed">
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-2xl">
              {personal.firstName} {personal.lastName}
            </p>
            <p>{personal.email}</p>
            <p>{personal.phone}</p>
            <p>{personal.address}</p>
          </div>
        </div>

        <hr className="border-2 border-gray-800" />

        <div>
          <h2 className="font-bold text-xl">Profile</h2>
          <p>{personal.summary}</p>
        </div>

        {experience.newExpData &&
          experience.newExpData.experienceItems.length > 0 && (
            <div>
              <h2 className="font-bold text-xl">Work Experience</h2>
              <ul className="list-disc">
                {experience.newExpData.experienceItems.map((exp, index) => (
                  <li key={index} className="mt-2">
                    <strong>
                      {exp.position} at {exp.company}
                    </strong>
                    <br />
                    <span className="text-gray-600">
                      {"("}
                      {exp.startDate} to {exp.endDate}
                      {")"}
                    </span>
                    <p>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {education.educationItems && education.educationItems.length > 0 && (
          <div>
            <h2 className="font-bold text-xl">Education</h2>
            <ul className="list-disc">
              {education.educationItems.map((ed, index) => (
                <li key={index} className="mt-2">
                  <strong>{ed.degree}</strong> in {ed.fieldOfStudy} at{" "}
                  {ed.school} <br />
                  <span className="text-gray-600">
                    {"("}
                    {ed.startDate} - {ed.endDate}
                    {")"}
                  </span>{" "}
                  <br />
                  <span className="text-gray-600">{ed.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {skills.data && skills.data.skills.length > 0 && (
          <div>
            <h2 className="font-bold text-xl">Skills</h2>
            <ul className="list-disc">
              {skills.data.skills.map((skill, index) => (
                <li key={index} className="mt-2">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {skills.data && skills.data.certifications.length > 0 && (
          <div>
            <h2 className="font-bold text-xl">Certificates</h2>
            <ul className="list-disc">
              {skills.data.certifications.map((certificate, index) => (
                <li key={index} className="mt-2">
                  {certificate.name} from {certificate.issuer} on{" "}
                  {certificate.date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

export default Student;
