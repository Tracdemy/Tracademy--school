import LandingFooter from "../../footer/LandingFooter";
import Learning from "../../landing_body/learning/Learning";
import LandingNavbar from "../../navbar/LandingNavbar";
import Necessary from "../../landing_body/necessary/Necessary";
import Covered from "../../landing_body/covered/Covered";
import WhoYouAre from "../../landing_body/who-we-are/WhoYouAre";
import LearningFun from "../../landing_body/learning-fun/LearningFun";
import Category from "../../landing_body/category/Category";
import WhatOurStudentsSay from "../../landing_body/whatourstudentsSay/WhatOurStudentsSay";

function LandingPage() {
  return (
    <div>
      <LandingNavbar />
      <Learning />
      <Necessary />
      <WhoYouAre />
      <Category />
      <Covered />
      <LearningFun />
      <WhatOurStudentsSay />
      <LandingFooter />
    </div>
  );
}
export default LandingPage;
