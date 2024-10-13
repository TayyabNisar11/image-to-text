import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default async function AppLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <PageWrapper>{children}</PageWrapper>
    </NextIntlClientProvider>
  );
}
