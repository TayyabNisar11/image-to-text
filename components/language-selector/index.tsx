"use client";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { CircleFlag } from "react-circle-flags";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

const languages = [
  { label: "EN", icon: "gb", value: "en" },
  { label: "NL", icon: "nl", value: "nl" },
];

const LanguageDropdown = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (language: any) => {
    router.push(pathname, { locale: language });
  };

  return (
    <>
      <Select value={locale} onValueChange={handleChange}>
        <SelectTrigger className="w-[90px] outline-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              <div className="flex items-center space-x-2">
                <CircleFlag
                  countryCode={language.icon}
                  style={{ width: "18px", height: "18px" }}
                />
                <span>{language.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default LanguageDropdown;
