import OCRPage from "@/components/OCRPage";
import HowItWorks from "@/components/homepage/how-it-works";
import { AccordionComponent } from "@/components/homepage/accordion-component";
import BlogSample from "@/components/homepage/blog-samples";
import HeroSection from "@/components/homepage/hero-section";
import MarketingCards from "@/components/homepage/marketing-cards";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";
import Features from "@/components/homepage/features";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        {/* <HeroSection /> */}
        <OCRPage />
      </div>
      <div className=" bg-gray-50 mt-[1rem] p-3">
        <HowItWorks />
      </div>
      <div className=" container mx-auto mt-[1rem] p-3">
        <Features />
      </div>
      {/* <div className="flex my-[8rem] w-full justify-center items-center">
        <SideBySide />
      </div>
      <div className="flex flex-col p-2 w-full justify-center items-center">
        <MarketingCards />
      </div> */}
      <div className="bg-gray-50 mt-[1rem] p-3 mb-10">
        <BlogSample />
      </div>
      {/* {config.auth.enabled && config.payments.enabled && ( */}
      <div><Pricing /></div>
      {/* //)} */}
      {/* //<div className="flex justify-center items-center w-full my-[8rem]"> */}
      {/* <AccordionComponent /> */}
      {/* <///div> */}
    </>
  );
}
