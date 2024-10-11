"use client";
import React from "react";

const howItWorksContent = [
  {
    title: "Upload Images",
    step: 1,
    description:
      "You can drag and drop images into the input box above or select images from your local device. Supported image formats are JPG, PNG, JPEG, BMP, GIF, and TIFF.",
  },
  {
    title: "Auto Extract Text from Images",
    step: 2,
    description:
      "Our image-to-text converter automatically extracts text from images and transforms it into editable text. Imagetotext.info helped us to automate this process.",
  },
  {
    title: "Download/Copy Options",
    step: 3,
    description:
      "Download your converted text by clicking the download icon (Download file icon) or copy content to the clipboard using the copy button (Copy file icon).",
  },
];

const HowItWorks = () => {
  return (
    <section className="container mx-auto py-20 relative">
      <div className="w-full  px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              How It Works
            </h2>
            <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              A detailed breakdown of processes and mechanisms behind a system
              or product, <br />
              simplifying complex concepts for easy understanding.
            </p>
          </div>
          <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
            {howItWorksContent.map(({ title, step, description }) => (
              <React.Fragment key={step}>
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                    <div className="relative group p-4 border border-transparent transition-all duration-300 hover:border-gray-600 hover:rounded-md hover:cursor-pointer hover:shadow-md">
                      <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:text-indigo-800">
                        {step}
                      </h3>
                      <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8  my-4">
                        {title}
                      </h4>
                      <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
                {step < howItWorksContent.length && (
                  <svg
                    className="md:flex hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                      stroke="#4F46E5"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
