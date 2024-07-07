import { Appbar } from "./components/AppBar";
import ServerComp from "./serverComp";

export default async function Home() {
  return (
    <>
      <ServerComp />
      <Appbar></Appbar>
      <div>Hello</div>;
    </>
  );
}
