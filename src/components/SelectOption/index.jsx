import { useState } from "react";
import SelectOption from "../Dropdown";
import { API_ENDPOINT, API_ENDPOINT_LOCAL } from "../Constants/httpinstance";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TicketTable from "../Table/ticket-table";

const SelectOptionPage = () => {
  const ticketIdRegex = /\d{3}-\d{1}/;

  const [selectedOption, setSelectedOption] = useState();
  const [ticketValue, setTicketValue] = useState();
  const [loading, setLoading] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [callIdAPI, setCallIdAPI] = useState(false);

  const token = localStorage.getItem("admin_token");

  // useEffect(() => {
  //   toast.success("Welcome to the dashboard");
  // }, []);

  const handleValidateTicket = async () => {
    setLoading(true);
    const payload = {
      schedule: selectedOption,
      ticketValue,
      createdAt: createdAt,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      const res = await fetch(`${API_ENDPOINT}/satta/insert`, requestOptions);
      const data = await res.json();
      setLoading(false);

      if (data.type === "SUCCESS") {
        toast.success(data.message);
        setCallIdAPI(true);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value);
    var currentDate = new Date();

    // Define options for formatting the time
    let options = {
      hour12: false, // Use 24-hour format
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata", // Set the timezone to Asia/Kolkata
    };

    // Get the local time in 24-hour format as a string
    let localTime24 = currentDate.toLocaleTimeString("en-IN", options);

    const exactTime =
      currentDate.toISOString().split("T")[0] + "T" + localTime24 + ".000Z";

    setCreatedAt(exactTime);
  };

  const handleTicketValue = (e) => {
    setTicketValue(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "") {
      toast.info("Please Select an Option");
    } else if (ticketValue === "") {
      toast.info("Please Enter Ticket Number");
    } else if (!ticketIdRegex.test(ticketValue)) {
      toast.info("Invalid ticket id !! Ticket Id must contain hyphen");
    } else {
      handleValidateTicket();
      // alert("called");
    }
  };

  return (
    <section className="bg-primary  w-full ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Welcome to the Dashboard
            </h1>
            <SelectOption handleOptionChange={handleOptionChange} />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Enter Ticket Number
              </label>
              <input
                type="text"
                name="ticket"
                value={ticketValue}
                onChange={handleTicketValue}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="ticket no"
              />
            </div>

            <button
              onClick={handleSubmit}
              className=" w-full bg-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading ? " Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>

      <TicketTable callIdAPI={callIdAPI} />

      <ToastContainer position="top-center" />
    </section>
  );
};

export default SelectOptionPage;
