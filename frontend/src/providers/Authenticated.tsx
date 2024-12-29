import { Outlet, useNavigate } from "react-router";
import { useSession } from "../lib/auth-client";
import { useEffect } from "react";

const Authenticated = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = useSession();
  console.log(data)
  useEffect(() => {
    if (error) {
      navigate("/login");
    }
    if (data === null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isPending, error]);
  // console.log(error, isPending);
  if (isPending) {
    return <p>loading....</p>;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Authenticated;
