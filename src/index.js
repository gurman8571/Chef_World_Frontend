import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Components/Layout";
import Home from "../src/Pages/Home";
import Feed from '../src/Pages/Feed'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route  path="/"  element={<Home />} />
        <Route  path="/feed"  element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);