"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  AtSymbolIcon,
  GlobeAltIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

const latestBlogs = [
  {
    id: "blog-01",
    title: "How to convert image to word document?",
    link: "/blogs/how-to-convert-image-to-word",
    date: "July 15, 2024",
  },
  {
    id: "blog-02",
    title: "How to translate picture?",
    link: "/blogs/how-to-translate-picture",
    date: "August 5, 2024",
  },
  {
    id: "blog-03",
    title: "How to Extract text from picture",
    link: "/blogs/how-to-extract-text-from-picture",
    date: "October 12, 2024",
  },
];

const companyContactInfo = [
  {
    id: "contact-01",
    title: "info@imagetotext.io",
    icon: <AtSymbolIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />,
  },
  {
    id: "contact-02",
    title: "www.imagetotext.io",
    icon: <GlobeAltIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />,
  },
  {
    id: "contact-03",
    title: "New York, America",
    icon: <MapPinIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />,
  },
];

const socials = [
  {
    id: "social-01",
    icon: "twitter",
    url: "www.twitter.com",
  },
  {
    id: "social-02",
    icon: "facebook",
    url: "www.facebook.com",
  },
  {
    id: "social-03",
    icon: "linkedin",
    url: "www.linkedin.com",
  },
];

const footerLinks = [
  {
    id: "link-01",
    title: "contactusTitle",
    link: "/contact-us",
  },
  {
    id: "link-02",
    title: "aboutusTitle",
    link: "/about-us",
  },
  {
    id: "link-03",
    title: "privacyAndPolicy",
    link: "/privacy-policy",
  },
  {
    id: "link-04",
    title: "termAndCondition",
    link: "/terms-conditions",
  },
];

export default function Footer() {
  const t = useTranslations("common");
  return (
    <footer className="border-t bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t("companyName")}
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {t("companyDescription")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t("latestBlogsTitle")}
            </h3>
            <ul className="mt-2 space-y-4">
              {latestBlogs.map((blog) => (
                <li key={blog.id} className="flex items-start space-x-3">
                  <ChevronRightIcon className="h-3 w-3 mt-3 text-blue-800" />
                  <div className="flex-1">
                    <Link
                      href={blog.link}
                      className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      {blog.title}
                    </Link>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t("socials")}
            </h3>
            <ul className="mt-2 space-y-3">
              {companyContactInfo.map((info) => (
                <li key={info.id} className="flex items-center space-x-2">
                  {info.icon}
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {info.title}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ul className="flex space-x-4">
                {socials.map((social) => (
                  <li key={social.id}>
                    <SocialIcon
                      network={social.icon}
                      url={social.url}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t("copyright")}&copy; {new Date().getFullYear()}{" "}
            <b className="font-semibold">{t("companyName")}</b>{" "}
            {t("reservedRights")}
          </p>
          <ul className="flex space-x-5 text-sm p-3">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.link} className="hover:underline">
                  {t(link.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
