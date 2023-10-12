import Image from "next/image";
import { Q1, A1, Q2, A2, Q3, A3, Q4, A4, Q5, A5 } from "./getPostData.js";
import { useState } from "react";


export default function Home() {
  const [count, setCount] = useState<number>(5);
  const [isIncrementing, setIsIncrementing] = useState(true);
  const handleClick = () => {
    if (isIncrementing) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setIsIncrementing(!isIncrementing);
  };
  return (
    <div className="flex justify-center">
      <div className="border-2 border-solid border-gray-400 bg-gray-200 rounded-lg h-[90vh] w-[70vw] p-8">
        <div className="text-xl"><b>{Q1}</b></div>
        <div>{A1}</div>
        <div className="text-xl"><b>{Q2}</b></div>
        <div>{A2}</div>
        <div className="text-xl"><b>{Q3}</b></div>
        <div>{A3}</div>
        <div className="text-xl"><b>{Q4}</b></div>
        <div>{A4}</div>
        <div className="text-xl"><b>{Q5}</b></div>
        <div>{A5}</div>

        <div className="flex justify-center items-center rounded-md bg-aqua w-20 h-8 border border-solid border-blue-500">
          <Image src="/like.png" alt="Like" width={20} height={20}/>
          <div onClick={handleClick} className="cursor-pointer"> <b>{count}</b> like</div>
        </div>
      </div>
    </div>
  );
}
