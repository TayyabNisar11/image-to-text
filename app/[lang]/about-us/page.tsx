import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("aboutUs");
  const statsTranslations = useTranslations("statistics");

  const stats = [
    {
      label: t("stats.imagesProcessed"),
      value: "500,000",
    },
    { label: t("stats.textAccuracy"), value: "99%" },
    { label: t("stats.usersServed"), value: "1 million" },
  ];

  return (
    <div className="bg-white w-full mb-12">
      <div className="container mx-auto">
        <div className="w-full">
          <div className="mx-auto w-full px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto w-full flex items-center justify-center flex-col gap-x-14 lg:mx-0 lg:flex lg:items-center">
              <div className="max-w-5xl lg:shrink-0 xl:w-full text-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {t("title")}
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 w-full px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t("missionTitle")}
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  {t("missionDescription")}
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-10">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
