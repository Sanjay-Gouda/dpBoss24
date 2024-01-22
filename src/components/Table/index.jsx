/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { API_ENDPOINT_LOCAL } from "../Constants/httpinstance";

// type TyoutubeUrl = {
//   url: string;
//   _id: string;
// };

const Table = ({ headers, youtubeUrl, setYoutubeUrl }) => {
  console.log({ youtubeUrl });
  const token = localStorage.getItem("admin_token");
  // const [youtubeUrl, setYoutubeUrl] = useState();

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
  };
  const getUrls = async () => {
    try {
      const data = await fetch(
        `${API_ENDPOINT_LOCAL}/video/list`,
        requestOptions
      );
      const res = await data.json();

      setYoutubeUrl(res.result);
    } catch (err) {
      console.log(err, "Error");
    }
  };

  useEffect(() => {
    getUrls();
  }, []);

  const handleDelete = async (id) => {
    const isItConfirm = confirm("Are you sure ?");
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    if (isItConfirm) {
      try {
        await fetch(`${API_ENDPOINT_LOCAL}/video/delete/${id}`, requestOptions);

        const remainedData = youtubeUrl?.filter((item) => item._id !== id);

        setYoutubeUrl(remainedData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="uppercase text-white odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <tr>
                    {/* <th scope="col" className="px-6 py-3">
                      SR No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Youtube URLS
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th> */}

                    {headers?.map((header) => (
                      <th key={header} scope="col" className="px-6 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {youtubeUrl?.map((item, ind) => (
                    <tr
                      key={item?._id}
                      className="border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50 transition duration-300 ease-in-out hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {ind + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item?.url}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                          onClick={() => handleDelete(item?._id)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </td>
                    </tr>
                  ))}
                  {/* <tr className="border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50 transition duration-300 ease-in-out hover:bg-neutral-300">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      https://www.youtube.com/watch?v=SukK3lVIDyk
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;