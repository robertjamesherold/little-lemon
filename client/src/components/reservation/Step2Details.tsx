import type { Step2DetailsProps } from "./types";
import { NameField, EmailField, PhoneField } from "./fields";

export function Step2Details({
  data,
  setData,
}: Step2DetailsProps) {
  return (
    <div className="flex flex-col gap-4">
        <h3 className="text-gray-900">
          Enter your details
        </h3>
      <NameField
        value={data.name}
        onChange={(value) => setData({ ...data, name: value })}
      />
      <EmailField
        value={data.email}
        onChange={(value) => setData({ ...data, email: value })}
      />
      <PhoneField
        value={data.phone}
        onChange={(value) => setData({ ...data, phone: value })}
      />
    </div>
  );
}
