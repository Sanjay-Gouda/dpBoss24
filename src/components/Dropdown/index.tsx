import React from "react";

const Options = [
  {
    label: "SUNDAY MILAN NIGHT",
    value: "SUNDAY MILAN NIGHT",
  },
  {
    label: "SUNDAY MILAN DAY",
    value: "SUNDAY MILAN DAY",
  },
  {
    label: "TIME BAZAR SUNDAY NIGHT",
    value: "TIME BAZAR SUNDAY NIGHT",
  },
  {
    label: "TIME BAZAR SUNDAY",
    value: "TIME BAZAR SUNDAY",
  },
];

const SelectOption = ({ handleOptionChange }) => {
  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Select Bazar
      </label>
      <select
        onChange={handleOptionChange}
        id="countries"
        className="bg-gray-50 m-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected value="">
          Choose a Bazar
        </option>
        {Options?.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
