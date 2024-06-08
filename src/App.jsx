import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ResAreas from "./Pages/ResAreas";
import Supervisors from "./Pages/Supervisors";
import ResGrants from "./Pages/ResGrants";
import Scholars from "./Pages/Scholars";
import Policy from "./Pages/Policy";
import Fees from "./Pages/Fees";
import Journals from "./Pages/Journals";
import Download from "./Pages/Download";
import Contact from "./Pages/Contact";
import Plagiarism from "./Pages/Plagiarism";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/researchAreas" element={<ResAreas />}></Route>
          <Route path="/supervisors" element={<Supervisors />} />
          <Route path="/researchGrants" element={<ResGrants />} />
          <Route path="/scholarsCentre" element={<Scholars />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/plagiarism" element={<Plagiarism />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/contactUs" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
