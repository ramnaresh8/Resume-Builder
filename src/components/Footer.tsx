const Footer = () => {
  return (
    <footer className="flex w-full">
      <p className="font-md">
        Built with ❤️ {" "}  by{"  "}
      </p>
      <a href="https://github.com/ramnaresh8" target="_blank" rel="noopener"><img className="object-contain" src="src\assets\githubicon.png" height={25} width={25} alt="github-profile" /></a>
      <a href="https://github.com/ramnaresh8" target="_blank" rel="noopener" className="font-semibold">
        ramnaresh8{" "}
      </a>
    </footer>
  );
};

export default Footer;
