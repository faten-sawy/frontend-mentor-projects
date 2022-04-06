import "./App.css";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function App() {
  const [darkMood, setDarkMood] = useState(false);
  const handleDarkMood = (e) => {
    setDarkMood(e.target.checked);
  };
  return (
    <div className={darkMood && "dark"}>
      <div className=" text-slate-400 dark:text-slate-300 pb-8 dark:bg-darkbg-dark">
        {/* /* header * */}
        <div className="bg-bg pb-40 dark:bg-darkbg-dark">
          <div className=" container py-9 flex justify-between items-center">
            {" "}
            <div>
              <h1 className="text-slate-800  dark:text-white text-3xl">
                Social Media Dashboard
              </h1>
              <span className="">Yotal Followers : 12.3456</span>
            </div>
            <div>
              <label htmlFor="checkbox" className="mr-2">
                Dark Mode
              </label>
              <span>
                <input
                  id="checkbox"
                  type="checkbox"
                  onChange={handleDarkMood}
                />
              </span>
            </div>
          </div>
        </div>
        {/* Main cards */}
        <div className="container -mt-40">
          <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 md:grid-cols-2">
            <div className=" card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500 ">
              {/* card  */}

              <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-facebook">
                  <AiFillFacebook size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-slate-800  dark:text-white text-6xl font-bold  ">
                1987
              </h2>
              <p className="font-medium uppercase tracking-[0.2em]">
                Followers
              </p>
              <div className="flex items-center justify-center gap-1 pt-6  ">
                <span className="text-maingreen">
                  <RiArrowUpSFill />
                </span>
                <span className="text-maingreen">12 Today</span>
              </div>
            </div>
            <div className=" card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500 ">
              {/* card  */}

              <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                <span className=" text-twitter">
                  <AiFillTwitterSquare size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-slate-800  dark:text-white text-6xl font-bold  ">
                1987
              </h2>
              <p className="font-medium uppercase tracking-[0.2em]">
                Followers
              </p>
              <div className="flex items-center justify-center gap-1 pt-6  ">
                <span className="text-maingreen">
                  <RiArrowUpSFill />
                </span>
                <span className="text-maingreen">30 Today</span>
              </div>
            </div>
            <div className=" card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500 ">
              {/* card  */}

              <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-pink-400">
                  <AiFillInstagram size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-slate-800  dark:text-white text-6xl font-bold  ">
                1987
              </h2>
              <p className="font-medium uppercase tracking-[0.2em]">
                Followers
              </p>
              <div className="flex items-center justify-center gap-1 pt-6  ">
                <span className="text-maingreen">
                  <RiArrowUpSFill />
                </span>
                <span className="text-maingreen">112 Today</span>
              </div>
            </div>
            <div className=" card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500 ">
              {/* card  */}

              <div className=" flex items-center justify-center gap-1 font-bold pb-6">
                <span className="text-red-600">
                  <AiFillYoutube size={22} />
                </span>
                <span className="">@abcd</span>
              </div>
              <h2 className="text-slate-800  dark:text-white text-6xl font-bold  ">
                1987
              </h2>
              <p className="font-medium uppercase tracking-[0.2em]">
                Followers
              </p>
              <div className="flex items-center justify-center gap-1 pt-6  ">
                <span className="text-red-600">
                  <RiArrowDownSFill />
                </span>
                <span className="text-red-600">99 Today</span>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold"> Overview - Today </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 ">
              {Array(8)
                .fill(" ")
                .map((el) => (
                  <div className="card-sm">
                    <div className="flex items-center justify-between">
                      <h4 className=" font-bold">Pages Views</h4>
                      <AiFillFacebook className=" text-facebook" size={22} />
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <h3 className=" font-black text-2xl text-slate-800  dark:text-white">
                        {" "}
                        101
                      </h3>
                      <div className="flex items-center gap-1 text-maingreen text-sm">
                        <span>
                          <RiArrowUpSFill />
                        </span>
                        <span>300%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
