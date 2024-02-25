import React from "react";

const Options = [
  {
    label: "10:15 AM:11:15 AM",
    value: "10-11 AM",
  },
  {
    label: "11:15 AM:12:15 AM",
    value: "11-12 AM",
  },
  {
    label: "12:15 AM:01:15 PM",
    value: "12-01 PM",
  },
  {
    label: "01:15 PM:02:15 PM",
    value: "01-02 PM",
  },
  {
    label: "02:15 PM:03:15 PM",
    value: "02-03 PM",
  },
  {
    label: "03:15 PM:04:15 PM",
    value: "03-04 PM",
  },
  {
    label: "04:15 PM:05:15 PM",
    value: "04-05 PM",
  },
  {
    label: "05:15 PM:06:15 PM",
    value: "05-06 PM",
  },
  {
    label: "06:15 PM:07:15 PM",
    value: "06-07 PM",
  },
  {
    label: "07:15 PM:08:15 PM",
    value: "07-08 PM",
  },
  {
    label: "08:15 PM:09:15 PM",
    value: "08-09 PM",
  },
  {
    label: "09:15 PM:10:15 PM",
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
        {Options?.map((opt, ind) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
