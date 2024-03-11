import { LinkSimpleHorizontal } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = async () => {
  const testRes = await fetch(`https://kbdev-api.glitch.me/`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  const testHasil = await testRes.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-2 px-4">
      {testHasil.data.map((items: any, index: number) => {
        return (
          <div
            key={index}
            className="bg-color-primary shadow-sm shadow-color-dark rounded-md hover:-translate-y-1 transition-all duration-300"
          >
            <Image
              src={items.image_url}
              alt="project 1"
              width={350}
              height={350}
              className="rounded-md grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            />
            <div className="flex flex-row w-auto justify-between">
              <p className="text-color-menus px-2 pt-1 font-medium">
                {items.message}
              </p>
              <Link
                href="https://github.com/KbDevs12/Kb-Review"
                className="px-4 pt-1 hover:opacity-70"
              >
                <LinkSimpleHorizontal color="#200e35" size={25} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectCard;
