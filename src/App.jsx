import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { Toaster } from "@/components/ui/sonner";
import Profile from "./components/Profile/profile";
import { ProfileProvider } from "./context/ProfileContext";
import EditProfile from "./components/Profile/EditProfile";
import BuildPage from "./components/pages/build";
import TemplatesPage from "./components/pages/Templates";
import { ChatBot } from "./components/chatbot";
import AboutUs from "./components/pages/AboutUs";

import BackgroundLines from "@/components/ui/background-paths";
import HeroHighlightDemo from "./components/pages/Hero";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-custom-gradient text-gray-100`}
      >
        <BackgroundLines />

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Toaster closeButton />

        <ProfileProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {isLoaded && <HeroHighlightDemo />}
                  <Home />
                </>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/build/:templateId" element={<BuildPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </ProfileProvider>
        <ChatBot />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
