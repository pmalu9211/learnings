import axios from "axios";
import { setTimeout } from "timers";

interface user {
  name: string;
  number: string;
}

async function getUserDetails() {
  try {
    await new Promise((resolve) => setTimeout(() => resolve(null), 3000));
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  console.log("started");
  const userData = await getUserDetails();
  console.log("fetched");
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
