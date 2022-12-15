import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="">
      <div
        className={`absolute h-screen w-full flex ${
          open ? "hidden" : "inactive"
        } lg:inline-block lg:h-0 lg:translate-y-10 lg:w-0 lg:left-2/3`}
      >
        <div className="bg-Dark-grayish-blue w-1/3 opacity-60 lg:hidden"></div>
        <div className="bg-Off-white w-2/3 h-screen flex flex-col items-end lg:w-0 lg:h-0">
          <button
            className="p-8 lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src="\images\icon-menu-close.svg" alt="close button" />
          </button>
          <div className="w-full flex flex-col mt-auto mb-auto px-8 text-2xl gap-8 lg:flex-row lg:text-lg">
            <a href="#" className="hover:font-bold active:text-Soft-orange">Home</a>
            <a href="#" className="hover:font-bold active:text-Soft-orange">New</a>
            <a href="#" className="hover:font-bold active:text-Soft-orange">Popular</a>
            <a href="#" className="hover:font-bold active:text-Soft-orange">Trending</a>
            <a href="#" className="hover:font-bold active:text-Soft-orange">Categories</a>
          </div>
        </div>
      </div>
      <main className="mx-5">
        <nav className="flex justify-between py-8 lg:pl-20">
          <img src="\images\logo.svg" alt="logo" className="w-12" />
          <button
            className="lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src="\images\icon-menu.svg" alt="" />
          </button>
        </nav>
        <div className="lg:flex lg:gap-10 lg:mx-20">
          <div className="pb-4 lg:w-4/5">
            <img
              src="\images\image-web-3-mobile.jpg"
              alt="first article"
              className="lg:hidden"
            />
            <img
              src="\images\image-web-3-desktop.jpg"
              alt="first article"
              className="hidden lg:inline-block lg:w-full"
            />
            <div className="flex flex-col gap-4 py-6 lg:flex-row">
              <h1 className="text-5xl font-extrabold lg:w-1/2 lg:text-6xl lg:max-w-1/2">
                The Bright Future of Web 3.0?
              </h1>
              <div className="lg:max-w-1/2 lg:w-1/2 flex flex-col gap-4 lg:justify-between">
                <p className="lg:text-lg">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="py-4 bg-Soft-red w-2/3 text-bold uppercase text-Off-white tracking-[10px] lg:w-1/2 lg:py-3 lg:tracking-[5px] hover:opacity-80 active:bg-Very-dark-blue">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="bg-Very-dark-blue px-5 py-6 flex flex-col gap-6 lg:justify-between lg:pb-10">
            <h1 className="text-Soft-orange font-bold text-4xl tracking-[4px]">
              New
            </h1>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-bold text-Off-white text-2xl hover:text-Soft-orange active:font-extrabold">
                Hydrogen VS Electric Cars
              </a>
              <p className="text-Grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <hr className=" text-Grayish-blue"></hr>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-bold text-Off-white text-2xl hover:text-Soft-orange active:font-extrabold">
                The Downsides of AI Artistry
              </a>
              <p className="text-Grayish-blue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <hr className=" text-Grayish-blue"></hr>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-bold text-Off-white text-2xl hover:text-Soft-orange active:font-extrabold">
                Is VC Funding Drying Up?
              </a>
              <p className="text-Grayish-blue">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col gap-6 lg:flex-row lg:mx-20 lg:gap-0 lg:justify-between">
          <div className="flex items-center">
            <img
              src="\images\image-retro-pcs.jpg"
              alt="retro pc image"
              className="w-1/3"
            />
            <div className="pl-6 flex flex-col gap-3">
              <h1 className=" text-Grayish-blue font-extrabold text-5xl">01</h1>
              <a href="#" className="font-bold text-xl hover:text-Soft-red active:font-extrabold">Reviving Retro PCs</a>
              <p className="">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="\images\image-top-laptops.jpg"
              alt="retro pc image"
              className="w-1/3"
            />
            <div className="pl-6 flex flex-col gap-3">
              <h1 className=" text-Grayish-blue font-extrabold text-5xl">02</h1>
              <a href="#" className="font-bold text-xl hover:text-Soft-red active:font-extrabold">Top 10 Laptops of 2022</a>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="\images\image-gaming-growth.jpg"
              alt="retro pc image"
              className="w-1/3"
            />
            <div className="pl-6 flex flex-col gap-3">
              <h1 className=" text-Grayish-blue font-extrabold text-5xl">03</h1>
              <a href="#" className="font-bold text-xl hover:text-Soft-red active:font-extrabold">The Growth of Gaming</a>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
