import React from "react";
import WelcomeLogo from "../../assets/images/welcome-logo.svg";
import YouTube from "../../assets/images/youtube.svg";
import Twitter from "../../assets/images/twitter.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import { Image, Layout, Typography } from "antd";
import { solutionsList } from "../../utils/index";

const { Text } = Typography;

const SolutionsList = ({ title, solutions }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Text className="text-white/[.65]">{title}</Text>
      <div className="flex flex-col gap-2 md:gap-4">
        {solutions.map((item) => (
          <Text className="text-white cursor-pointer">{item}</Text>
        ))}
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <Layout.Footer className="footer w-full md:w-auto bg-black p-0">
      <div className="px-20 pt-28 pb-48 grid grid-rows-2 md:grid-rows-1 md:grid-flow-col text-white">
        <Image
          preview={false}
          src={WelcomeLogo}
          alt="logo"
          className="col-span-1 max-h-32 max-w-[105px]"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-8">
          {solutionsList.map((item) => (
            <SolutionsList {...item} />
          ))}
        </div>
      </div>

      <div className="px-20 py-7 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <Text className="text-white/[.65] order-last md:order-first">
          © 2022 Welcome. All right reserved.
        </Text>
        <div className="-order-2 md:-order-2">
          <Text className="text-white/[.65] cursor-pointer mr-6">
            Privacy Policy
          </Text>
          <Text className="text-white/[.65] cursor-pointer">
            Terms of Service
          </Text>
        </div>
        <div class="flex flex-row items-center gap-4 w-fit order-first md:order-last">
          <img src={YouTube} alt="youtube" className="cursor-pointer" />
          <img src={Twitter} alt="twitter" className="cursor-pointer" />
          <img src={LinkedIn} alt="linkedin" className="cursor-pointer" />
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
