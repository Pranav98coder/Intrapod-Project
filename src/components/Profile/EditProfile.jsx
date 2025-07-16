"use client";

import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { Link, useNavigate } from "react-router";
import { db, setDoc, doc, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EditProfile = () => {
  const { profile, updateProfile } = useProfile();
  const [user] = useAuthState(auth); // Get logged-in user
  const [localEmail, setLocalEmail] = useState(profile.email);
  const [localName, setLocalName] = useState(profile.name);
  const [localPhone, setLocalPhone] = useState(profile.phone);
  const [localOccupation, setLocalOccupation] = useState(profile.occupation);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const Navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return toast("You must be logged in!");

    setIsSubmitting(true);

    const newProfile = {
      email: localEmail,
      name: localName,
      phone: localPhone,
      occupation: localOccupation,
    };

    try {
      await setDoc(doc(db, "users", user.uid), newProfile);
      updateProfile(newProfile); // Update local state
      toast("Profile updated successfully!");
      Navigate("/profile"); // Redirect to profile page
    } catch (error) {
      console.error("Error updating profile: ", error);
      toast("Failed to update profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const formFields = [
    {
      label: "Name",
      type: "text",
      value: localName,
      onChange: (e) => setLocalName(e.target.value),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Email",
      type: "email",
      value: localEmail,
      onChange: (e) => setLocalEmail(e.target.value),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      type: "number",
      value: localPhone,
      onChange: (e) => setLocalPhone(e.target.value),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#E6F4FF] to-[#F8FBFF] py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/profile"
            className="inline-flex items-center text-[#1961c5] mb-6 group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              className="flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 transition-transform group-hover:translate-x-[-3px]"
              >
                <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z" />
              </svg>
              <span className="text-sm font-medium">Back to Profile</span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="h-10 w-2 bg-gradient-to-b from-[#1A91F0] to-[#0D47A1] rounded-full"></div>
            <h1 className="text-3xl font-bold text-[#1A91F0]">Edit Profile</h1>
          </div>
          <p className="text-gray-500 mt-2 ml-5">
            Update your personal information
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="border-none shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#1A91F0]/10 to-[#1A91F0]/5 pb-6">
              <CardTitle className="text-[#1A91F0] flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Form Fields */}
                  {formFields.map((field) => (
                    <motion.div
                      key={field.label}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-[#1A91F0]">{field.icon}</div>
                        <Label
                          htmlFor={field.label.toLowerCase()}
                          className="text-gray-700 font-medium"
                        >
                          {field.label}
                        </Label>
                      </div>
                      <div className="relative">
                        <Input
                          id={field.label.toLowerCase()}
                          type={field.type}
                          value={field.value}
                          onChange={field.onChange}
                          className="border-gray-300 focus:border-[#1A91F0] focus:ring-[#1A91F0]/20 transition-all duration-300 pl-3"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1A91F0] to-[#92ceff] w-0"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Occupation Select */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-[#1A91F0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                          />
                          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                      </div>
                      <Label
                        htmlFor="occupation"
                        className="text-gray-700 font-medium"
                      >
                        Occupation
                      </Label>
                    </div>
                    <Select
                      value={localOccupation}
                      onValueChange={setLocalOccupation}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#1A91F0] focus:ring-[#1A91F0]/20 transition-all duration-300">
                        <SelectValue placeholder="Select your occupation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Software Developer">
                          Software Developer
                        </SelectItem>
                        <SelectItem value="Web Developer">
                          Web Developer
                        </SelectItem>
                        <SelectItem value="Data Scientist">
                          Data Scientist
                        </SelectItem>
                        <SelectItem value="Designer">Designer</SelectItem>
                        <SelectItem value="Project Manager">
                          Project Manager
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="flex justify-end gap-4 pt-6"
                  >
                    <Link to="/profile">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-[#1A91F0] text-[#1A91F0] hover:bg-[#1A91F0]/10"
                      >
                        <motion.span
                          whileHover={{ x: -3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Cancel
                        </motion.span>
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#1A91F0] to-[#0D47A1] hover:from-[#0D47A1] hover:to-[#1A91F0] text-white transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ gap: 3 }}
                        >
                          <span>Update Profile</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default EditProfile;
