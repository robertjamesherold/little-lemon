import type { Step2DetailsProps } from "./types";
import { NameField, EmailField, PhoneField } from "./fields";
import { AddressField } from './fields/StreetField'

export function Step2Details({ data, setData }: Step2DetailsProps) {
  const handleNameChange = (value: string[]) => {
    setData({
      ...data,
      vorname: value[0],
      nachname: value[1],
    });
  };

  const handleAddressChange = (value: string[]) => {
    setData({
      ...data,
      address: value[0],
      number: value[1],
      postal: value[2],
      city: value[3]
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-gray-900">Enter your details</h3>

      <NameField
        value={[data.vorname || "", data.nachname || ""]}
        onChange={handleNameChange}
      />

      <EmailField
        value={data.email}
        onChange={(value) => setData({ ...data, email: value })}
      />

      <PhoneField
        value={data.phone}
        onChange={(value) => setData({ ...data, phone: value })}
      />

      <AddressField
        value={[data.address || "", data.number || "", data.postal || "", data.city || ""]}
        onChange={handleAddressChange}
      />
    </div>
  );
}