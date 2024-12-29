import { Outlet, useNavigate } from "react-router";
import { useSession } from "../lib/auth-client";

const Authenticated = () => {
  const navigate = useNavigate();
  const { data, isPending } = useSession();
  if (isPending) {
    return <p>loading....</p>;
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
