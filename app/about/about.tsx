import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-color-accent py-10 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="sm:text-center lg:text-left">
          <h2
            data-aos="fade-down-right"
            data-aos-easing="ease-in-out"
            className="text-3xl font-extrabold tracking-tight text-color-dark sm:text-4xl"
          >
            About Me
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="50"
            className="mt-4 max-w-2xl text-lg text-gray-500"
          >
            Im Aditya Putra, A Web Developer but im very confuse when it comes
            to UI/UX. in discord i go by the name of KangBaso. I love learning
            new things and building cool projects. Feel free to reach out if you
            want to collaborate or just say hi!
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              data-aos="zoom-in-left"
              href="https://discord.com/users/698069399285792848"
              className="flex items-center justify-center py-2 px-4 rounded-lg shadow-md bg-color-primary hover:bg-color-accent"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <DiscordLogo size={24} />
              <span className="ml-2">KangBaso_</span>
            </Link>
            <Link
              data-aos="zoom-in-down"
              href="https://github.com/KbDevs12/"
              className="flex items-center justify-center py-2 px-4 rounded-lg shadow-md bg-color-primary hover:bg-color-accent"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <GithubLogo size={24} />
              <span className="ml-2">KbDevs12</span>
            </Link>
            <Link
              data-aos="zoom-in-down"
              href="https://www.instagram.com/adttptra_11/"
              className="flex items-center justify-center py-2 px-4 rounded-lg shadow-md bg-color-primary hover:bg-color-accent"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <InstagramLogo size={24} />
              <span className="ml-2">@adttptra_11</span>
            </Link>
            <Link
              data-aos="zoom-in-right"
              href="https://www.youtube.com/c/KangBasoDevelopment"
              className="flex items-center justify-center py-2 px-4 rounded-lg shadow-md bg-color-primary hover:bg-color-accent"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <YoutubeLogo size={24} />
              <span className="ml-2">Kang Baso Development</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
