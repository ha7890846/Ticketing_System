import { Route, BrowserRouter, Routes } from "react-router-dom";
// import "./app.css";
import Dashboard from "./Compo/Dashboard";
import Homepage from "./Compo/Homepage";
import AllTicket from "./Compo/AllTicket";
import SignIn from "./Compo/SignIn";
import Footer from "./Compo/Footer";
import Header from "./Compo/Header";
import SignUp from "./Compo/SignUp";
import AddTeamMember from "./Compo/AddTeamMember";
import ResolvedTicket from "./Compo/ResolvedTicket";
import UnResolvedTicket from "./Compo/UnResolvedTicket";
import Team from "./Compo/Team";
import Analytics from "./Compo/Analytics";
import Sidebar from "./Compo/Sidebar";
import Settings from "./Compo/Settings";
import ContactCenter from "./Compo/ContactCenter";
import SidebarLayout from "./Compo/SidebarLayout";
function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-ticket" element={<AllTicket />} />
        <Route path="/resolved-ticket" element={<ResolvedTicket />} />
        <Route path="/unresolved-ticket" element={<UnResolvedTicket />} />
        <Route path="/team" element={<Team />} />
        <Route path="/add-member" element={<AddTeamMember />} />
        <Route path="/settings" element={<Settings />} />
      </Routes> */}
      <Routes>
        {/* Homepage Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Sidebar Layout Routes */}
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactCenter />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* <Route path="/chatbot" element={<Chatbot />} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
