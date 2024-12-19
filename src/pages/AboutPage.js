import Header from "../components/Header";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#faf7f0";
    return () => {
        document.body.style.backgroundColor = ""; // Reset on unmount
    };
}, []);
return <Header />;
  }
  
  export default AboutPage;