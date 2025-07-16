import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "sonner";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast("Sign-out successful!");
    } catch (error) {
      console.error("Error signing out:", error);
      toast(error.message);
    }
  };
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 w-full z-40 bg-gray-200 backdrop-blur-lg border-b border-white/10 shadow-xl">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-15">
          <div className="font-mono text-xl font-bold text-gray-800">
            <img
              src="/openart-image_iaU5tqF4_1743225684481_raw_copy-removebg-preview.png"
              className="rounded-full w-16 h-16 bg-transparent"
              alt="Logo"
            />
          </div>
          <div className="flex items-center md:hidden space-x-4">
            {!user && (
              <>
                <button className="px-4 py-2 border-2 border-[#489af2] text-gray-800 rounded-lg hover:bg-[#489af2] hover:text-white transition">
                  Sign In
                </button>
                <button className="px-4 py-2 bg-[#489af2] text-white rounded-lg hover:bg-[#99c0f9] transition shadow-2xl">
                  Sign Up
                </button>
              </>
            )}
            <div
              className="w-7 h-7 relative cursor-pointer text-gray-800 text-xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg"
            >
              Home
            </Link>
            <Link
              to={!user ? "/signin" : "/templates"}
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg"
            >
              Templates
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg "
            >
              About Us
            </Link>
            {!user ? (
              <>
                <Link to="/signin">
                  <button className="px-3 py-2 bg-[#489af2] text-white rounded-xl hover:scale-105 transition-transform duration-300">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-4 py-2 border-2 border-[#489af2] text-[#489af2] rounded-xl hover:bg-[#489af2] hover:text-white transition duration-300">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-gray-700 font-bold text-lg">👤</span>
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-100 shadow-xl rounded-lg overflow-hidden">
                    <ul className="py-2 text-gray-800">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => setProfileMenuOpen(false)}
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          className="w-full text-left block px-4 py-2 hover:bg-gray-200"
                          onClick={handleSignOut}
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
