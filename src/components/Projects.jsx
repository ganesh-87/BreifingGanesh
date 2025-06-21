export default function Projects() {
  const projects = [
    {
      name: "AI Based Task Management System",
      link: "https://github.com/ganesh-87/Task_Manager",
      img: "/TaskProj.png",
    },
    {
      name: "Bidirectional Data Ingestion Tool",
      link: "https://github.com/ganesh-87/Data-Ingestion-Tool",
      img: "/ProjInjes.jpg",
    },
    {
      name: "Ecommerce Price Comparison Platform",
      link: "https://github.com/ganesh-87/BestDeals",
      img: "/ProjDeals.jpeg",
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col space-y-8 items-center justify-center pt-5 scroll-mt-15"
    >
      <div className="text-4xl text-bold text-black inline-block border-2 px-4 py-2 rounded-md">
        Projects
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-6 mx-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <h2 className="text-sm text-center bg-gradient-to-l from-cyan-900 to-orange-800 bg-clip-text text-transparent">
              {project.name}
            </h2>
            {project.img && (
              <a href={project.link}>
                <img
                  src={project.img}
                  className="w-90 h-50 rounded-lg border-2 shadow-xl mt-2"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
