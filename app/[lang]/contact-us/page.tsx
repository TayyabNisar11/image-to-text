"use client";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function Example() {
  const t = useTranslations("common");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="relative   my-10 bg-white ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-6 pt-10 sm:pt-20 lg:static lg:px-8 lg:py-20">
            {" "}
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {t("getInTouch")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t("contactusPageDescription")}
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-gray-900"
                    >
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 pb-6 pt-10 sm:pb-20 lg:px-8 lg:py-20"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {t("firstName")}
                  </label>
                  <div className="mt-2.5">
                    <Input
                      id="first-name"
                      {...register("firstName")}
                      type="text"
                      autoComplete="given-name"
                      placeholder={t("firstName")}
                      className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {t("lastName")}
                  </label>
                  <div className="mt-2.5">
                    <Input
                      id="last-name"
                      {...register("lastName")}
                      type="text"
                      autoComplete="family-name"
                      placeholder={t("firstName")}
                      className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {t("email")}
                  </label>
                  <div className="mt-2.5">
                    <Input
                      id="email"
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      placeholder={t("email")}
                      className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {t("message")}
                  </label>
                  <div className="mt-2.5">
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      placeholder={t("yourMessage")}
                      className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  type="submit"
                  className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("sendMessageButton")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
