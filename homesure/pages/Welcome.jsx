import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">

        {/* Illustration */}
        <div className="flex justify-center mb-10">
          <Users size={96} className="text-blue-600" />
        </div>

        {/* Create Account Button */}
        <Link
          to="/signup"
          className="block w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm
                     hover:bg-blue-700 transition"
        >
          Create Account
        </Link>

        {/* Login Link */}
        <p className="text-sm text-gray-600 mt-4">
          If you already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Welcome;
