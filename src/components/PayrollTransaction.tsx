import { Card, Table, Badge, Button } from '@mantine/core';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const payrollData = [
  { name: 'Year-End Payroll', id: '94021', initiatedBy: 'Tunde Olawale', date: 'March 15, 2025', value: '₦11,500,000', status: 'Completed' },
  { name: 'Mid-Year Payroll', id: '91872', initiatedBy: 'Kola Adebayo', date: 'August 21, 2025', value: '₦13,000,000', status: 'Partial Completion' },
  { name: 'Year-End Payroll', id: '94021', initiatedBy: 'Oluwaseun Adebayo', date: 'November 5, 2025', value: '₦11,500,000', status: 'Completed' },
  { name: 'Mid-Year Payroll', id: '91872', initiatedBy: 'Femi Jimoh', date: 'February 14, 2025', value: '₦13,000,000', status: 'Failed' },
  { name: 'Year-End Payroll', id: '94021', initiatedBy: 'Chijioke Nwosu', date: 'September 30, 2025', value: '₦11,500,000', status: 'Completed' },
  { name: 'Mid-Year Payroll', id: '91872', initiatedBy: 'Tayo Ogunleye', date: 'September 10, 2024', value: '₦13,000,000', status: 'Failed' },
  { name: 'Year-End Payroll', id: '94021', initiatedBy: 'Emeka Okafor', date: 'January 1, 2025', value: '₦11,500,000', status: 'Completed' },
];

export default function PayrollTransaction() {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="mx-auto">
      <Card>
        <Table>
          <thead className='text-[#667085]'>
            <tr>
              <th>Payroll Name</th>
              <th>Initiated by</th>
              <th>Date</th>
              <th>Total Payroll Value</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="space-y-8 ">
            {payrollData.map((payroll, index) => (
              <tr key={index}>
                <td>
                  <strong>{payroll.name}</strong>
                  <br />
                  <span className="text-gray-500">Identifier: {payroll.id}</span>
                </td>
                <td>{payroll.initiatedBy} <br />
                <span className="text-gray-500">{payroll.date}</span></td>
                
                <td>{payroll.value}</td>
                <td>
                  <Badge color={
                    payroll.status === 'Completed' ? 'green' :
                    payroll.status === 'Partial Completion' ? 'yellow' :
                    'red'
                  }>
                    {payroll.status}
                  </Badge>
                </td>
                <td>
                  <Button variant="light" color="violet" size="sm">
                    <ArrowUpRight size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="flex justify-between items-center mt-4">
            <span>Page {page} of {totalPages}</span>
         <div className='space-x-4'>
             <Button onClick={handlePrev} disabled={page === 1}>Previous</Button>
          
          <Button onClick={handleNext} disabled={page === totalPages}>Next</Button>
         </div>
        </div>
      </Card>
    </div>
  );
}
