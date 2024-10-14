import Home from "@/components/homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to Text Converter - Convert JPG, PNG to Editable Text",
  description:
    "Convert images to text with our advanced Image to Text Converter. Handle multiple images like JPG, PNG, and more, and extract editable text with high accuracy.",
  keywords: [
    "image to text",
    "OCR",
    "image text converter",
    "jpg to text",
    "png to text",
    "text extraction",
    "editable text",
    "image conversion",
    "optical character recognition",
    "free online tool",
  ],
  openGraph: {
    title: "Free Image to Text Converter",
    description:
      "Use our free Image to Text Converter to extract text from JPG, PNG, and other formats quickly and accurately.",
    url: "https://ocr.com",
    type: "website",
    images: [
      {
        url: "https://ocr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Image to Text Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_site",
    title: "Image to Text Converter",
    description:
      "Convert images to text with our advanced Image to Text Converter. Handle multiple images like JPG, PNG, and more, and extract editable text with high accuracy.",
  },
};

export default async function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
