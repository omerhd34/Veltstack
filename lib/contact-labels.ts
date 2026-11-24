import { contactEn } from "@/messages/pages/iletisim/en";
import { contactTr } from "@/messages/pages/iletisim/tr";

export type ContactLocale = "tr" | "en";

type ContactLabelFields = {
  service: string;
  servicePackage: string;
  serviceTier: string;
  budget: string;
};

function findLabel(
  options: readonly { value: string; label: string }[] | undefined,
  value: string,
) {
  const label = options?.find((option) => option.value === value)?.label;
  if (label) return label;
  if (!value) return value;
  return value.charAt(0).toLocaleUpperCase("tr-TR") + value.slice(1);
}

export function resolveContactLabels(
  data: ContactLabelFields,
  locale: ContactLocale = "tr",
) {
  const contact = locale === "en" ? contactEn : contactTr;
  const packages =
    contact.servicePackages[
      data.service as keyof typeof contact.servicePackages
    ];

  return {
    service: findLabel(contact.serviceOptions, data.service),
    servicePackage: findLabel(packages, data.servicePackage),
    serviceTier: findLabel(contact.tierOptions, data.serviceTier),
    budget: findLabel(contact.budgetOptions, data.budget),
  };
}
