import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./pages/landing-page/PrivateRoutes";
import LandingPage from "./pages/landing-page/LandingPage";
import SignupPage from "./pages/user-auth/SignupPage";
import LoginPage from "./pages/user-auth/LoginPage";

import ParentDrawer from "./components/drawers/ParentDrawer";
import ParentDashboard from "./pages/parent-pages/ParentDashboard";
import RequestTutor from "./pages/parent-pages/RequestTutor";
import JobUpload from "./pages/parent-pages/JobUpload";
import TutorResult from "./pages/parent-pages/TutorResult";

import { urls } from "./constants/urls";
import "@fontsource/poppins";
import "@fontsource/inter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.LANDING_PAGE} element={<LandingPage />} />
        <Route path={urls.SIGNUP} element={<SignupPage />} />
        <Route path={urls.LOGIN} element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path={urls.PARENT_DASHBOARD} element={<ParentDrawer><ParentDashboard /></ParentDrawer>} />
          <Route path={urls.REQUEST_TUTOR} element={<ParentDrawer><RequestTutor /></ParentDrawer>} />
          <Route path={urls.JOB_UPLOAD} element={<ParentDrawer><JobUpload /></ParentDrawer>} />
          <Route path={urls.TUTOR_RESULT} element={<ParentDrawer><TutorResult /></ParentDrawer>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
