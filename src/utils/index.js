import password1 from "../assets/images/1password.svg";
import adobe from "../assets/images/adobe.svg";
import nba from "../assets/images/nba.svg";
import motive from "../assets/images/motive.svg";
import saleforce from "../assets/images/saleforce.svg";
import bitwise from "../assets/images/bitwise.svg";
import dribble from "../assets/images/dribble.svg";
import profile1 from "../assets/images/ally-masi.png";
import profile2 from "../assets/images/talisha-brantley.png";
import profile3 from "../assets/images/baby-doll.png";
import experience1 from "../assets/images/experience-1.png";
import experience2 from "../assets/images/experience-2.png";
import experience3 from "../assets/images/experience-3.png";
import blog1 from "../assets/images/blog-1.png";
import blog2 from "../assets/images/blog-2.png";
import blog3 from "../assets/images/blog-3.png";
import step1 from "../assets/images/step-1.png";
import step2 from "../assets/images/step-2.png";
import step3 from "../assets/images/step-3.png";

const svgs = [
  <img alt="password1" src={password1} />,
  <img alt="adobe" src={adobe} />,
  <img alt="nba" src={nba} />,
  <img alt="motive" src={motive} />,
  <img alt="password1" src={password1} />,
  <img alt="adobe" src={adobe} />,
  <img alt="nba" src={nba} />,
  <img alt="motive" src={motive} />,
];

const workingSteps = [
  {
    label: "Step 1",
    title: "Create",
    description:
      "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
    src: step1,
    alt: "step-1",
  },
  {
    label: "Step 2",
    title: "Engage",
    description:
      "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants.",
    src: step2,
    alt: "step-2",
  },
  {
    label: "Step 3",
    title: "Analyze",
    description:
      "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
    src: step3,
    alt: "step-3",
  },
];

const statistic = [
  {
    title: "+87%",
    description: "increased attendee engagement at Bitwise",
  },
  {
    title: "$1.7M",
    description: "pipeline generated at Everbridge",
  },
  {
    title: "58%",
    description: "attendee conversion rate at Interfolio",
  },
];

const experiences = [
  {
    id: "experience-1",
    src: experience1,
    alt: "experience-1",
  },
  {
    id: "experience-2",
    src: experience2,
    alt: "experience-2",
  },
  {
    id: "experience-3",
    src: experience3,
    alt: "experience-3",
  },
  {
    id: "experience-4",
    src: experience1,
    alt: "experience-4",
  },
  {
    id: "experience-5",
    src: experience2,
    alt: "experience-5",
  },
];

const blogs = [
  {
    id: "article-1",
    label: "Inspiration",
    title: "8 Creative Ways to Repurpose Your Webinar Content",
    imgSrc: blog1,
    imgAlt: "article-1",
    action: "Read",
  },
  {
    id: "article-2",
    label: "Inspiration",
    title:
      "Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About",
    imgSrc: blog2,
    imgAlt: "article-2",
    action: "Read",
  },
  {
    id: "article-3",
    label: "Inspiration",
    title:
      "How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps",
    imgSrc: blog3,
    imgAlt: "article-3",
    action: "Read",
  },
];

const testimonials = [
  {
    description:
      '"We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement."',
    meta: "Director of Industries Events Marketing, Salesforce",
    profileImg: profile1,
    name: "Ally Masi",
    companyLogo: saleforce,
  },
  {
    description:
      "“Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.”",
    meta: "VP of Events, Bitwise",
    profileImg: profile2,
    name: "Talisha Brantley",
    companyLogo: bitwise,
  },
  {
    description:
      '"The Welcome experience has been 10 out of 10. When our sponsors like Facebook are considering sponsoring our events, Welcome is our - secret weapon"',
    meta: "Director of Marketing, Dribble",
    profileImg: profile3,
    name: "Baby Doll",
    companyLogo: dribble,
  },
];

const solutionsList = [
  {
    title: "Product",
    solutions: ["Features", "Pricing", "Book a demo"],
  },
  {
    title: "Explore",
    solutions: ["Events", "Blog"],
  },
  {
    title: "Company",
    solutions: ["About us", "Contact us"],
  },
];

const opportunities = [
  "Webinars",
  "Company Meetings",
  "Product Demos",
  "Customer Training",
  "Community Events",
  "Fireside Chat",
  "AMAs",
  "Kick-offs",
  "Multi-track",
  "Workshops",
];

const navMenuItems = [
  //   { key: "home", label: "Home" },
  { key: "features", label: "Features" },
  { key: "pricing", label: "Pricing" },
  { key: "about", label: "About" },
  { key: "blog", label: "Blogs" },
  { key: "events", label: "Events" },
];

export {
  workingSteps,
  statistic,
  svgs,
  experiences,
  blogs,
  testimonials,
  solutionsList,
  opportunities,
  navMenuItems,
};
