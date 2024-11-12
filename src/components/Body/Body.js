import Login from '../Login/Login'
import Home from '../Home/Home'
import Browser from '../Browse/Browse';
import FinishSetting from '../Finishsettingup/FinishSetting'
import Step1 from '../Finishsettingup/Step1'
import Step2 from '../Finishsettingup/step2';
import Step3 from '../Finishsettingup/step3'
import Step4 from '../Finishsettingup/Step4'
import FAQSection from '../NetflixQuestions/NetflixQuestions'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Body() {
  const approuter = createBrowserRouter([
    {
      path:"*",
      element:<Home/>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path:"/finishsetting",
      element:<FinishSetting/>
    },{
      path:"/step1finish",
      element:<Step1/>
    },{
      path:"/step2finish",
      element:<Step2/>
    },{
      path:"/step3finish",
      element:<Step3/>
    },{
      path:"/step4finish",
      element:<Step4/>
    },{
      path:"/netflixquestions",
      element:<FAQSection/>
    }
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}
