
import { CgEditFlipH } from "react-icons/cg";
import { FiShare } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
const Model = ({ isOpen, onClose }) => {
    const handleOptionSelect = (option) => {
      onClose();
    };
  
    if (!isOpen) return null;
    const modelData= [
        {
            name: "Edit",
            icon: <CgEditFlipH className="text-2xl" />

    },{
        name: "Courier Info",
        icon: <GrContactInfo className="text-2xl" />

},{
    name: "Share",
    icon: <FiShare className="text-2xl"/>

},{
    name: "Remove",
    icon: <IoMdRemoveCircleOutline className="text-2xl" />

},]
  
    return (
      <div className="absolute inset-0 z-10 top-16 pt-1  flex items-start justify-end pr-2 bg-opacity-50 bg-gray-500">
        <div className="bg-white rounded  ">
          <ul>
          {
            modelData.map((data,index)=>{
                return(
                    <li
                    key={index}
              className="cursor-pointer w-[11rem] flex justify-between pl-3 last:text-red-500 font-medium last:border-b-0 border-b-[1px] py-2 pr-2  hover:bg-gray-100"
              onClick={() => handleOptionSelect("Option 1")}
            >
              <p>{data.name}</p>
              <p>{data.icon}</p>
            </li>

                )
            })
          }
            
          </ul>
        </div>
      </div>
    );
  };

  export default Model