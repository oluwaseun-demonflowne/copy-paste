import { useSession } from "../lib/auth-client";

const Main = () => {
  const { data } = useSession();
  return (
    <div>
      <img
        src={data!.user!.image!}
        alt="user image"
        style={{ width: "70px", borderRadius: "50%" }}
      />
      <h3>{data?.user.email}</h3>

      <input
        style={{
          outline: "none",
          height: "40px",
          fontSize: "16px",
          width: "290px"
        }}
      />
    </div>
  );
};

export default Main;
