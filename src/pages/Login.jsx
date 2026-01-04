import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
