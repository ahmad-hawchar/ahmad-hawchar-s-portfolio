export default function Languages() {
  return (
    <div id="languages" className="flex flex-col mt-24 mx-[10%] ">
      <h3 className="mx-auto font-extrabold md:text-3xl mb-10 sm:text-2xl text-xl text-center ">
        Languages-technologies
      </h3>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 ">
        <li className="w-auto h-auto text-center hover:text-cyan-400">
          <img
            src="html.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className="">HTML</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 ">
          <img
            src="javascript.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className="">Javascript</div>
        </li>

        <li className="w-auto h-auto text-center hover:text-cyan-400 ">
          <img
            src="css.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className="">CSS</div>
        </li>
        <li className=" w-auto h-auto md:h-[90%] my-auto text-center  hover:text-cyan-400 ">
          <img
            src="php.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img> 
          <div className=" ">PHP</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400">
          <img
            src="tailwind.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className=" " >Tailwindcss</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 ">
          <img
            src="react.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className="hover:text-cyan-400">React</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 ">
          <img
            src="sql.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className="">MYSQL</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 ">
          <img
            src="git.png"
            className=" mx-auto w-[30vw] h-[30vw] md:w-[100%] md:h-[100%] md:max-w-[80vw] md:max-h-[80vh] hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl"
            loading="lazy"
          ></img>
          <div className="">Git</div>
        </li>
      </ul>
    </div>
  );
}
