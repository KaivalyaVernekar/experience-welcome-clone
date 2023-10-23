import React from "react";
import Footer from "./modules/footer";
import Experience from "./modules/experience-section";
import SignUp from "./modules/sign-up";
import Working from "./modules/working-section";
import Revenue from "./modules/revenue";
import Integrate from "./modules/integrate";
import Blogs from "./modules/blogs";
import Navbar from "./components/Navbar";
import HeroSection from "./modules/hero-section";
import Events from "./modules/events-section";
import Studio from "./modules/studio";
import Opportunities from "./modules/opportunities";
import Testimonials from "./modules/testimonials";
import Features from "./modules/features";
import { Layout } from "antd";
const { Content } = Layout;
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Layout>
        <Navbar />
        <Content>
          <HeroSection />
          <Features id="features" />
          <Studio />
          <Revenue id="pricing" />
          <Working id="about" />
          <Integrate />
          <Testimonials />
          <Opportunities />
          <Blogs id="blog" />
          <Events id="events" />
          <SignUp />
          <div className="py-36">
            <Experience />
          </div>
        </Content>

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
