import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignupPage from "./pages/user-auth/SignupPage";
import LoginPage from "./pages/user-auth/LoginPage";
import AdminLogin from "./pages/user-auth/AdminLogin";

import PrivateRoutesParent from "./pages/landing-page/PrivateRoutesParent";
import ParentDrawer from "./components/drawers/ParentDrawer";
import ParentDashboard from "./pages/parent-pages/ParentDashboard";
import RequestTutor from "./pages/parent-pages/RequestTutor";
import PostedJobs from "./pages/parent-pages/PostedJobs";
import AppliedTutors from "./pages/parent-pages/AppliedTutors";
import ConfirmedTutors from "./pages/parent-pages/ConfirmedTutors";

import PrivateRoutesTutor from "./pages/landing-page/PrivateRoutesTutor";
import TutorDrawer from "./components/drawers/TutorDrawer";
import TutorDashboard from "./pages/tutor-pages/TutorDashboard";
import AvailableJobs from "./pages/tutor-pages/AvailableJobs";
import MyApplications from "./pages/tutor-pages/MyApplications";
import MyJobs from "./pages/tutor-pages/MyJobs";

import PrivateRoutesAdmin from "./pages/landing-page/PrivateRoutesAdmin";
import AdminDrawer from "./components/drawers/AdminDrawer";
import AdminDashboard from "./pages/admin-pages/AdminDashboard";
import AllParents from "./pages/admin-pages/AllParents";
import AllTutors from "./pages/admin-pages/AllTutors";
import AllJobs from "./pages/admin-pages/AllJobs";

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
        <Route path={urls.ADMIN_LOGIN} element={<AdminLogin />} />

        <Route element={<PrivateRoutesParent />}>
          <Route
            path={urls.PARENT_DASHBOARD}
            element={
              <ParentDrawer>
                <ParentDashboard />
              </ParentDrawer>
            }
          />
          <Route
            path={urls.REQUEST_TUTOR}
            element={
              <ParentDrawer>
                <RequestTutor />
              </ParentDrawer>
            }
          />
          <Route
            path={urls.POSTED_JOBS}
            element={
              <ParentDrawer>
                <PostedJobs />
              </ParentDrawer>
            }
          />
          <Route
            path={urls.APPLIED_TUTORS}
            element={
              <ParentDrawer>
                <AppliedTutors />
              </ParentDrawer>
            }
          />
          <Route
            path={urls.CONFIRMED_TUTORS}
            element={
              <ParentDrawer>
                <ConfirmedTutors />
              </ParentDrawer>
            }
          />
        </Route>

        <Route element={<PrivateRoutesTutor />}>
          <Route
            path={urls.TUTOR_DASHBOARD}
            element={
              <TutorDrawer>
                <TutorDashboard />
              </TutorDrawer>
            }
          />
          <Route
            path={urls.AVAILABLE_JOBS}
            element={
              <TutorDrawer>
                <AvailableJobs />
              </TutorDrawer>
            }
          />
          <Route
            path={urls.MY_APPLICATIONS}
            element={
              <TutorDrawer>
                <MyApplications />
              </TutorDrawer>
            }
          />
          <Route
            path={urls.MY_JOBS}
            element={
              <TutorDrawer>
                <MyJobs />
              </TutorDrawer>
            }
          />
        </Route>
        <Route element={<PrivateRoutesAdmin />}>
          {/* <Route
            path={urls.ADMIN_DASHBOARD}
            element={
              <AdminDrawer>
                <AdminDashboard />
              </AdminDrawer>
            }
          /> */}
          <Route
            path={urls.ALL_PARENTS}
            element={
              <AdminDrawer>
                <AllParents />
              </AdminDrawer>
            }
          />
          <Route
            path={urls.ALL_TUTORS}
            element={
              <AdminDrawer>
                <AllTutors />
              </AdminDrawer>
            }
          />
          <Route
            path={urls.ALL_JOBS}
            element={
              <AdminDrawer>
                <AllJobs />
              </AdminDrawer>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
