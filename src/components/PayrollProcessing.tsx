import { Card, Text, Group, ThemeIcon,  } from "@mantine/core";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import {  Menu } from "lucide-react";
import file from "../assets/file.svg"


const data = [
  { name: "Processed", value: 50, color: "#039855" },
  { name: "Pending", value: 35, color: "#FAD61A" }, 
  { name: "Error", value: 15, color: "#F04438" },
 
];


const PayrollProcessing = () => {
  return (
    <div className='space-y-10 bg-white p-6 m-4 border border-gray-200 rounded-2xl '>
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div>
            <h1 className="text-2xl">Payroll Processing</h1>
            <p className="text-[#908C9C] text-[16px]">An insight into payroll process across the organisation</p>
          </div>
          <div className='flex gap-2 lg:gap-8'>
             <div className='text-[#344054] text-sm font-medium flex items-center border border-[#D0D5DD] rounded-2xl px-3 py-1'>
             <label htmlFor="options" >Department:</label>
            <select id="options" name="options" className='text-[#E16635]'>
                <option value="SelectOption">Select Option</option>
                <option value="SelectOption">Option 1</option>
                <option value="SelectOption">Option 2</option>
            </select>
         </div>
            <label htmlFor="datetime" className="text-[#344054] text-sm font-medium flex items-center border border-[#D0D5DD] rounded-2xl px-3 py-1">Date:
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </label>
        
          
          </div>
        </div>
        

        <div>
      <div className="flex flex-col lg:flex-row gap-6  ">
      {/* Overview */}
      <Card shadow="sm" padding="lg" radius="lg" className="w-full bg-white border border-gray-200 rounded-xl lg:w-[50%] ">
        <Group>
          <ThemeIcon variant="light" radius="md" color="orange">
            <Menu size={16} />
          </ThemeIcon>
          <Text style={{ fontWeight: 600 }}>Overview</Text>
        </Group>

        <div className="flex justify-between items-center mt-4">
          <div className="space-y-2">
            {data.map((item) => (
              <div key={item.name} className="flex items-center space-x-2 ">
                <div className="w-1 h-2 rounded-2xl" style={{ background: item.color }} />
                <div className="mt-6">
                  <Text size="sm" color="#908C9C">{item.name}</Text>
                <Text color="#48464E" fw={600} className="text-2xl text-[#48464E]">
                  {item.value}
                </Text>
                </div>
              </div>
            ))}
          </div>

           {/* Pie Chart */}
                    <PieChart width={300} height={300}>
                      <Pie 
                        data={data} 
                        dataKey="value" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={80} 
                        fill="#8884d8"
                        label={(entry) => entry.value}
                      >
                        {data.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
        </div>
      </Card>

      {/* Payroll Distribution */}
      <Card shadow="sm" padding="lg" radius="lg" className="w-full bg-white border border-gray-200 rounded-xl  ">
        <Group>
          <ThemeIcon variant="light" radius="md" color="orange">
            <Menu size={16} />
          </ThemeIcon>
          <Text fw={600} color="#2B2A2F">Payroll Distribution</Text>
        </Group>

        <div className="space-y-2 mt-4 flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-2">
               
            <Text size="sm" color="#2B2A2F">Highest Grossing Department ~ <span className="text-[#E16635]">No Data</span></Text>
            </div>
            <Text color="#3E1C96" style={{ fontWeight: 'bold', fontSize: '32px' }} fw={600}>&#8358; 0</Text>                      </div>
         
          
          
        </div>
       

        {/* No Data Message */}
        <div className="text-center mt-6 lg:px-20 flex flex-col items-center">
          <img src={file} alt="file"  />
          <Text fw={600} className="text-gray-500">
            No <span className="text-orange-500">Data</span>
          </Text>
          <Text size="sm" className="text-gray-500">
            So sorry, no data to display here now. Setup payroll to get Started
          </Text>
          
           <button
         
          className="mt-4 px-10 lg:px-[8rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
        >
          Setup Payroll
        </button>
        </div>
      </Card>
      
    </div>
   
    </div>



    {/* Payroll Distribution */}
      <Card shadow="sm" padding="lg" radius="lg" className="w-full bg-white border border-[#D0D5DD] rounded-2xl space-y-6">
        <Group>
          <ThemeIcon variant="light" radius="md" color="orange">
            <Menu size={18} />
          </ThemeIcon>
          <Text fw={600} color="#2B2A2F">Payroll Expense Distribution</Text>
        </Group>

        <div className="space-y-2 mt-4 flex flex-col lg:flex-row gap-6 items-center justify-between  bg-white p-6 border border-gray-200 rounded-2xl">
          
           
               <div className="lg:border-r pr-10 border-[#D0D5DD]">
                  <Text size="sm" color="#908C9C">Total Payroll Expense</Text>
                    <Text color="#3E1C96" style={{ fontWeight: 'bold', fontSize: '32px' }} fw={600}>&#8358; 0</Text>
                    <Text size="sm" color="#908C9C"><span className="text-[#1F9F7D]">0 % </span>increase vs last Year</Text>
               </div>
               <div className="lg:border-r pr-10 border-[#EAECF0]">
                  <Text size="sm" color="#908C9C">Highest Payroll Month</Text>
                    <Text color="#3E1C96" style={{ fontWeight: 'bold', fontSize: '32px' }} fw={600}>&#8358; 0</Text>
                    <Text size="sm" color="#908C9C">No Data</Text>
               </div>
               <div>
                  <Text size="sm" color="#908C9C">Highest Payrolled Department</Text>
                    <Text color="#3E1C96" style={{ fontWeight: 'bold', fontSize: '32px' }} fw={600}>&#8358; 0</Text>
                    <Text size="sm" color="#908C9C">No Data</Text>
               </div>
            
            
          
            
         
          
          
        </div>
       

        {/* No Data Message */}
        <div className="text-center mt-6 lg:px-20 flex flex-col items-center">
          <img src={file} alt="file"  />
          <Text fw={600} className="text-gray-500">
            No <span className="text-orange-500 border-b">Data</span>
          </Text>
          <Text size="sm" className="text-gray-500 text-lg lg:w-[50%]">
            So sorry, no data to display here now. Setup payroll to get Started
          </Text>
           <button
          
          className="mt-4 px-10 lg:px-[8rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
        >
          Setup Payroll
        </button>
          
        </div>
      </Card>
      
    </div>
  )
}

export default PayrollProcessing