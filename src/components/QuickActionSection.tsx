import { useState } from 'react';
import { Progress } from '@mantine/core';
import searchimg from '../assets/searchimg.svg';
import { FC } from "react";
import { ChevronRight, CircleCheck, Menu } from "lucide-react";
import QuickActionCard from './QuickActionCard';
import { Text, Group, ThemeIcon } from "@mantine/core";
import { ArrowUpRight } from "lucide-react";

const tasks = [
  "Complete Company Profile Setting",
  "Complete Payment Integration for Payroll",
  "Create and Manage Approval Workflow",
  "Setup Paysteriod Wallet for payroll processing",
];
const taskColors = [
  "#3E1C96", 
  "#6C6975", 
  "#3E1C96", 
  "#3E1C96", 
];
const payrolls = [
  "Initiate Payroll Today !!",
  "Add / Upload to Create new employee",
  "Add a New Adminstrator",
  "Add Money to Paysteriod Wallet",
  "Another Quick action from Settings",
];

const QuickActionSection: FC = () => {
  const [showPayrolls, setShowPayrolls] = useState(false);

  const handleManageSetupClick = () => {
    setShowPayrolls(true); // Show payrolls
  };

  const handleGetStartedClick = () => {
    setShowPayrolls(true); // Show payrolls
    
  };

  return (
    <div className='flex flex-col lg:flex-row items-start justify-between w-full mx-auto px-4 mt-4 lg:mt-6 gap-8'>
      <div className='flex flex-col gap-8 p-6 bg-white rounded-2xl w-full lg:w-1/2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Group>
              <ThemeIcon variant="light" radius="md" color="orange">
                <Menu size={18} />
              </ThemeIcon>
              <Text fw={500} color="#2B2A2F">Things to do</Text>
            </Group>
          </div>
          <button className='text-[#D92D20] border-b text-lg hover:opacity-80 transition-opacity'>
            Dismiss
          </button>
        </div>
        <div className='w-full'>
          <Progress color="orange" radius="lg" value={75} size="md" />
          <p className='text-[#908C9C] text-sm pt-4'>
            Setup is 75% completed. Complete to enjoy more out of paysteriod today!
          </p>
        </div>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-[#7E59E7] transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#E3DAF5] rounded-lg">
                  <Menu className="text-[#7E59E7]" size={16} />
                </div>
                
                 <span style={{ color: taskColors[index] }} className="font-medium text-sm md:text-base">
                {task}
              </span>
              </div>
               {/* Conditionally render CircleCheck or ChevronRight */}
                {task === "Complete Payment Integration for Payroll" ? (
                  <ChevronRight className="text-[#908C9C] w-6 h-6" size={16} /> // ChevronRight for this task
                ) : (
                  <CircleCheck className="text-[#12B76A]  w-6 h-6" size={16} /> // CircleCheck for other tasks
                )}
              
            </div>
          ))}
        </div>
      </div>

      {/* QuickActionCard and Payrolls Container */}
      <div className='w-full lg:w-1/2'>
        {!showPayrolls ? (
          <QuickActionCard
            imageSrc={searchimg}
            buttonTab={
              <button className='flex gap-2 text-[#6C6975] items-center' onClick={handleManageSetupClick}>
                <span>Manage Setup</span>
                <ArrowUpRight size={14} />
              </button>
            }
            title="Quick Action"
            subtitle={<>No Quick <span className="text-[#E07A4E] border-b">Action</span></>}
            description="So sorry, you currently do not have any quick action setup available. Add Quick action option for One step process."
            buttonText="Get Started"
            onButtonClick={handleGetStartedClick}
          />
        ) : (
          <div className="space-y-4 p-6 bg-white border border-gray-200 rounded-2xl ">
          <div className='flex justify-between items-center pb-4'>
             <div className='flex items-center space-x-2'> <div className="p-2 bg-[#FDEFE8] rounded-lg">
            <Menu className="text-[#E07A4E]" size={16} />
            
          </div>
          <h2>Quick Action</h2></div>
              <button className='flex gap-2 text-[#6C6975] items-center' onClick={handleManageSetupClick}>
                <span>Manage Setup</span>
                <ArrowUpRight size={16} />
              </button>
          </div>
            
            {payrolls.map((payroll, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-[#7E59E7] transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#E3DAF5] rounded-lg">
                    <Menu className="text-[#7E59E7]" size={16} />
                  </div>
                  <span className="text-[#6C6975] font-medium text-sm md:text-base">{payroll}</span>
                </div>
                <ChevronRight className="text-gray-400 w-6 h-6" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickActionSection;