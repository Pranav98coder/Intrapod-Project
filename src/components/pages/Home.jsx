
import { WobbleCard } from "@/components/ui/WobbleCard.jsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-50 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">

          <h2 className="text-balance text-base md:text-xl text-left lg:text-3xl font-bold tracking-[-0.015em] text-gray-800">
            Rizz your Hirer, with <span className="font-serif text-3xl bg-gradient-to-r from-[#489af2] to-purple-600 bg-clip-text text-transparent">Rizz-u.me</span> 
          </h2>
          <p className="mt-4 text-left text-gray-800 text-xl">
            The resume builder designed to land you the job—the one you've been waiting for your whole life.
          </p>
          <img
          src="https://www.visualcv.com/static/f874465ca61aa74628774e10316a566b/06042/Black_and_White_Resume_for_Creative_Professions.png"
          width={650}
          height={500}
          alt="linear demo image"
          className=" hidden lg:block absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-cover rounded-2xl "
        />
        </div>
       
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-slate-50">
        <h2 className="max-w-80 text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-800">
          Rise above the rest with professional resume templates
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-lg text-slate-600">
          Impressively designed and professionally-formatted resume templates let you stand out. Download your template to Word or PDF.

        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-slate-100 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="max-w-sm md:max-w-lg text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-800">

          Quickly and easily build your professional resume to get hired faster
          </h2>
          <p className="mt-4 max-w-[26rem] mx-auto text-center text-lg text-slate-600">
          Build a resume that lands interviews
          Our resume builder with the most advanced tools lets you tell your professional story helping you stand out to recruiters, hiring managers, and employers.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Button className="bg-[#1a91f0] hover:bg-[#1a91f0]/90 hover:-translate-y-1 transition-transform text-lg py-6 px-8">
              Build
            </Button>
            <Button className="bg-[#1a91f0] hover:bg-[#1a91f0]/90 hover:-translate-y-1 transition-transform text-lg py-6 px-8">
              Templates
            </Button>
          </div>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl grayscale filter"
        />
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -left-10 md:-left-[40%] lg:-left-[20%] -bottom-10 object-contain rounded-2xl grayscale filter"
        />
      </WobbleCard>
    </div>

  );
}

