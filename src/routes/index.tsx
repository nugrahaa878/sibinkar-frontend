import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import AuthenticationPage from "./AuthenticationPage";
import PrivateRoutes from "../components/PrivateRoutes";
import StaffingStatusPage from "./StaffingStatusPage";
import OrganizationStructurePage from "./OrganizationalStructurePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthenticationPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/staffing-status" element={<StaffingStatusPage />} />
        <Route
          path="/organization-structure"
          element={<OrganizationStructurePage />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
