import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-start pt-[50px]">
      <div className="w-[300px] h-[330px] py-[10px] px-4 flex flex-col justify-center rounded-2xl bg-white" style={{ boxShadow:"0 -10px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.1)", }}>
        <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200" > 
            Submit
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <button onClick={() => navigate("/")} className="text-gray-500 text-sm hover:underline"> Go home </button>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={() => navigate(-1)} className="text-gray-500 text-sm hover:underline"> Go back </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
