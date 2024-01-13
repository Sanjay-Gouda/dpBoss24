import React from "react";
import Table from "../Table";

const YoutubeTable = () => {
  const data = [
    { srno: 1, youtubrurl: "https://www.youtube.com/watch?v=YT8rY_o5VhY" },
    { srno: 2, youtubrurl: "https://www.youtube.com/watch?v=YT8rY_o5VhY" },
    { srno: 3, youtubrurl: "https://www.youtube.com/watch?v=YT8rY_o5VhY" },
    { srno: 4, youtubrurl: "https://www.youtube.com/watch?v=YT8rY_o5VhY" },
    { srno: 5, youtubrurl: "https://www.youtube.com/watch?v=YT8rY_o5VhY" },
  ];

  const headers = ["SR No", "Youtube Urls", "Action"];

  return (
    <section className="bg-primary  w-full ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <h1 className="text-sm font-bold  tracking-tight text-gray-900 md:text-lg ">
                Paste Youtube URL
              </h1>
              <input
                type="text"
                name="youtube"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-3"
                placeholder="url"
              />

              <button className=" w-full bg-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Upload Video
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <Table data={data} headers={headers} />
      </div>
    </section>
  );
};

export default YoutubeTable;