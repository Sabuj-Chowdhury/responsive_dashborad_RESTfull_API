import SocialLogin from "../components/SocialLogin";

const Login = () => {
  return (
    // outer container
    <section className="min-h-screen flex items-center justify-center bg-teal-700">
      {/* card container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-4">
          Welcome Back
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Please sign in to continue
        </p>

        {/* Social Login */}
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Login;
