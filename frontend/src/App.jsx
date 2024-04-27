import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignupPage from "./pages/user-auth/SignupPage";
import LoginPage from "./pages/user-auth/LoginPage";

import PrivateRoutesParent from "./pages/landing-page/PrivateRoutesParent";
import ParentDrawer from "./components/drawers/ParentDrawer";
import ParentDashboard from "./pages/parent-pages/ParentDashboard";
import RequestTutor from "./pages/parent-pages/RequestTutor";
import PostedJobs from "./pages/parent-pages/PostedJobs";
import CurrentApplications from "./pages/parent-pages/CurrentApplications";
import TutorResult from "./pages/parent-pages/TutorResult";

import PrivateRoutesTutor from "./pages/landing-page/PrivateRoutesTutor";
import TutorDrawer from "./components/drawers/TutorDrawer";
import TutorDashboard from "./pages/tutor-pages/TutorDashboard";
import AvailableJobs from "./pages/tutor-pages/AvailableJobs";
import MyApplications from "./pages/tutor-pages/MyApplications";

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

        <Route element={<PrivateRoutesParent />}>
          <Route path={urls.PARENT_DASHBOARD} element={<ParentDrawer><ParentDashboard /></ParentDrawer>} />
          <Route path={urls.REQUEST_TUTOR} element={<ParentDrawer><RequestTutor /></ParentDrawer>} />
          <Route path={urls.POSTED_JOBS} element={<ParentDrawer><PostedJobs /></ParentDrawer>} />
          <Route path={urls.CURRENT_APPLICATIONS} element={<ParentDrawer><CurrentApplications /></ParentDrawer>} />
          <Route path={urls.TUTOR_RESULT} element={<ParentDrawer><TutorResult /></ParentDrawer>} />
        </Route>

        <Route element={<PrivateRoutesTutor />}>
          <Route path={urls.TUTOR_DASHBOARD} element={<TutorDrawer><TutorDashboard /></TutorDrawer>} />
          <Route path={urls.AVAILABLE_JOBS} element={<TutorDrawer><AvailableJobs /></TutorDrawer>} />
          <Route path={urls.MY_APPLICATIONS} element={<TutorDrawer><MyApplications /></TutorDrawer>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
