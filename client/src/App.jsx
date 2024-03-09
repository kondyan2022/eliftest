import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
