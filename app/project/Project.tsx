import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import Image from "next/image";
import Cloud from "@/app/components/Cloud/Cloud";
const Project = () => {
  return (
    <>
      <div
        className="flex flex-col items-center bg-color-secondary"
        id="project"
      >
        <div className="relative w-screen">
          <Cloud />
        </div>
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="px-20 pt-28 text-2xl text-color-primary"
        >
          My Project
        </p>
        <div
          data-aos="flip-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="grid items-center pt-4"
        >
          <ProjectCard />
        </div>
        <Image
          data-aos="zoom-out-up"
          src="/city_4.png"
          alt=""
          width={1024}
          height={1024}
        />
      </div>
    </>
  );
};

export default Project;
