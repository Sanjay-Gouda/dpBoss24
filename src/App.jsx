import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectOptionPage from "./components/SelectOption";
import Login from "./components/Login";
import PrivateRouets from "./components/Private/privateRouets";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouets />}>
          <Route path="/admin" element={<SelectOptionPage />} />
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
      {/* <Login /> */}
    </>
  );
}

export default App;
