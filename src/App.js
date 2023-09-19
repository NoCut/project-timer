import { Routes, Route } from "react-router-dom";
import Header from "./app/components/header";
import Main from "./app/layouts/main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        
      </Routes>
    </>
  );
}

export default App;
