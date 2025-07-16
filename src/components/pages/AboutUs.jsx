import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const teamMembers = [
    { name: "Ashutosh Mishra", role: "Webwiz" },
    { name: "Sunista Agarwal", role: "Webwiz" },
    { name: "Sams Tabrez", role: "Webwiz" },
    { name: "Chitrangi Kaiswal", role: "Webwiz" },
    { name: "Pranav Silla", role: "Webwiz" },
    { name: "Jayesh Saddafal", role: "Webwiz" },
  ];

  const ourApproach = [
    {
      approach: "Understanding Your Vision",
      quote:
        "We begin by collaborating closely with you to understand your goals, requirements, and preferences. This helps us align our development process with your vision.",
    },
    {
      approach: "Strategic Planning & Design",
      quote:
        "Our team creates a clear roadmap and wireframes, ensuring a structured and organized development process. We focus on both functionality and aesthetics.",
    },
    {
      approach: "Agile Development & Iteration",
      quote:
        "We follow an iterative development process, implementing feedback and making continuous improvements to deliver a refined and effective solution.",
    },
    {
      approach: "Quality Assurance & Delivery",
      quote:
        "We conduct thorough testing and optimization to ensure the final product meets the highest standards of performance, usability, and reliability.",
    },
  ];

  return (
    <main className="z-5 relative">
      <motion.div
        className="min-h-screen "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="z-100 container mx-auto px-4 py-16">
          {/* Header Section */}
          <motion.div
            className="mb-16 text-center"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
            <motion.div
              className="h-1 w-20 bg-blue-600 mx-auto"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="max-w-4xl mx-auto mb-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a team of <strong>passionate students</strong> from{" "}
                <strong>NIT Rourkela</strong>, driven by a shared enthusiasm for{" "}
                <strong>web development</strong> and{" "}
                <strong>cutting-edge technology</strong>.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                With a perfect blend of <strong>creativity</strong> and{" "}
                <strong>technical expertise</strong>, we strive to bring your
                ideas to life by creating <strong>visually stunning</strong> and{" "}
                <strong>performance-optimized digital solutions</strong>.
              </p>
            </div>

            {/* Our Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Approach
              </h2>

              <div className="space-y-6">
                {ourApproach.map((e, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-black flex items-start hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <span className="text-xl">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {e.approach}
                      </h3>
                      <p className="text-gray-600">{e.quote}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Members Section */}
          <div>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-600">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Ready to work with us?
            </motion.h2>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutUs;
