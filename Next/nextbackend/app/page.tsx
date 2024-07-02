import axios from "axios";

interface user {
  name: string;
  number: string;
}

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.number}
        </div>
      </div>
    </div>
  );
}
