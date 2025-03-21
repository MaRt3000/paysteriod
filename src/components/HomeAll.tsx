
import DashBoard from './DashBoard'
import QuickActionSection from './QuickActionSection'
import EmployeeCompositions from './EmployeeCompositions'
import UrgentTask from './UrgentTask'
import PayrollProcessing from './PayrollProcessing'

const HomeAll = () => {
  return (
    <div>
        <DashBoard />
        <div className='bg-[#F7F6FB] px-2 mt-[-36rem] py-6 lg:pl-[21rem] lg:mt-[-43rem] lg:pr-8'>
            <QuickActionSection />
            <EmployeeCompositions />
            <UrgentTask />
            <PayrollProcessing />
        </div>
    </div>
  )
}

export default HomeAll