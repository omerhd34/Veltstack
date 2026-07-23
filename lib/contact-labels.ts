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
  return options?.find((option) => option.value === value)?.label ?? value;
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
