import { TITLE_TAILWIND_CLASS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
export default function BlogSample() {
  const articles = [
    {
      id: 1,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/1af01aca-6ce1-4a3f-8e54-e945e3104889.png",
      title: "The Importance of Storytelling in Modern Branding",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      href: "/blog/test",
    },
    {
      id: 2,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/96bf3bb0-9e15-4745-b966-91d719651429.png",
      title: "How to Choose the Right Dog for Your Lifestyle",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      href: "/blog/test",
    },
    {
      id: 3,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/36292d36-cfae-4106-8d59-ace222f4bc82.png",
      title: "Top Automation Testing Suites for Seamless Software Testing",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      href: "/blog/test",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center p-3 w-full">
        <div className="flex flex-col justify-start items-center gap-2 w-full">
          <div className="flex gap-3 justify-start items-center w-full">
            <h1
              className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}
            >
              Popular Blogs:
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
          {articles?.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.image}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
