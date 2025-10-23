import { Input } from "../../form";

type AddressFieldProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export function AddressField({ value, onChange }: AddressFieldProps) {

const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newValue = e.target.value.replace(/[0-9]/g, ""); // entfernt alle Ziffern
  onChange([newValue, value[1], value[2], value[3]]);
};

   const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange([value[0], e.target.value, value[2], value[3]]);
  };

  const handlePostalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "").slice(0, 5);
    onChange([value[0], value[1], newValue, value[3]]);
};

   const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange([value[0], value[1], value[2], e.target.value]);
  };
  return (
      <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">

  <div className='flex w-10/12 sm:w-9/12'>
    <Input
      aria-label='address'
      label="Address*"
      name="address"
      type='address'
      value={value[0] || ""}
      onChange={handleAddressChange}
      placeholder="Your address"
      required
    />
    </div>
    <div className='flex w-2/12 sm:w-3/12'>
    <Input
      aria-label='number'
      label="No.*"
      name="number"
      type='text'
      value={value[1] || ""}
      onChange={handleNumberChange}
      placeholder="No."
      required
    />
    </div>
    </div>
    <div className="flex flex-row gap-4">
    <div className='flex w-4/11 sm:w-2/6'>
    <Input
      aria-label='postal/zipcode'
      label="Zip Code*"
      name="zipcode"
      type='zipcode'
      value={value[2] || ""}
      onChange={handlePostalChange}
      placeholder="Zip code"
      required
      
    />
    </div>
    <div className='flex w-7/11 sm:w-4/6'>
    <Input
      aria-label='city'
      label="City*"
      name="city"
      type='city'
      value={value[3] || ""}
      onChange={handleCityChange}
      placeholder="Your city"
      required
    />
    </div>
    </div>
    </div>
  );
}
