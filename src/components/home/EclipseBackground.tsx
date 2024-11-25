
const EclipseBackground = () => {
  return (
    <div className="absolute w-screen -z-40 h-screen flex justify-left items-center overflow-hidden">
      {/* Slanted View Container */}
      <div
        className="relative w-full h-full flex justify-left items-center"
        style={{
          transform: "rotateX(60deg) rotateY(10deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* First Orbit */}
        <div className="absolute w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] md:w-[60rem] md:h-[60rem] lg:w-[80rem] lg:h-[80rem] ml-5 sm:ml-10 border-2 lg:border-4 border-gray-400/20 rounded-full animate-spin-slow"></div>

        {/* Second Orbit */}
        <div className="absolute w-[40rem] h-[40rem] sm:w-[50rem] sm:h-[50rem] md:w-[80rem] md:h-[80rem] lg:w-[100rem] lg:h-[100rem] ml-2 sm:ml-5 border-2 lg:border-4 border-gray-400/20 rounded-full animate-spin-reverse-slower"></div>

        {/* Third Orbit */}
        <div className="absolute w-[50rem] h-[50rem] sm:w-[60rem] sm:h-[60rem] md:w-[100rem] md:h-[100rem] lg:w-[120rem] lg:h-[120rem]  border-2 lg:border-4 border-gray-400/20 rounded-full animate-spin-slowest"></div>
      </div>
    </div>
  );
};

export default EclipseBackground;
