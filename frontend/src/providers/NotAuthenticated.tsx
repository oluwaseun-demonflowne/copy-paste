import { Outlet, useNavigate } from "react-router";
import { useSession } from "../lib/auth-client";

const NotAuthenticated = () => {
  const navigate = useNavigate();
  const { data, isPending } = useSession();
  if (isPending) {
    return <p>loading....</p>;
  }
  if (data?.user !== null) {
    navigate("/", { replace: true });
  }
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default NotAuthenticated;
