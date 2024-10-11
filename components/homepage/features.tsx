import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Low-resolution image extractor",
    description:
      "Easily extracts text from blurry and low-resolution images, including books, handwritten works, and screenshots, with high accuracy.",
  },
  {
    name: "Detect mathematical syntax",
    description:
      "Accurately extracts mathematical expressions from images, including arithmetic equations and polynomial expressions, using machine learning.",
  },
  {
    name: "Free to use",
    description:
      "Available for everyone to copy text from images without the need for signing up.",
  },
  {
    name: "Handles multiple languages",
    description:
      "Versatile in understanding numerous languages, allowing for text extraction from images in various languages including Chinese, German, Spanish, and more.",
  },
  {
    name: "Support multiple file formats",
    description:
      "Supports various image file formats for text extraction, including JPG, PNG, JPEG, BMP, GIF, TIFF, and WEBP.",
  },
  {
    name: "Data extraction",
    description:
      "Extracts text from invoices, receipts, forms, and tables to create databases and spreadsheets.",
  },
  {
    name: "Accessibility",
    description:
      "Makes printed or handwritten documents accessible to visually impaired users by converting images to text for screen readers.",
  },
  {
    name: "Digitizing books",
    description:
      "Converts printed books into digital text, making them more searchable and easier to distribute.",
  },
  {
    name: "Searchable PDFs",
    description:
      "Converts scanned documents into searchable PDFs, making it easier to find information within the documents.",
  },
  {
    name: "Editing text",
    description: "Allows for easy editing and correction of extracted text.",
  },
  {
    name: "Data analysis",
    description:
      "Facilitates data analysis by extracting text from images for further research and content analysis.",
  },
  {
    name: "Educational purposes",
    description:
      "Helps students convert scanned study notes, textbooks, and lecture notes into text for better organization.",
  },
  {
    name: "Legal and compliance",
    description:
      "Extracts key information from legal documents, contracts, or government forms for easier management.",
  },
  {
    name: "Business automation",
    description:
      "Streamlines administrative work and optimizes operations by reducing manual paperwork with the image-to-text converter.",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center pb-20">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All-in-one platform
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Easily convert images to text with high accuracy and versatility,
              making your content more accessible and editable.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
