import { ChevronRight, Menu } from 'lucide-react';
import searchimg from '../assets/searchimg.svg';
import { useState } from 'react';


const payrolls = [
  {
    title: "Payroll Approval",
    subtitle: "+ 3 payroll process await your approval",
  },
  {
    title: "Leave Approval ",
    subtitle: "+ 6 new leave await your approval",
  },
  {
    title: "Recruitment",
    subtitle: "+ 30 new application received",
  },
  {
    title: "Performance Management",
    subtitle: "+ 3 performance appraisal pending",
  },
 
];

const UrgentTask = () => {
  const [showPayrolls, setShowPayrolls] = useState(false);

  const handleGetStartedClick = () => {
    setShowPayrolls(true); 
   
  };

  return (
    <div className="bg-white p-6 m-4 border border-gray-200 rounded-xl shadow-sm">
      {!showPayrolls ? (
        <div>
          <div>
            <h1 className="text-2xl">
              Request: <span className="text-[#F04438]">Urgent Task</span>
            </h1>
            <p className="text-[#908C9C] text-[16px]">
              Stay in tune with and don’t miss out on the most pressing
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-6">
            <img src={searchimg} alt="" className="" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              No Urgent <span className="text-[#E07A4E] border-b">Task</span>
            </h3>
            <p className="text-gray-500 text-lg mt-2 lg:w-[60%]">
              So sorry, you currently do not have urgent / pending task that need
              your action. Setup workflow to get started
            </p>

            {/* CTA Button */}
            <button
              onClick={handleGetStartedClick}
              className="mt-4 px-10 lg:px-[8rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
            >
              Setup Workflow
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8 p-6 bg-white border border-gray-200 rounded-2xl">
          <div>
            <h1 className="text-2xl">
              Request: <span className="text-[#F04438]">Urgent Task</span>
            </h1>
            <p className="text-[#908C9C] text-[16px]">
              Stay in tune with and don’t miss out on the most pressing
            </p>
          </div>

          {/* Grid layout for payrolls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {payrolls.map((payroll, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-[#7E59E7] transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#F9E0D7] rounded-lg">
                    <Menu className="text-[#E16635]" size={16} />
                  </div>
                  <div>
                    <span className="text-[#48464E] font-bold text-sm md:text-base">
                      {payroll.title}
                    </span>
                    <p className="text-[#908C9C] text-sm">{payroll.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UrgentTask;