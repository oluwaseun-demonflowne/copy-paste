import { createAuthClient } from "better-auth/client";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const authClient = createAuthClient();
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      fetchOptions: {
        baseURL:
          process.env.NODE_ENV === "production"
            ? "https://copy-paste-8sxg.onrender.com/api/auth"
            : "http://localhost:5001/api/auth",
        onError: (error) => {
          console.log("error hahah");
          console.log(error.error);
        }
      }
    });
    console.log(data);
  };
  return (
    <div>
      <h1>Welcome to copy pasta</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={async () => await signIn()}>
          <FcGoogle />
          Log in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
