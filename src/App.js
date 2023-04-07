import BillingStepper from "./Components/BillingStepper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import LandingPage from "./Pages/LandingPage";
import Incentives from "./Pages/Incentives";
// import AboutUs from "./Pages/AboutUs";
// import Resources from "./Pages/Resources";
import Blog from "./Pages/Blog";
import OurMission from "./Pages/about-us/OurMission";
import Company from "./Pages/about-us/Company";
import OurReviews from "./Pages/about-us/OurReviews";
import ContactUs from "./Pages/about-us/ContactUs";
import SolarCalculator from "./Pages/resources/SolarCalculator";
import FrequentlyAskedQuestions from "./Pages/resources/FrequentlyAskedQuestions";
import SystemOutput from "./Pages/resources/SystemOutput";
import Solar101 from "./Pages/resources/Solar101";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route exact path="/flow/powerbill" element={<BillingStepper />} />
                <Route exact path="/flow/homeowner" element={<BillingStepper />} />
                <Route exact path="/flow/provider" element={<BillingStepper />} />
                <Route exact path="/flow/roof_shade" element={<BillingStepper />} />
                <Route exact path="/flow/address" element={<BillingStepper />} />
                <Route exact path="/flow/name" element={<BillingStepper />} />
                <Route exact path="/flow/email" element={<BillingStepper />} />
                <Route exact path="/flow/tel" element={<BillingStepper />} />
                <Route exact path="/confirmation" element={<BillingStepper />} />
                <Route path="/incentives" element={<Incentives />} />
                {/* <Route path="/about_us" element={<AboutUs />} />
                <Route path="/resources" element={<Resources />} /> */}
                <Route path="/blog" element={<Blog />} />
                
                
                <Route path="/about_us/mission" element={<OurMission />} />
                <Route path="/about_us/company" element={<Company />} />
                <Route path="/about_us/reviews" element={<OurReviews />} />
                <Route path="/about_us/contact" element={<ContactUs />} />


                <Route path="/resources/calculator" element={<SolarCalculator />} />
                <Route path="/resources/faq" element={<FrequentlyAskedQuestions />} />
                <Route path="/resources/system_output" element={<SystemOutput />} />
                <Route path="/resources/101" element={<Solar101 />} />

            </Routes>
        </Router>
    );
}

export default App;
