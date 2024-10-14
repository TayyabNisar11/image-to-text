import { FC } from "react";
import { articles } from "@/data/blogs";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

interface Params {
  id: string;
}

interface BlogDetailPageProps {
  params: Params;
}

export async function generateMetadata(
  { params }: BlogDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = articles.find((post) => post.id === params.id);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "No blog post found for this ID.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const url = `https://ocr.com/blog/${blog.id}`;
  const description = blog.shortDescription;
  const image = blog.image;

  return {
    title: blog.title,
    description: description,
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
      title: blog.title,
      description: description,
      url: url,
      type: "article",
      images: [image, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: description,
      site: "@yourTwitterHandle",
      creator: "@authorTwitterHandle",
    },
    alternates: {
      canonical: url,
    },
  };
}

const BlogDetailPage: FC<BlogDetailPageProps> = ({ params }) => {
  const { id } = params;
  const blog = articles.find((post) => post.id === id);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto my-10 px-4">
        <div className="mb-6 flex items-center justify-center">
          <Image
            src={blog?.image}
            alt={blog?.title}
            className="max-w-4xl w-full h-[500px] rounded-lg shadow-md"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-3xl text-center font-bold mb-4">{blog?.title}</h1>
        <p className="text-gray-600 mb-6">{blog?.date}</p>
        <div
          className="prose lg:prose-xl mb-6"
          dangerouslySetInnerHTML={{ __html: blog?.description }}
        />
      </div>
    </>
  );
};

export default BlogDetailPage;
