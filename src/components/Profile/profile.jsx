import { useEffect, useState } from "react";
import { db, getDoc, doc, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import backgroundImage from "/background.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, "users", user.uid));
        if (profileDoc.exists()) {
          setProfile(profileDoc.data());
        }
      } catch (error) {
        console.error("Error fetching profile: ", error);
      }
    };

    fetchProfile();
  }, [user]);

  const profileItems = [
    {
      label: "Name",
      value: profile?.name || "User",
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
      label: "Phone",
      value: profile?.phone ? `+91 ${profile.phone}` : "N/A",
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
    {
      label: "Email",
      value: profile?.email || "N/A",
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
      label: "Occupation",
      value: profile?.occupation || "N/A",
      icon: (
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
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  return (
    <div className="z-5 relative w-full min-h-screen bg-gradient-to-b from-[#E6F4FF] to-[#F8FBFF]">
      {/* Header Section with gradient overlay */}
      <motion.div
        className="w-full bg-cover bg-center py-8 flex flex-col items-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1961c5]/80 to-[#0D47A1]/90"></div>

        {/* Back Button */}
        <div className="w-full max-w-4xl flex items-center justify-start px-6 z-10">
          <Link to="/" className="text-white">
            <motion.div
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z" />
              </svg>
              <span className="text-sm font-medium">Back</span>
            </motion.div>
          </Link>
        </div>

        {/* Profile Image with animated border */}
        <div className="relative z-10 mt-4">
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: 1,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
          >
            <img
              src={profile?.image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <motion.div
              className="absolute -bottom-2 -right-2 bg-[#1961c5] text-white rounded-full p-2 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Name */}
        <motion.h1
          className="text-white text-2xl font-bold mt-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {profile?.name || "User"}
        </motion.h1>
      </motion.div>

      {/* Profile Details */}
      <motion.div
        className="max-w-4xl w-full mx-auto px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-[#1961c5] text-xl font-semibold mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Profile Information
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {profileItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(25, 97, 197, 0.1), 0 10px 10px -5px rgba(25, 97, 197, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Card className="overflow-hidden border-none shadow-md bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1961c5] to-[#92ceff] rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-[#1961c5] text-lg font-semibold">
                        {item.value}
                      </h3>
                      <p className="text-sm text-gray-500">{item.label}</p>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-[#1961c5] to-[#92ceff]"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Edit Button */}
      <div className="flex justify-center pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-[#1961c5] to-[#0D47A1] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            variant="outline"
          >
            <Link to="/editProfile">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ gap: 4 }}
              >
                <span>Edit Profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
