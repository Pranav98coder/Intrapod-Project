import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { auth } from "../../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Sign-in successful!");
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error(error.message);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign-in successful!");
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md p-6 shadow-md z-100 text-black">
          <h2 className="text-2xl font-semibold text-center ">
            Login to your account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your email below to login
          </p>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-400 mt-4 border-gray-300"
                />
              </div>
              <div>
                {/* <div className="flex justify-between mb-4">
                                <Label>Password</Label>
                                 <a href="#" className="text-sm text-[#1a91f0]">Forgot your password?</a>
                            </div> */}
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white text-gray-400 border-gray-300"
                />
              </div>
              <Button
                className="w-full bg-[#1a91f0] text-white hover:bg-blue-400"
                type="submit"
              >
                Login
              </Button>

              <div className="flex items-center my-4">
                <hr className="flex-1 border-gray-600" />
                <span className="px-2 text-gray-500">Or continue with</span>
                <hr className="flex-1 border-gray-600" />
              </div>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 border-gray-400 text-black"
                onClick={handleGoogleSignIn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>{" "}
                Login with Google
              </Button>
              <p className="text-center text-gray-400">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-[#1a91f0]">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
