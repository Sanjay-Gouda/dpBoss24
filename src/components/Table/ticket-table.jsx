/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../Constants/httpinstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketTable = () => {
  const headers = ["SR No", "Schedule Time", "Ticket Id"];

  const token = localStorage.getItem("admin_token");
  const [generatedId, setGeneratedId] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const getUrls = async () => {
    try {
      const data = await fetch(
        `${API_ENDPOINT}/satta/admin/table-data`,
        requestOptions
      );
      const res = await data.json();

      console.log(res.result, "res");
      setGeneratedId(res.result);
    } catch (err) {
      console.log(err, "Error");
    }
  };

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <>
      <div className="flex flex-col ">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="uppercase text-white odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <tr>
                    {headers?.map((header) => (
                      <th key={header} scope="col" className="px-6 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {generatedId?.map((item, ind) => (
                    <tr
                      key={item?._id}
                      className="border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50 transition duration-300 ease-in-out hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {ind + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.schedule}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default TicketTable;
