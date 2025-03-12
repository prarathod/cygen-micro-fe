import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login/Login";
import EmailVerify from "@pages/login/EmailVerify";
import BusinessProcess from "@pages/businessProcess/BusinessProcess";
import AddBP from "@pages/businessProcess/add/AddBusinessProcess";
import EditBP from "@pages/businessProcess/edit/EditBusinessProcess";
import DetailsBP from "@pages/businessProcess/details/DetailsBusinessProcess";
import Assessments from "@pages/assessments/Assessments";
import EditAssessments from "@pages/assessments/edit/EditAssessments";
import AddAssessments from "@pages/assessments/add/AddAssessments";
import DetailsAssessments from "@pages/assessments/details/DetailsAssessments";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/email-verify" element={<EmailVerify />} />

          {/* Group Business Process Routes with Handling undefined routes. */}
          <Route path="/business-process" element={<BusinessProcess />} />
          <Route path="/business-process/add" element={<AddBP />} />
          <Route path="/business-process/edit/:id" element={<EditBP />} />
          <Route path="/business-process/details/:id" element={<DetailsBP />} />
          <Route path="/business-process/*" element={<BusinessProcess />} />

          {/* Group Business Process Routes with Handling undefined routes. */}
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/add" element={<AddAssessments />} />
          <Route path="/assessments/edit/:id" element={<EditAssessments />} />
          <Route
            path="/assessments/details/:id"
            element={<DetailsAssessments />}
          />
          <Route path="/assessments/*" element={<Assessments />} />

          {/* Group B Routes */}
          {/* <Route path="/b" element={<BView />} />
          <Route path="/b/view/:id" element={<BView />} />
          <Route path="/b/edit/:id" element={<BEdit />} />
          <Route path="/b/preview" element={<BPreview />} /> */}

          {/* 404 Not Found Route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
