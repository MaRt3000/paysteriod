import searchimg from '../assets/searchimg.svg'

const UrgentTask = () => {
  return (
    <div className=' bg-white p-6 m-4 border border-gray-200 rounded-xl shadow-sm'>
        <div>
            <h1 className="text-2xl">Request: <span className='text-[#F04438]'>Urgent Task</span></h1>
            <p className="text-[#908C9C] text-[16px]">Stay in tune with and don’t miss out on the most pressing</p>
          </div>
          <div className="flex flex-col items-center text-center mt-6 ">
        <img
          src={searchimg}
          alt=""
          className=""
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800 ">
          No Urgent  <span className="text-[#E07A4E] border-b">Task</span>
        </h3>
        <p className="text-gray-500 text-lg mt-2 lg:w-[60%]">So sorry, you currently do not have urgent / pending task that need your action. Setup workflow to get started</p>

        {/* CTA Button */}
        <button
         
          className="mt-4 px-10 lg:px-[8rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
        >
          Setup Workflow
        </button>
      </div>
    </div>
  )
}

export default UrgentTask