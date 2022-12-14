import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div className={`absolute h-screen w-full flex ${open?'hidden':'inactive'}`}>
        <div className="bg-Dark-grayish-blue w-1/3 opacity-60"></div>
        <div className="bg-Off-white w-2/3 h-screen flex flex-col items-end">
          <button className="p-8" onClick={()=>{setOpen(!open)}}><img src="public\images\icon-menu-close.svg" alt="close button" /></button>
          <div className="w-full flex flex-col mt-auto mb-auto px-8 text-2xl gap-8">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </div>
        </div>
      </div>
    <main className="mx-5">
      <nav className="flex justify-between py-8">
        <img src="\images\logo.svg" alt="logo" className="w-12" />
        <button className="" onClick={()=>{setOpen(!open)}}>
          <img src="\images\icon-menu.svg" alt="" />
        </button>
      </nav>
      <div>
        <div className="pb-4">
          <img src="public\images\image-web-3-mobile.jpg" alt="first article" />
          <div className="flex flex-col gap-4 py-6">
            <h1 className="text-5xl font-extrabold">
              The Bright Future of Web 3.0?
            </h1>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="py-4 bg-Soft-red w-2/3 text-bold uppercase text-Off-white tracking-[10px]">
              Read more
            </button>
          </div>
        </div>
        <div className="bg-Dark-grayish-blue px-5 py-6 flex flex-col gap-6">
          <h1 className="text-Soft-orange font-bold text-4xl tracking-[4px]">
            New
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-Off-white text-2xl">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-Grayish-blue">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr className="text-Off-white"></hr>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-Off-white text-2xl">
              The Downsides of AI Artistry
            </h2>
            <p className="text-Grayish-blue">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr className="text-Off-white"></hr>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-Off-white text-2xl">
              Is VC Funding Drying Up?
            </h2>
            <p className="text-Grayish-blue">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col gap-6">
        <div className="flex items-center">
          <img
            src="\images\image-retro-pcs.jpg"
            alt="retro pc image"
            className="w-1/3"
          />
          <div className="pl-6 flex flex-col gap-3">
            <h1 className=" text-Grayish-blue font-extrabold text-5xl">01</h1>
            <h2 className="font-bold text-xl">Reviving Retro PCs</h2>
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
            <h2 className="font-bold text-xl">Top 10 Laptops of 2022</h2>
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
            <h2 className="font-bold text-xl">The Growth of Gaming</h2>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
