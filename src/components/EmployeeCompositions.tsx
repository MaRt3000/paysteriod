import QuickActionCard from "./QuickActionCard"
import file from "../assets/file.svg"
import { User, Info, Users } from "lucide-react";

import EmployeeStats from "./EmployeeStats";

const EmployeeCompositions = () => {
  return (
      <div className="space-y-10 bg-white p-6 m-4 border border-gray-200 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">Employee Compositions</h1>
            <p className="text-[#908C9C] text-[16px]">A Composition and distributions of your employees across specific parameters</p>
          </div>
          <label htmlFor="datetime" className="text-[#344054] text-sm font-medium flex items-center border border-[#D0D5DD] rounded-2xl px-3 py-1">Date:
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#667085]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </label>
        </div>
        <div className="flex flex-col lg:flex-row   w-full mx-auto  gap-4">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl 1/3 lg:w-[60%]">
            {/* Header */}
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#EDE6FD] rounded-lg">
                <User className="text-[#5B3FB8]" size={16} />
              </div>
              <h2 className="text-lg font-semibold text-[#2B2A2F]">Overview</h2>
            </div>

            {/* Total Employees */}
            <div className="mt-4 p-4 bg-[#F4F0FE] rounded-2xl flex items-start space-x-3">
              <Users className="text-[#5B3FB8] text-[16px]" size={24} />
              <div>
                <p className="text-gray-700">Total of Employees</p>
                <p className="text-4xl font-bold text-[#5B3FB8]">0</p>
              </div>
            </div>

            {/* Other Details */}
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-gray-500 text-sm py-3">
                <Info size={14} />
                <span className="font-medium">Other Details</span>
              </div>

              <div className="mt-3 space-y-6 text-gray-700">
                <p className="flex justify-between">
                  Active Employees:{" "}
                  <span className="text-green-600 font-medium">0 personnel</span>
                </p>
                <p className="flex justify-between">
                  Inactive Employees:{" "}
                  <span className="text-red-500 font-medium">0 personnel</span>
                </p>
                <p className="flex justify-between">
                  Paysteriod App:{" "}
                  <span className="text-orange-500 font-medium">0 personnel</span>
                </p>
              </div>
            </div>
          </div>
          <div className="2/3 w-full">
            <QuickActionCard
            imageSrc={file}
            subtitle={<>No <span className="text-[#E07A4E] border-b">Data</span></> }
            title="Department Distribution"
            description="So sorry, no data to display here now. Create Department to get Started"
            buttonText="Create Department"
            onButtonClick={() => alert("Getting Started!")}
           
          />
          </div>
        </div>



        <EmployeeStats />
      </div>
    )
  }

export default EmployeeCompositions