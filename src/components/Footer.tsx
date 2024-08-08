import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center">
      <p className="font-md flex items-center">
        Built with ❤️ {" "}  by{"  "}
      <a href="https://github.com/ramnaresh8" target="_blank" rel="noopener" className="font-semibold">
      <FaGithub className="inline-block mx-1" />
        ramnaresh8
      </a>
      </p>
    </footer>
  );
};

export default Footer;
