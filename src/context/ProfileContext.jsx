import { createContext, useContext, useState } from "react";
import profileImage from "/profile.jpg";

//   Create the Context
const ProfileContext = createContext();

//   Create the Provider to wrap your app
export const ProfileProvider = ({ children }) => {
  // Global state for profile
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "Software Developer",
    image: profileImage,
  });

  //Function to update profile
  const updateProfile = (newProfile) => {
    setProfile((prev) => ({ ...prev, ...newProfile }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom Hook to use the context easily
export const useProfile = () => {
  return useContext(ProfileContext);
};
