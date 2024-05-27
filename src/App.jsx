import Home from "./pages/Home";
import AdminForm from "./pages/AdminForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
