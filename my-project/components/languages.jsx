export default function Languages() {
  return (
    <div id="languages" className="flex flex-col mt-24 mx-[10%]">
      <h3 className="mx-auto font-extrabold md:text-3xl mb-10 text-2xl text-center ">
        Languages-technologies
      </h3>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 ">
        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="html.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh] "
          ></img>
          <div className="">HTML</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="javascript.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh]"
          ></img>
          <div className="">Javascript</div>
        </li>

        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="css.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh]"
          ></img>
          <div className="">CSS</div>
        </li>
        <li className="w-auto h-[90%] my-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl ">
          <img
            src="php.png"
            className="w-[100%] h-auto mx-auto mt-[20%] mb-[20%] max-w-[80vw] max-h-[80vh] "
          ></img>
          <div className="pt-[8%] md:pt-[17%]">PHP</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="tailwind.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh]"
          ></img>
          <div className="">Tailwindcss</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="react.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh]"
          ></img>
          <div className="">React</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="sql.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh]"
          ></img>
          <div className="">MYSQL</div>
        </li>
        <li className="w-auto h-auto text-center hover:text-cyan-400 hover:border-cyan-400 hover:border hover:rounded-2xl">
          <img
            src="git.png"
            className="w-[100%] h-[100%] max-w-[80vw] max-h-[80vh]"
          ></img>
          <div className="">Git</div>
        </li>
      </ul>
    </div>
  );
}
