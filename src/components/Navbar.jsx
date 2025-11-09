function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-900 shadow-md px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl bg-gradient-to-l from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Ganesh Pinireddy
          </h1>
          <ul className="flex gap-6 font-medium">
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#journey" className="hover:text-blue-500">
                Trek
              </a>
            </li>
            <li>
              <a
                href="/GaneshBreif.pdf"
                download="GaneshBreif.pdf"
                className="hover:text-blue-500"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
