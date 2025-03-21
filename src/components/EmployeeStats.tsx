import { Card, Text, Group, ThemeIcon,  } from "@mantine/core";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { User, Menu, Info } from "lucide-react";
import file from "../assets/file.svg"
import { Progress, Tooltip as MantineTooltip } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import { useState } from "react";

const data = [
  { name: "Full Time", value: 1001, color: "#5B3FB8" },
  { name: "Part Time", value: 500, color: "#D97745" }, 
  { name: "Contract", value: 103, color: "#2D8F4E" },
  { name: "Temporary", value: 6, color: "#3469F0" },
];

 const barData = [
  { week: 'Mon', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { week: 'Tue', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { week: 'Wed', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { week: 'Thu', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { week: 'Fri', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { week: 'Sat', Smartphones: 750, Laptops: 600, Tablets: 1000 },
  { week: 'Sun', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];


const EmployeeStats = () => {
  const [workingType, setWorkingType] = useState(false);
  const handleCreateEmployeeClick = () => {
    setWorkingType(true);
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {/* Employment Type */}
      <Card shadow="sm" padding="lg" radius="lg" className="w-full bg-white border border-gray-200 rounded-2xl">
        <Group>
          <ThemeIcon variant="light" color="#5B3FB8">
            <User size={16} />
          </ThemeIcon>
          <Text style={{ fontWeight: 600 }}>Employment Type</Text>
        </Group>

        <div className="flex justify-between items-center mt-2">
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

      {/* Working Type */}
      <Card shadow="sm" padding="lg" radius="lg" className="w-full bg-white border border-gray-200 rounded-2xl">
        <Group>
          <ThemeIcon variant="light" color="orange">
            <Menu size={16} />
          </ThemeIcon>
          <Text fw={600}>Working Type</Text>
        </Group>

       
       
              {!workingType ? (

                <div>
                   <div className="space-y-2 mt-4 flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[Orange]" />
            <Text size="sm" color="#908C9C">Remote</Text>
            </div>
            <Text color="#48464E" fw={600}>0</Text>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[#E68057]" />
            <Text size="sm" color="#908C9C">Hybrid</Text>
            </div>
            <Text color="#48464E" fw={600}>0</Text>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[#69615e]" />
            <Text size="sm" color="#908C9C">Onsite</Text>
            </div>
            <Text color="#48464E" fw={600}>0</Text>
          </div>
          
          
        </div>
         
        <div className="text-center mt-6 lg:px-20 flex flex-col items-center ">
          <img src={file} alt="file"  />
          <Text fw={600} className="text-gray-500">
            No <span className="text-orange-500 border-b">Data</span>
          </Text>
          <Text size="sm" className="text-gray-500">
            So sorry, no data to display here now. Create an employee to get started.
          </Text>
          
            <button
          onClick={handleCreateEmployeeClick}
          className="mt-4 px-8 lg:px-[4rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
        >
         Create Employee
        </button>
        </div>
                </div>
       

               ) : (

                <div>
                  <div className="space-y-2 mt-4 flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[Orange]" />
            <Text size="sm" color="#908C9C">Remote</Text>
            </div>
            <Text color="#48464E" fw={600}>1,400</Text>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[#E68057]" />
            <Text size="sm" color="#908C9C">Hybrid</Text>
            </div>
            <Text color="#48464E" fw={600}>250</Text>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[#69615e]" />
            <Text size="sm" color="#908C9C">Onsite</Text>
            </div>
            <Text color="#48464E" fw={600}>259</Text>
          </div>
          
          
        </div>
        <BarChart className="pt-8"
      h={300}
      data={barData}
      dataKey="week"
      xAxisLabel="Days"
      yAxisLabel="Number of Users"
     
      type="stacked"
      series={[
        { name: 'Smartphones', color: '#964423' },
        { name: 'Laptops', color: '#E68057' },
        { name: 'Tablets', color: '#F0B29A' },
      ]}
    />
                </div>
    )}


      
      </Card>
      
    </div>
    <div className=" p-6 space-y-6 max-w-full bg-white border border-gray-200 rounded-2xl mt-8 ">
        <Group>
          <ThemeIcon variant="light" color="#5B3FB8">
            <User size={16} />
          </ThemeIcon>
          <Text style={{ fontWeight: 600 }}>Gender Distribution</Text>
        </Group>
            <Progress.Root size={35}>
      <MantineTooltip label="Male(1000) – 35Gb">
        <Progress.Section value={35} color="#3E1C96">
          {/* <Progress.Label style={{fontWeight: 500, fontSize: 18}}>Male(1000)</Progress.Label> */}
          <p className="font-[500] text-sm lg:text-[20px] text-white">Male(1000)</p> 
        </Progress.Section>
      </MantineTooltip>

      <MantineTooltip label="Female(600) – 35Gb">
        <Progress.Section value={35} color="#9E8DCA">
          {/* <Progress.Label style={{fontWeight: 500}}>Female(600)</Progress.Label> */}
          <p className="font-[500] text-sm lg:text-[20px] text-white">Female(600)</p> 
        </Progress.Section>
      </MantineTooltip>

      <MantineTooltip label="Other(10) – 30Gb">
        <Progress.Section value={30} color="#D8D2EA">
          {/* <Progress.Label style={{fontWeight: 500, color: "#3E1C96"}}>Other(10)</Progress.Label> */}
          <p className="font-[500] text-sm lg:text-[20px] text-[#3E1C96]">Others(10)</p> 
        </Progress.Section>
      </MantineTooltip>
    </Progress.Root>
    <div>
      <div className="flex items-center space-x-2 text-gray-500 text-sm py-3">
                <Info size={16} />
                <span className="font-medium text-[16px] pl-2">Representing 62.3% of the total workforce, males constitute the majority in the company.</span>
              </div>
      <div className="flex items-center space-x-2 text-gray-500 text-sm py-3">
                <Info size={16} />
                <span className="font-medium text-[16px] pl-2">Accounting for 37.4%, females form a significant proportion of the workforce.</span>
              </div>
      <div className="flex items-center space-x-2 text-gray-500 text-sm py-3">
                <Info size={16} />
                <span className="font-medium text-[16px] pl-2">Representing 0.3%, this category highlights the presence of employees who identify outside the traditional binary gender classifications.</span>
              </div>
      
    </div>

      </div>
    </div>
  );
};

export default EmployeeStats;
