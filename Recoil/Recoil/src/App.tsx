import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import { asyncCounter, counter, likes, totalCount } from "./atom";

function App() {
  const [counterVal, setCounterVal] = useRecoilState(counter);

  const totalCountVal: number = useRecoilValue(totalCount);

  const likeVal = useRecoilValue(likes);
  const setLikeVal = useSetRecoilState(likes);

  const asyncCounterVal = useRecoilValueLoadable(asyncCounter);
  console.log(asyncCounterVal.state === "loading");
  return (
    <>
      <div>
        Hello
        <div>{counterVal}</div>
        <div>{likeVal}</div>
        <button onClick={() => setCounterVal((e) => e + 1)}>Increase</button>
        <button onClick={() => setLikeVal((e) => e + 1)}>Increase</button>
        <div>sum of all {totalCountVal}</div>
        {/* <div>The async counter is : {asyncCounterVal}</div> */}
      </div>
    </>
  );
}

export default App;
