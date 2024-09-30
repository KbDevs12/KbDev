import { LinkSimpleHorizontal } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const ProjectCard = () => {
  // Daftar URL proyek yang ingin Anda tampilkan
  const projects = [
    {
      url: "https://review.devv.my.id",
      message: "Anime Review"
    },
    {
      url: "https://devv.my.id",
      message: "Porttofilio Website"
    },
    {
      url: "https://rexy.devv.my.id",
      message: "AI ChatBot Using Gemini"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-2 px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-color-primary shadow-sm shadow-color-dark rounded-md hover:-translate-y-1 transition-all duration-300"
        >
          <iframe
            src={project.url}
            width={350}
            height={350}
            className="rounded-md grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            title={`Project ${index}`}
            scrolling="no"
            style={{ overflow: 'hidden' }}
          />
          <div className="flex flex-row w-auto justify-between">
            <p className="text-color-menus px-2 pt-1 font-medium">
              {project.message}
            </p>
            <Link
              href={project.url}
              className="px-4 pt-1 hover:opacity-70"
            >
              <LinkSimpleHorizontal color="#200e35" size={25} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
