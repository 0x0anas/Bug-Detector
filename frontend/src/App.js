import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Sign from "./components/sign/Sign";
import Scan from "./pages/Scan";
// import PricingPage from "./pages/PricingPage";
import ContectUsPage from "./pages/ContectUsPage";
import BlogsPage from "./pages/BlogsPage";
import Networkpage from "./pages/Networkpage";
import Webpage from "./pages/Webpage";
import Sourcecode from "./pages/Sourcecode";
import UserAccount from "./pages/UserAccount";
import PaymentCard from "./pages/PaymentCard";
import Read from "./pages/Read";
import { Provider } from 'react-redux';
import store from './Redux/store';
import ForgetPassword from "./components/forgetpassword/forgetpassword";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ReportPage from "./pages/ReportPage";
import PricingPage from "./pages/PricingPage";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/scanner" element={<Scan />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/changepassword" element={<ChangePasswordPage />} />
            <Route path="/contectus" element={<ContectUsPage />} />
            <Route path="/scanner/network" element={<Networkpage />} />
            <Route path="/scanner/web" element={<Webpage />} />
            <Route path="/scanner/sourcecode" element={<Sourcecode />} />
            <Route path="/report/:reportId/:type" element={<ReportPage />} />
            <Route path="/useraccount" element={<UserAccount />} />
            <Route path="/pricing/payment" element={<PaymentCard />} />
            <Route path="/readblog/:blogId" element={<Read />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
