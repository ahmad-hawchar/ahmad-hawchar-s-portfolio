import { useState } from "react";
export default function Header(props) {
  const [sidebar , setsidebar]=useState(false);
  return (
    <nav>
      <div className="grid-cols-4   text-white h-[7vh] fixed w-[100%] top-0 backdrop-blur-sm z-10  grid align-middle">
        <div className="ml-3 my-auto">
          <h3>Ahmad Hawchar</h3>
        </div>
        <div className="col-span-3 md:flex my-auto backdrop-blur-sm hidden">
          <div className="ml-auto ">
            <a href={props.link + "/#about"}>About</a>
          </div>
          <div>
            <a className="ml-2" href={props.link + "/#languages"}>
              Languages
            </a>
          </div>
          <div>
            <a className="ml-2" href={props.link + "/#projects"}>
              My Projects
            </a>
          </div>

          <div>
            <a className="mr-3 ml-2" href={props.link + "/#experiences"}>
              Experience
            </a>
          </div>
        </div>
        <div
          id="hamburgermenu"
          className="col-span-3 flex-col  backdrop-blur-sm flex md:hidden text-right  h-[100%] relative "
        >
          
          <input type="button" value="||||" className={ sidebar?"w-[5vw] right-3 top-3 absolute hidden":"w-[5vw] right-3 top-3 absolute flex"}  onClick={ ()=>{setsidebar(!sidebar)}}></input>
          <div className={ sidebar?"flex flex-col  right-0 top-0 absolute text-start bg-cyan-400 w-18 ":"hidden"}>
          <input type="button" className="" value="X" onClick={ ()=>{setsidebar(!sidebar)}}></input>
          <div className=" ">
            <a href={props.link + "/#about"}>About</a>
          </div>
          <div>
            <a className="" href={props.link + "/#languages"}>
              Languages
            </a>
          </div>
          <div>
            <a className="" href={props.link + "/#projects"}>
              My Projects
            </a>
          </div>

          <div>
            <a className=" " href={props.link + "/#experiences"}>
              Experience
            </a>
          </div>


          </div>

        </div>
      </div>
    </nav>
  );
}
