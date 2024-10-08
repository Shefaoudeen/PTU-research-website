import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ResAreas from "./Pages/ResAreas";
import Supervisors1 from "./Pages/Supervisors1";
import ResGrants from "./Pages/ResGrants";
import Scholars from "./Pages/Scholars";
import Policy from "./Pages/Policy";
import Fees from "./Pages/Fees";
import Journals from "./Pages/Journals";
import Download from "./Pages/Download";
import Contact from "./Pages/Contact";
import Plagiarism from "./Pages/Plagiarism";
import Civil from "./Pages/Dept-ResearchArea/Civil";
import Mech from "./Pages/Dept-ResearchArea/Mech";
import Chemistry from "./Pages/Dept-ResearchArea/Chemistry";
import Chem from "./Pages/Dept-ResearchArea/Chem";
import CSE from "./Pages/Dept-ResearchArea/CSE";
import ECE from "./Pages/Dept-ResearchArea/ECE";
import Phy from "./Pages/Dept-ResearchArea/Phy";
import EIE from "./Pages/Dept-ResearchArea/EIE";
import InfoTech from "./Pages/Dept-ResearchArea/InfoTech";
import Mathematics from "./Pages/Dept-ResearchArea/Mathematics";
import EEE from "./Pages/Dept-ResearchArea/EEE";
import ScrollToTop from "./Layout/ScrollToTop";
import PageNotFound from "./Pages/PageNotFound";
import Credits from "./Pages/Credits";
import Project1 from "./Pages/Projects1";
import Cms from "./CMS/Cms";
import Notice from "./CMS/Notice";
import CreateNotice from "./CMS/CreateNotice";
import EditNotice from "./CMS/EditNotice";
import Admission from "./Pages/Admission";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/researchAreas">
            <Route index element={<ResAreas />} />
            <Route path="civil" element={<Civil />} />
            <Route path="mech" element={<Mech />} />
            <Route path="chemistry" element={<Chemistry />} />
            <Route path="chem" element={<Chem />} />
            <Route path="cse" element={<CSE />} />
            <Route path="eee" element={<EEE />} />
            <Route path="ece" element={<ECE />} />
            <Route path="eie" element={<EIE />} />
            <Route path="it" element={<InfoTech />} />
            <Route path="math" element={<Mathematics />} />
            <Route path="phy" element={<Phy />} />
          </Route>
          <Route path="/supervisors" element={<Supervisors1 />} />
          <Route path="/researchGrants" element={<ResGrants />} />
          <Route path="/scholarsCentre" element={<Scholars />} />
          <Route path="/projects" element={<Project1 />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/plagiarism" element={<Plagiarism />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/cms">
            <Route index element={<Cms />} />
            <Route path="notice" element={<Notice />} />
            <Route path="notice/add" element={<CreateNotice />} />
            <Route path="notice/edit/:id" element={<EditNotice />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
