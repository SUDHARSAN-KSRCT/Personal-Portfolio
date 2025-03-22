import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const LeetcodeIcon = () => (
  <img src="./LeetCode.png" alt="LeetCode" width="15" height="15" />
);
const ContactData = {
  phone: "+91 8870213068",
  email: "sudharsancsbs@gmail.com",
  address: "Bhavani , Tamilnadu , India",
  links: [
    {
      url: "https://github.com/SUDHARSAN-KSRCT",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/in/sudharsancsbs",
      icon: FaLinkedin,
    },
    
    {
      url: "https://www.instagram.com/sudixn._.rexx",
      icon: FaInstagram,
    },
   
{
  url: "https://leetcode.com/u/SUDHARSAN_CSBS/",
  icon: LeetcodeIcon,
}
  ],
};

export default ContactData;
