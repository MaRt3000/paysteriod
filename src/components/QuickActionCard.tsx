import { FC } from "react";
import {  Menu } from "lucide-react";

interface QuickActionCardProps {
    imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  subtitle: React.ReactNode;
  buttonTab?: React.ReactNode;
  onButtonClick: () => void;
}

const QuickActionCard: FC<QuickActionCardProps> = ({
    imageSrc,
  title,
  description,
  buttonText,
  subtitle,
  buttonTab,
  onButtonClick,
}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-[#FDEFE8] rounded-lg">
            <Menu className="text-[#E07A4E]" size={16} />
          </div>
          <h2 className="text-lg font-[500px]">{title}</h2>
        </div>
        <button className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
         {buttonTab}
        </button>
      </div>

      {/* Image */}
      <div className="flex flex-col items-center text-center mt-10 mb-6">
        <img
          src={imageSrc}
          alt=""
          className=""
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {subtitle}
        </h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className="mt-4 px-8 lg:px-[8rem] py-2 bg-[#E16635] text-white font-medium rounded-full hover:bg-[#B3542B] transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default QuickActionCard;
