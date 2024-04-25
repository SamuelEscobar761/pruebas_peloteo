import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import { ActivityPage } from "./pages/ActivityPage";

function App() {
  return (
    <>
      <Login/>
      <Register />
      <Main/>
      <ActivityPage/>
    </>
  );
}

export default App;
