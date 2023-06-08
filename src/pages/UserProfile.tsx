import { useAuthContext } from "../context/AuthContext";

const UserProfile = () => {
  let { userInfo } = useAuthContext();
  console.log(userInfo);

  return (
    <div className="bg-white border w-[90%] sm:w-1/3 h-40 mx-auto shadow-sm mt-24 rounded-md py-7 px-10 flex flex-col items-center gap-6">
      <h1 className="text-3xl text-semibold ">User Profile</h1>

      <p className="">
        <span className="text-lg font-semibold ">Email: </span>
        <span className="text-gray-500">{JSON.parse(userInfo)?.email}</span>
      </p>
    </div>
  );
};

export default UserProfile;
