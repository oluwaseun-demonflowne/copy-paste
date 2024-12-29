// import { createAuthClient } from "better-auth/react";

import { useSession } from "../lib/auth-client";



// import { authClient } from "../lib/auth-client";

const Main = () => {
  // const session = await authClient.getSession()
  
  // const { useSession } = authClient();
  const {
    data
    // isPending, //loading state
    // error //error object
  } = useSession();
  console.log(data?.user);
  return <div>main page</div>;
};

export default Main;
