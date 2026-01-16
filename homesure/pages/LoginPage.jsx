import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, Settings, Wrench, Users } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: validate + API call
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">

        {/* Logo / Icon cluster */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-blue-600 flex items-center justify-center">
              <Settings className="text-blue-600" />
            </div>

            <div className="absolute -left-6 top-6 bg-blue-600 p-2 rounded-full">
              <Wrench size={16} className="text-white" />
            </div>

            <div className="absolute -right-6 top-6 bg-blue-600 p-2 rounded-full">
              <Users size={16} className="text-white" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-1 text-blue-600">
          Welcome Back 🥹
        </h1>
        <p className="text-sm text-gray-700 text-center mb-6">
          Let’s pick up right where you left off and make today productive.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-800 mb-1 block">
              Email Address *
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-gray-600" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm
                text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover: transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Password *
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full pl-9 pr-9 py-2 border rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full
                       font-medium hover:bg-blue-700 transition"
          >
            Log in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Do not have an account?{" "}
          <Link to="/signup" className="text-blue-700 font-medium hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
