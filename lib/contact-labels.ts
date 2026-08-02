import { contactTr } from "@/messages/pages/iletisim/tr";

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

export function resolveContactLabels(data: ContactLabelFields) {
  const packages =
    contactTr.servicePackages[
      data.service as keyof typeof contactTr.servicePackages
    ];

  return {
    service: findLabel(contactTr.serviceOptions, data.service),
    servicePackage: findLabel(packages, data.servicePackage),
    serviceTier: findLabel(contactTr.tierOptions, data.serviceTier),
    budget: findLabel(contactTr.budgetOptions, data.budget),
  };
}
