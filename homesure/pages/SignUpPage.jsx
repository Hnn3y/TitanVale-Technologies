import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, CheckCircle } from "lucide-react";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signup logic here
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 text-grey-500">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">Homesure</span>
            </div>

            {/* Icons */}
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mb-6 text-blue-700">Sign up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full name */}
          <div>
            <label className="text-sm font-medium text-gray-400">
              Full name <span className="text-red-500 text-gray-400">*</span>
            </label>
            <div className="relative mt-1 text-gray-400">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
              <input
                type="text"
                required
                placeholder="Jay Jay"
                className="text-gray-700 w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
              <input
                type="email"
                required
                placeholder="jayjay@gmail.com"
                className="text-gray-700 w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password <span className="text-red-500 text-gray-400">*</span>
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
              <input
                type="password"
                required
                placeholder="********"
                className="text-gray-700 w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <p className="text-xs text-blue-600 mt-1 ">
              Password length should not be less than 8 characters. Must have a mix of capital
              and small letters, symbols, and numbers.
            </p>
          </div>

          {/* Confirm password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm password <span className="text-red-500 text-gray-400">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Re-enter your password text-gray-400"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="rounded-full py-1 px-1 w-full bg-blue-500 text-white font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
