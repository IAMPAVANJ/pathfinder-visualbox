import React, { ChangeEvent } from "react";
// import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
// import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
// import clsx from 'clsx'
const Select = ({
  value,
  label,
  onChange,
  options,
  isDisabled,
}: {
  value: number | string;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  options: { value: number | string; name: string }[];
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-xs text-gray-400 ml-1">{label}</label>
      <select
        disabled={isDisabled}
        className="bg-gray-700 cursor-pointer hover:bg-gray-800 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
