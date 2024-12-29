import { Outlet, useNavigate } from "react-router";
import { useSession } from "../lib/auth-client";
import { useEffect } from "react";

const NotAuthenticated = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = useSession();
  useEffect(() => {
    if (data?.user !== undefined) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isPending, error]);
  if (isPending) {
    return <p>loading....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default NotAuthenticated;
