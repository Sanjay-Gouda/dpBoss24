import React from "react";

const Options = [
  {
    label: "10-11 AM",
    value: "10-11 AM",
  },
  {
    label: "11-12",
    value: "11-12 AM",
  },
  {
    label: "12-01",
    value: "12-01 PM",
  },
  {
    label: "01-02",
    value: "01-02 PM",
  },
  {
    label: "02-03",
    value: "02-03 PM",
  },
  {
    label: "03-04",
    value: "03-04 PM",
  },
  {
    label: "04-05",
    value: "04-05 PM",
  },
  {
    label: "05-06",
    value: "05-06 PM",
  },
  {
    label: "06-07",
    value: "06-07 PM",
  },
  {
    label: "07-08",
    value: "07-08 PM",
  },
  {
    label: "08-09",
    value: "08-09 PM",
  },
  {
    label: "09-10",
    value: "09-10 PM",
  },
];

const SelectOption = ({ handleOptionChange }) => {
  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Select Time
      </label>
      <select
        onChange={handleOptionChange}
        id="countries"
        className="bg-gray-50 m-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected value="">
          Select Time
        </option>
        {Options?.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
