import React from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <>
      <span className="w-[25rem]">Street Address</span>
      <span className="w-[25rem]">0156241893525</span>
      <span className="w-[7rem]">xyz@gnail.com</span>
    </>
  );
};

export default function ClientProfile({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  const data = [
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    {
      Image: "image1.jpg",
      Name: "John Doe",
      CompanyName: "ABC Inc.",
      Email: "johndoe@example.com",
      IPAddress: "192.168.1.1",
      RegistrationDate: "2023-09-01",
      UploadedDocuments: true,
      Verified: true,
      Unverified: false,
      Activate: true,
    },
    // Add more data objects as needed
  ];

  const getStatusBadge = (status: any) => {
    return status ? (
      <FaCheckCircle className="m-auto" color={"#66bd0f"} />
    ) : (
      <FaCheckCircle className="m-auto" color={"#ed4d19"} />
    );
  };
  return (
    <>
      {" "}
      <div className="lg:w-3/4 lg:mx-auto">
        <section className="  my-8">
          <h1 className="font-bold text-4xl text-Heading text-center">
            User management hub:
            <span className="text-orange font-bold">
              Admin&apos;s control centre
            </span>
          </h1>
        </section>
        <div className="flex w-5/5 p-4 justify-center relative">
          <span
            style={{ left: "2%" }}
            className="absolute inset-y-0 left-0 pl-3 flex items-center"
          >
            <FaSearch className="text-gray-400" />
          </span>
          <input
            style={{ height: 56 }}
            type="text"
            placeholder="search by email, company name or listing id"
            className="pl-10 w-4/5 pr-4 py-2 border rounded-l-2xl focus:outline-none focus:ring "
          />
          <button className="w-1/5 bg-white px-4 py-2 border rounded-r-2xl focus:outline-none focus:ring text-[#0E172C]">
            Find Profile{" "}
          </button>
        </div>
      </div>
      <div className="mt-10 shadow-md rounded-md">
        <div className="w-full overflow-x-scroll">
          <div className="w-[60rem] md:w-full">
            <table className="min-w-full">
              <thead className="bg-[#FF6A1880]">
                <tr>
                  <th className="p-4">Image</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Company Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">IP Address</th>
                  <th className="p-4">Registration Date</th>
                  <th className="p-4">Uploaded Documents</th>
                  <th className="p-4">Verified</th>
                  <th className="p-4">Unverified</th>
                  <th className="p-4">Activate</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="mb-2">
                    <td className="text-center">{item.Image}</td>
                    <td className="text-center">{item.Name}</td>
                    <td className="text-center">{item.CompanyName}</td>
                    <td className="text-center">{item.Email}</td>
                    <td className="text-center">{item.IPAddress}</td>
                    <td className="text-center">{item.RegistrationDate}</td>
                    <td>{getStatusBadge(item.UploadedDocuments)}</td>
                    <td>{getStatusBadge(item.Verified)}</td>
                    <td>{getStatusBadge(item.Unverified)}</td>
                    <td>{getStatusBadge(item.Activate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section className="w-5/5 flex justify-between my-10">
        <div className="w-3/5"><div className="w-full overflow-x-scroll">
          <div className="w-[60rem] md:w-full">
          <h1 className="font-bold text-4xl text-Heading my-10">
          Login

          <span className="text-orange font-bold">
              Details
            </span>
           
          </h1>
            <table className="min-w-full">
              <thead className="bg-[#FF6A1880]">
                <tr>
                 
                  <th className="p-4">IP Address</th>
                  <th className="p-4">Login Date</th>
                  <th className="p-4">Login Time</th>

                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="mb-2">
                    <td className="text-center">{item.IPAddress}</td>
                    <td className="text-center">{item.RegistrationDate}</td>
                    <td className="text-center">{item.RegistrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div></div>
        <div className="w-2/5 flex flex-col justify-between items-end">
          <img width={315} height={181} src={'/Dashboard/admin/profileMangement1.svg'}></img>
          <img width={315} height={181} src={'/Dashboard/admin/profileManagement2.svg'}></img>

        </div>
      </section>
    </>
  );
}
