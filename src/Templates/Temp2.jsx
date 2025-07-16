import { Arrow } from "@radix-ui/react-select";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { forwardRef } from "react";

const ResumeTemplate = forwardRef((props, ref) => {
  const { personal, experience, education, skills } = props;

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-50 p-4 md:p-8 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl bg-white rounded shadow-md overflow-hidden print:shadow-none">
        {/* Resume Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-200">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800">
                {personal.firstName} {personal.lastName}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {personal.profession}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{personal.address}</span>
              </div>
            </div>
          </div>

          {/* Other Resume Sections */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Professional Summary
            </h2>
            <p className="text-gray-600 text-sm">{personal.summary}</p>
          </div>

          {/* Experience Section */}
          {experience.newExpData?.experienceItems?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Experience
              </h2>
              <ul>
                {experience.newExpData.experienceItems.map((exp, index) => (
                  <li key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {exp.position}
                        </h3>
                        <p className="text-gray-600 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 pl-1">
                      {exp.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Education Section */}
          {education.educationItems?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Education
              </h2>
              <ul className="space-y-3">
                {education.educationItems.map((ed, index) => (
                  <li key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {ed.degree}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {ed.institution}
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {ed.startDate} - {ed.endDate}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {ed.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {skills.data?.skills?.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Skills
              </h2>
              <ul className="flex flex-wrap gap-2">
                {skills.data.certifications.map((certificate, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {certificate.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default ResumeTemplate;
