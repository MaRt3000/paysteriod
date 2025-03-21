import { Card, Text, Group,  CopyButton, ThemeIcon } from '@mantine/core';
import { Eye, Clipboard, Menu, ChevronRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import PayrollTransaction from './PayrollTransaction';
import mastercard from '../assets/mastercard.svg'
import Stripe from '../assets/Stripe.svg'
import money from '../assets/money.svg'
import moneyg from '../assets/moneyg.svg'
import moneyb from '../assets/moneyb.svg'
import bank from '../assets/bank.svg'
import DashBoard from './DashBoard';
const WalletManagement= () => {


  return (
     <div>
        <DashBoard />
        <div className='bg-[#F7F6FB] px-4 mt-[-36rem] py-10 lg:pl-[21rem] lg:mt-[-43rem] lg:pt-16 lg:pr-8'>
        <div className="pb-8 grid gap-6 lg:grid-cols-2">
      {/* Wallet Section */}
      <Card shadow="sm" p="lg" radius="md" withBorder className="w-full">
        <Group justify="space-between">
            <div className='flex items-center gap-2'>
                <ThemeIcon variant="light" radius="md" color="orange">
                            <Menu size={18} />
                          </ThemeIcon>
          <Text size="sm" fw={500} color="gray">SBSC WALLET</Text>
            </div>
            <p className='border border-[#D0D5DD] rounded-2xl py-1 text-[12px]  px-3'>Add Money <span className='bg-[#df977a] text-white px-[2px] ml-2 rounded-sm'>+</span></p>
          
        </Group>
        
        <Group mt="md" align="center">
         
          <p className="font-bold text-xl lg:text-[32px] text-[#3E1C96]">₦ 32,904,904.33</p>
          <Eye size={20} color='#3E1C96' className="text-gray-500" />
        </Group>
        <div className='flex gap-4 items-center mt-4'>
             <img src={money} />
        <Text size="sm"  color="gray">
          ₦ 50,000,000 was added in the last 20 days
        </Text>
        </div>
        <div className='flex gap-4 items-center mt-4'>
            <img  src={moneyg} />
        <Text size="sm"  color="gray">
          3 payroll initiated over the last 20 days at ₦ 10,240,943 each
        </Text>
        </div>
        <div className='flex gap-4 items-center mt-4'>
                     <img src={moneyb} />
        <Text size="sm"  color="gray">
          payroll increased by <span className='text-[#1F9F7D]'>+12.6%</span> vs last month
        </Text>
        </div>
        
        <Group mt="md" className="bg-gray-100 p-3 rounded-lg ">
           <div className='flex gap-4 items-center'>
             <img src={bank} />
          <Text size="sm" className="text-gray-700">Providus Bank <span className="text-[#1F9F7D]">(0069000591) ~ SBSC UK LTD</span></Text>
          <CopyButton value="0069000591">
            {({ copied, copy }) => (
              <Clipboard
                size={16}
                className={`cursor-pointer ${copied ? 'text-green-500' : 'text-gray-500'}`}
                onClick={copy}
              />
            )}
          </CopyButton>
           </div>
        </Group>
      </Card>
      
      {/* Payment Methods */}
      <Card shadow="sm" p="lg" radius="md" withBorder className="w-full">
        <Group justify="space-between">
            <div className='flex items-center gap-2'>
                <ThemeIcon variant="light" radius="md" color="orange">
                            <Menu size={18} />
                          </ThemeIcon>
          <Text size="sm" fw={500} color="gray">Payment Method</Text>
            </div>
          
        </Group>
        
        <div className="mt-3 space-y-3">
          <Card shadow="xs" p="sm" radius="md" withBorder>
            <Group justify="space-between">
              
              <div className='flex gap-4'>
                <img src={mastercard} />
                <div>
                <Text size="sm" className="text-gray-700">Access Bank *7844</Text>
              <Text size="xs" color="gray">Expiry 06/2024</Text>
              </div>
              </div>
              <ChevronRight className="text-[#908C9C] w-6 h-6" size={16} />
            </Group>
          </Card>
          <Card shadow="xs" p="sm" radius="md" withBorder>
            <Group justify="space-between">
               <div className='flex gap-4'>
                <img src={Stripe} />
                <div>
                <Text size="sm" className="text-gray-700">Access Bank *7844</Text>
              <Text size="xs" color="gray">Expiry 06/2024</Text>
              </div>
              </div>
              <ChevronRight className="text-[#908C9C] w-6 h-6" size={16} />
            </Group>
          </Card>
          <Card shadow="xs" p="sm" radius="md" withBorder>
            <Group justify="space-between">
               <div className='flex gap-4'>
                <img src={Stripe} />
                <div>
                <Text size="sm" className="text-gray-700">Access Bank *7844</Text>
              <Text size="xs" color="gray">Expiry 06/2024</Text>
              </div>
              </div>
              <ChevronRight className="text-[#908C9C] w-6 h-6" size={16} />
            </Group>
          </Card>
        </div>
        
       <div className='flex items-center justify-between pt-4'>
        <div className='flex gap-2 items-center'>
            <img src={money} />
         <Text size="sm" color="gray" className="mt-3">+ 3 other options</Text>
        </div>
       
         <p className='border border-[#D0D5DD] rounded-2xl py-1 text-[12px]  flex px-3'>Manage <span className=' ml-2 '><ArrowUpRight size={16} /></span></p>
       </div>
      </Card>
    </div>

   <div className='p-6 bg-white rounded-2xl w-full space-y-12'>

     <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
        <div className='flex flex-col gap-2'>
            <h1 className="text-2xl font-semibold">
              <span className="text-[#F04438] border-b">Payroll</span> Transactions
            </h1>
            <p className="text-[#908C9C] text-[16px]">
              A list of all transactions of payroll initiated on system.
            </p>
          </div>
          <div className='flex gap-4'>
            <label htmlFor="datetime" className="text-[#344054] text-sm font-medium flex  items-center border border-[#D0D5DD] rounded-2xl px-3 py-1">Export  
             <CopyButton value="0069000591">
            {({ copied, copy }) => (
              <Clipboard
                size={16}
                className={`cursor-pointer pl-1 ${copied ? 'text-green-500' : 'text-gray-500 pl-1'}`}
                onClick={copy}
              />
            )}
          </CopyButton>
            
          </label>
          <label htmlFor="datetime" className="text-[#344054] text-sm font-medium flex  items-center border border-[#D0D5DD] rounded-2xl px-3 py-1">Date:  <span className="text-[#E16635]">2024</span>
            <ChevronDown size={18} />
            
          </label>
          </div>
    </div>

             <div className="space-y-4 mt-4 flex flex-col w-full lg:flex-row gap-6 items-center lg:items-start justify-between bg-white rounded-2xl p-4 lg:p-6">
      <div className="w-full lg:w-auto lg:border-r pr-0 lg:pr-10 border-[#D0D5DD] text-center lg:text-left">
        <Text size="sm" color="#908C9C">Total Payroll Expense</Text>
        <p className="font-bold text-xl md:text-2xl lg:text-[32px] text-[#3E1C96]">₦ 61,894,004.22</p>
        <Text size="sm" color="#908C9C">
          <span className="text-[#1F9F7D]">+ 9.3 % </span>increase vs last Year
        </Text>
      </div>
      
      <div className="w-full lg:w-auto lg:border-r pr-0 lg:pr-10 border-[#EAECF0] text-center lg:text-left">
        <Text size="sm" color="#908C9C">Highest Payroll Month</Text>
        <p className="font-bold text-xl md:text-2xl lg:text-[32px] text-[#3E1C96]">₦ 5,003,904</p>
        <Text size="sm" color="#908C9C">April, 2024</Text>
      </div>
      
      <div className="w-full lg:w-auto text-center lg:text-left">
        <Text size="sm" color="#908C9C">Highest Payrolled Department</Text>
        <p className="font-bold text-xl md:text-2xl lg:text-[32px] text-[#3E1C96]">₦ 15,904,222</p>
        <Text size="sm" color="#908C9C">Sales Dept. + 38% increase vs Other</Text>
      </div>
    </div>

                    <PayrollTransaction />

   </div>
     </div>
     </div>
  );
};

export default WalletManagement;