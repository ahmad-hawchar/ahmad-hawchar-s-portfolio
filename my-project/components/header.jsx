import { useState } from "react";
export default function Header(props) {
  const [sidebar , setsidebar]=useState(false);
  return (
    <nav>
      <div className="grid-cols-4 border-b-2 border-cyan-400 md:border-b-0 rounded-2xl text-white h-[7vh] fixed w-[100%] top-0 backdrop-blur-sm  z-10 grid align-middle">
        <div className="ml-3 my-auto">
          <h3 className="sm:text-base text-sm">Ahmad Hawchar</h3>
        </div>
        <div className="col-span-3 md:flex my-auto  hidden">
          <div className="ml-auto hover:border-t-cyan-400 hover:border-t-2 hover:font-semibold ">
            <a href={props.link + "#about"}>About</a>
          </div>
          <div>
            <a className="ml-2 hover:border-t-cyan-400 hover:border-t-2 hover:font-semibold" href={props.link + "languages"}>
              Languages
            </a>
          </div>
          <div>
            <a className="ml-2 hover:border-t-cyan-400 hover:border-t-2 hover:font-semibold" href={props.link + "#projects"}>
              My Projects
            </a>
          </div>

          <div>
            <a className="mr-3 ml-2 hover:border-t-cyan-400 hover:border-t-2 hover:font-semibold" href={props.link + "#experiences"}>
              Experience
            </a>
          </div>
        </div>
        <div
          id="hamburgermenu"
          className="col-span-3 flex-col   flex md:hidden text-right  h-[100%] relative "
        >
          
          <input type="button" value="||||" className={ sidebar?"w-[5vw] right-3 top-2 absolute hidden":"w-[5vw] right-3 top-2 absolute flex hover:text-cyan-400"}  onClick={ ()=>{setsidebar(!sidebar)}}></input>
          <div className={ sidebar?"flex flex-col  right-0 top-0 absolute text-start bg-cyan-400 w-18 ":"hidden"}>
          <input type="button" className="border-b-cyan-900" value="X" onClick={ ()=>{setsidebar(!sidebar)} }></input>
          <div className="px-1">
            <a href={props.link + "/#about"}>About</a>
          </div>
          <div>
            <a className="p-2" href={props.link + "#languages"}>
              Languages
            </a>
          </div>
          <div>
            <a className="p-2" href={props.link + "#projects"}>
              My Projects
            </a>
          </div>

          <div>
            <a className="p-2" href={props.link + "#experiences"}>
              Experience
            </a>
          </div>


          </div>

        </div>
      </div>
    </nav>
  );
}
