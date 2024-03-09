import { LinkSimpleHorizontal } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = () => {
  return (
    <>
      <div className="flex flex-col bg-color-dark shadow-sm shadow-color-primary rounded-md hover:-translate-y-1 transition-all duration-300">
        <Image
          src="/kb-review.png"
          alt="project 1"
          width={350}
          height={350}
          className="rounded-md grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="flex flex-row justify-between">
          <p className="text-color-accent px-2 pt-1">Anime List Project</p>
          <Link
            href="https://github.com/KbDevs12/Kb-Review"
            className="px-4 pt-1 hover:opacity-70"
          >
            <LinkSimpleHorizontal color="#F0F4EF" size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
