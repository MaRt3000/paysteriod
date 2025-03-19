
import { AppShell, Burger, Group,  Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../assets/logo.svg';
import lock from '../assets/lock.svg';
import sbsc from '../assets/sbsc.svg';
import notification from '../assets/notification.svg';
import n2 from '../assets/n2.svg';
import profile from '../assets/profile.svg';
import QuickActionSection from './QuickActionSection';
import EmployeeCompositions from './EmployeeCompositions';
import UrgentTask from './UrgentTask';
import PayrollProcessing from './PayrollProcessing';
import { useState } from "react";
import {  UnstyledButton } from "@mantine/core";
import { ChevronUp, ChevronDown } from "lucide-react";

  
const DashBoard = () => {
    const [opened, { toggle }] = useDisclosure();
    const [open, setOpened] = useState(false);
    
  return (
   <AppShell
      layout="alt"
      header={{ height: 100 }}
      
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    
      padding={{ base: 2, sm: 40 }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" >
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center gap-2'>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" className='' />
            <div className='flex flex-col items-center justify-center lg:flex-row gap-2'>
                <img src={sbsc} alt="sbsc logo"  />
                <p className='bg-[#F0EEF7] text-[#3E1C96] text-[10px] md:text-[12px] rounded-xl px-2'>Premium Subscription</p>
            </div>
            </div>
         <div className='f'>
            
            <div className='flex items-center gap-2'>
                <img src={notification} alt="notification"   className='' />
                <img src={n2} alt=""   className='' />
                <img src={profile} alt="profile"   className='' />
            </div>
         </div>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#3E1C96', color: 'white' }}>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <img src={logo} alt="logo" width={300} height={300}  className='pb-10' />
          <Text color='#D8D2EA'>MAIN MENU</Text>
        </Group>
       <div className='flex flex-col gap-10'>
         <div className='flex flex-col text-[#D8D2EA] gap-2 py-6 pl-4'>
            <div className='flex items-center gap-[14px] ml-[-16px] p-4 rounded-xl font-bold bg-[#E16635]'>
                <img src={lock} alt="logo"   className='' />
                <p className='text-white'>Dashboard</p>
            </div>
            
              <div className='pt-6'>
      {/* Toggle Button */}
      <UnstyledButton
        onClick={() => setOpened(!open)}
        className={`flex items-center justify-between w-full text-white font-semibold ${open ? 'bg-[#5B3FB8] p-4 rounded-2xl' : ''}`}
      >
        <Group>
          <div className='flex items-center gap-2 '>
             <img src={lock} alt="logo"   className='' />
          <Text>Employee Management</Text>
          </div>
        </Group>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </UnstyledButton>

      {/* Dropdown Items */}
      {open && (
        <div className="mt-3 space-y-8 text-white bg-[#5B3FB8] p-8 rounded-2xl">
          <div><Text className="cursor-pointer hover:text-gray-300 ">Dashboard</Text></div>
         <div className=''> <Text className="cursor-pointer hover:text-gray-300">Employee List</Text></div>
          <div><Text className="cursor-pointer hover:text-gray-300">Create New Employee</Text></div>
        </div>
      )}
    </div>
            
            
            <div className='flex items-center gap-[14px] pt-6'>
                <img src={lock} alt="logo"   className='' />
                <p>Payroll Management</p>
            </div>
            <div className='flex items-center gap-[14px] pt-6'>
                <img src={lock} alt="logo"   className='' />
                <p>Leave Management</p>
            </div>
            <div className='flex items-center gap-[14px] pt-6'>
                <img src={lock} alt="logo"   className='' />
                <p>Report</p>
                </div>
    
        </div>
        <Text color='#D8D2EA'>OTHERS</Text>
        <div className='pl-4 text-[#D8D2EA]'>
             <div className='flex items-center gap-[14px] '>
                <img src={lock} alt="logo"   className='' />
                <p>General Setting</p>
            </div>
             <div className='flex items-center gap-[14px] pt-6'>
                <img src={lock} alt="logo"   className='' />
                <p>User Management</p>
            </div>
            <div className='flex items-center gap-[14px] pt-6'>
                <img src={lock} alt="logo"   className='' />
                <p>Support Center</p>
            </div>
            <div className='flex items-center gap-[14px] pt-6'>
                <img src={lock} alt="logo"   className='' />
                <p>Log Out</p>
                </div>
    
        
        </div>
       </div>
      </AppShell.Navbar>
      <AppShell.Main className="bg-[#F7F6FB] ">
        <div>
            <QuickActionSection />
            <EmployeeCompositions />
            <UrgentTask />
            <PayrollProcessing />
        </div>
      </AppShell.Main>
     
     
    </AppShell>
  )
}

export default DashBoard
