import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "./Loading";
import { notifyError, notifySuccess } from "./toast/toast";

function App() {
  return (
    <div>
      <div>hello</div>
      <button onClick={() => notifySuccess("hehoif fhsod foihf llo")}>
        Notify!
      </button>
      <ToastContainer />
      <div>main</div>
    </div>
  );
}

export default App;
