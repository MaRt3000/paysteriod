import { Progress } from '@mantine/core';

import searchimg from '../assets/searchimg.svg';
import { FC } from "react";
import { ChevronRight, Menu } from "lucide-react";
import QuickActionCard from './QuickActionCard';
import {  Text, Group, ThemeIcon,  } from "@mantine/core";
import { ArrowUpRight} from "lucide-react";



const tasks = [
  "Complete Company Profile Setting",
  "Complete Payment Integration for Payroll",
  "Create and Manage Approval Workflow",
  "Setup Paysteriod Wallet for payroll processing",
];
const QuickActionSection: FC = () => {
  return (
    <div className='flex flex-col lg:flex-row items-start justify-between w-full  mx-auto px-4 mt-4 lg:mt-6 gap-8'>
      <div className='flex flex-col gap-8 p-6 bg-white rounded-2xl  w-full lg:w-1/2'>
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
          <Progress color="orange" radius="lg" value={5} size="md" />
          <p className='text-[#908C9C] text-sm pt-4'>
            Setup is 5% completed. Complete to enjoy more out of paysteriod today!
          </p>
        </div>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-xl  border border-gray-200 hover:border-[#7E59E7] transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#E3DAF5] rounded-lg">
                  <Menu className="text-[#7E59E7]" size={16} />
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">{task}</span>
              </div>
              <ChevronRight className="text-gray-400 w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <QuickActionCard
          imageSrc={searchimg}
          buttonTab={<>
            <span>Manage Setup</span>
            <ArrowUpRight size={14} />
          </>}         
           title="Quick Action"
           subtitle={<>No Quick <span className="text-[#E07A4E] border-b">Action</span></> }
          description="So sorry, you currently do not have any quick action setup available. Add Quick action option for One step process."
          buttonText="Get Started"
          onButtonClick={() => alert("Getting Started!")}
        />
      </div>
    </div>
  )
}

export default QuickActionSection
