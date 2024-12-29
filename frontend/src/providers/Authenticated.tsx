import { Outlet, useNavigate } from "react-router";
import { useSession } from "../lib/auth-client";

const Authenticated = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = useSession();
  console.log(error, isPending);
  if (isPending) {
    return <p>loading....</p>;
  }
  if (error) {
    navigate("/login");
  }
  if (data?.user == null) {
    navigate("/login");
  }
  
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Authenticated;
