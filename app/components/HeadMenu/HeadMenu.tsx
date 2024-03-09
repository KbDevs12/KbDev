"use client";
const HeadMenu = () => {
  const scrollToProject = () => {
    const projectElement = document.getElementById("project");
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        id="home"
        className="bg-cover bg-center bg-no-repeat h-screen relative"
        style={{
          backgroundImage: `url('/bg-1.jpg')`,
        }}
      >
        <div className="flex flex-col items-center">
          <p className="pt-20 text-center text-5xl font-semibold text-color-primary">
            HELLO THERE !
          </p>
          <p className="pt-4 text-center font-medium text-lg text-color-primary">
            A Noob Web Developer Here
          </p>
        </div>
        <div className="flex items-center justify-center mt-20">
          <button
            onClick={scrollToProject}
            className="bg-color-accent px-4 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md shadow-color-dark"
          >
            Scroll
          </button>
        </div>
        {/* <div className="wave-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="stroke-color-secondary stroke-2"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: -1,
            }}
          >
            <path
              fill="#344966"
              fillOpacity={2}
              d="M0,64L34.3,90.7C68.6,117,137,171,206,176C274.3,181,343,139,411,117.3C480,96,549,96,617,106.7C685.7,117,754,139,823,138.7C891.4,139,960,117,1029,133.3C1097.1,149,1166,203,1234,197.3C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
    </>
  );
};
export default HeadMenu;
