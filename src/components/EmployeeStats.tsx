import { Card, Text, Group, ThemeIcon,  } from "@mantine/core";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { User, Menu } from "lucide-react";
import file from "../assets/file.svg"
import { Progress, Tooltip as MantineTooltip } from '@mantine/core';

const data = [
  { name: "Full Time", value: 30, color: "#5B3FB8" },
  { name: "Part Time", value: 20, color: "#D97745" }, 
  { name: "Contract", value: 15, color: "#2D8F4E" },
  { name: "Temporary", value: 10, color: "#3469F0" },
];

const EmployeeStats = () => {
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

        <div className="space-y-2 mt-4 flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[Orange]" />
            <Text size="sm" color="#908C9C">Remote</Text>
            </div>
            <Text color="#48464E" fw={600}>25</Text>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[#E68057]" />
            <Text size="sm" color="#908C9C">Hybrid</Text>
            </div>
            <Text color="#48464E" fw={600}>35</Text>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
               <div className="w-1 h-2 rounded-2xl bg-[#69615e]" />
            <Text size="sm" color="#908C9C">Onsite</Text>
            </div>
            <Text color="#48464E" fw={600}>15</Text>
          </div>
          
          
        </div>
       

        {/* No Data Message */}
        <div className="text-center mt-6 lg:px-20 flex flex-col items-center">
          <img src={file} alt="file"  />
          <Text fw={600} className="text-gray-500">
            No <span className="text-orange-500 border-b">Data</span>
          </Text>
          <Text size="sm" className="text-gray-500">
            So sorry, no data to display here now. Create an employee to get started.
          </Text>
          
            <button
          
          className="mt-4 px-8 lg:px-[5.5rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
        >
         Create Employee
        </button>
        </div>
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
      <MantineTooltip label="Male(0) – 35Gb">
        <Progress.Section value={35} color="#3E1C96">
          <Progress.Label style={{fontWeight: 500}}>Male(0)</Progress.Label>
        </Progress.Section>
      </MantineTooltip>

      <MantineTooltip label="Female(0) – 35Gb">
        <Progress.Section value={35} color="#9E8DCA">
          <Progress.Label style={{fontWeight: 500}}>Female(0)</Progress.Label>
        </Progress.Section>
      </MantineTooltip>

      <MantineTooltip label="Other(0) – 30Gb">
        <Progress.Section value={30} color="#D8D2EA">
          <Progress.Label style={{fontWeight: 500, color: "#3E1C96"}}>Other(0)</Progress.Label>
        </Progress.Section>
      </MantineTooltip>
    </Progress.Root>

      </div>
    </div>
  );
};

export default EmployeeStats;
