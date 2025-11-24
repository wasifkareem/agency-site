import {
  CircleCheck,
  CircleMinus,
  LucideCircleMinus,
  MinusIcon,
} from "lucide-react";

const Project = () => {
  return (
    <div>
      <div className=" grid grid-cols-4 max-w-[1300px] p-7 py-16 md:p-10 -mt-16 relative bg-white  border rounded-2xl   ">
        <div className=" font-openSans col-span-5 md:col-span-2 text-start pr-16 md:pr-24 flex flex-col gap-3 mb-10">
          {" "}
          <h2 className=" font-instrument text-4xl">
            Collaboration with Pocketworks
          </h2>
          {/* subtitle */}
          <p className=" ">
            Their previous website was rigid, forcing their marketing team to
            wait for days to update. We rebuilt it as a fully CMS-driven website
            — giving them complete control to edit pages, update content, and
            launch campaigns without developer involvement.
          </p>
          {/* bullet */}
          <div className=" hidden  md:flex flex-col gap-3 mt-8">
            <p className=" m-0! flex text-neutral-600 justify-between w-full    gap-7">
              <span className=" min-w-24 text-sm">
                {" "}
                <span className="  rounded-full  border p-0.5 pr-3  flex items-center h-fit">
                  <LucideCircleMinus
                    size={18}
                    className=" text-white mr-1 fill-slate-400 text-4xl"
                  />{" "}
                  <span>Previous</span>
                </span>{" "}
              </span>
              Static site that required developer help, marketing waited days
              for even small updates.
            </p>

            <p className=" m-0! flex  gap-7 text-neutral-600 ">
              <span className=" min-w-24">
                <span className=" pr-3 p-0.5 w-fit  text-sm flex border rounded-full  border-green-600 items-center text-green-800 h-fit">
                  <CircleCheck
                    size={18}
                    className=" mr-1 text-white  fill-green-700 text-4xl"
                  />{" "}
                  New
                </span>{" "}
              </span>
              Fully CMS-driven site — marketing updates content in minutes,
              enabling faster campaigns and more qualified leads.
            </p>
          </div>
        </div>
        <div className=" col-span-5 md:col-span-2">
          <div className=" w-full ">
            <img
              src="src/assets/pocketworks.png"
              className=" rounded-2xl border"
              alt=""
            />
            <div className=" flex items-start mt-6 gap-2">
              <img
                src="src/assets/slack-logo.png"
                className=" h-9  bg-white rounded-full py-1 border -left-7 "
                alt=""
              />
              <img
                className="  rounded-lg md:h-20 h-12 "
                src="src/assets/tobinreview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
