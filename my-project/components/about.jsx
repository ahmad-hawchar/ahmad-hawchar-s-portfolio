export default function About() {
  return (
    <div id="about" className="flex flex-col mt-16 ">
      <h3 className="mx-auto font-extrabold text-3xl">About</h3>
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img
            src="https://raw.githubusercontent.com/ahmad-hawchar/ahmadhawchar/main/my-project/linkedinprofile.png"
            alt="my photo"
            className="rounded-full shadow-xl max-w-full h-auto align-middle border-none hover:shadow-cyan-400"
          />
        </div>
      </div>
      <p id="hackAbout" className=" mx-[10%] sm:text-base font-Permanent font-light mt-3 text-justify  lg:text-xl xl:text-2xl md:px-20 ">
        My name is <span id="name" className="border-b-cyan-400 border-b font-semibold font-Permanent"> Ahmad Hawchar </span>. I am a student at CNAM university and an
        Intern at INTERPHASE, I spend most of my time building projects
        and learning new stuff! and my interest in computer science  is growing
        bigger  day by day.
      </p>
    </div>
  );
}
