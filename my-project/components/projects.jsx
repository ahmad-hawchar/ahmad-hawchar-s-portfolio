export default function Projects() {
  return (
    <div id='projects' className="flex flex-col mt-24 mx-[10%]  text-white">
      <h3 className="mx-auto font-extrabold text-3xl mb-10 text-white ">My Projects</h3>
      <div className="grid grid-cols-2 justify-center gap-5">
        <div className="h-[100%] w-[100%] bg-cyan-400 rounded-lg ">
          <img className="md:w-[70%] md:h-[60%]  h-[20vh] w-[100%] mx-auto my-5 rounded-2xl max-h-[60vh] max-w-[60vw] px-2" src='./coursero.png ' loading="lazy"></img>
          <p className="text-center font-bold ">
              Coursero          
          </p>
          <span className="w-[80%] mx-[10%] inline-block"><hr></hr></span>
          <p className="text-center text-sm md:text-base"> created using (PHP-Html-CSS-JS)</p>
          <p className="text-center my-2"><a href='https://github.com/ahmad-hawchar/coursero-project' className="bg-cyan-500 hover:bg-cyan-600 p-1 rounded-md hover:font-bold my-1">check it our here!</a></p>
        </div>
        <div className="md:h-96 md:w-[100%] bg-cyan-400 rounded-lg  ">
          <img className="md:w-[70%] md:h-[60%]  h-[20vh] w-[100%] mx-auto my-5 rounded-2xl max-h-[60vh] max-w-[60vw] px-2" src='./portfolio.png' loading="lazy"></img>
          <p className="text-center font-bold ">
            Portfolio          
          </p>
          <span className="w-[80%] mx-[10%] inline-block"><hr></hr></span>
          <p className="text-center text-sm md:text-base"> created using (React-tailwindcss)  </p>
          <p className="text-center my-2"><a href='https://github.com/ahmad-hawchar/portfolio' className="bg-cyan-500  hover:bg-cyan-600 p-1 rounded-md hover:font-bold my-1 ">check it our here!</a></p>
        </div>
      </div>
    </div>
  );
}
