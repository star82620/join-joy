// import React, { useState } from "react";
// import Link from "@/common/components/GeneralLink";
// import Button from "@/common/components/GeneralButton";
// import groupStatus from "@/constants/groupStatus";
// import TabSection from "./TabSection";
// import { groupsData, tabs, tabIdType } from "./date";

// export default function MyGroupsLeader() {
//   const [activeTab, setActiveTab] = useState<tabIdType>("upcoming");

//   const handleCancelApply = () => {};

//   const handleQuitGroup = () => {};

//   return (
//     <section className="px-6 py-8 md:p-4">
//       <TabSection
//         tabs={tabs}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />
//       <div className="mt-10 md:mt-4">
//         <div className="w-full flex justify-between items-center gap-3 md:gap-2 p-2 mb-3 border-b-2 text-center font-semibold leading-[1.2] mdg:text-sm md:hidden">
//           <p className="w-[10%]">狀態</p>
//           <p className="w-[20%]">名稱</p>
//           <p className="w-[20%]">地點</p>
//           <p className="w-[20%]">時間</p>
//           <p className="w-[10%]">人數</p>
//           <p className="w-[10%]">
//             <span className="whitespace-nowrap after:content-['/'] after:font-normal">
//               取消
//             </span>
//             <span className="whitespace-nowrap">退出</span>
//           </p>
//         </div>
//         <ul>
//           {groupsData.map((group) => {
//             const {
//               groupId,
//               groupName,
//               store,
//               place,
//               totalMemberNum,
//               currentNum,
//               startTime,
//               endTime,
//               status,
//             } = group;

//             if (status === "leader") return;
//             const setStatus = () => {
//               // 如果他是審核中：審核中。
//               // 是團員，且團的日期在今天之後：已加入。
//               // 是團員，且團的日期在今天之前：已結束
//               const now = new Date();
//               const today = now.toISOString();
//               if (status === "pending") return "pending";
//               if (endTime < today) return "over";
//               return "member";
//             };
//             console.log(activeTab, setStatus());
//             const isActive =
//               (activeTab === "over" && setStatus() === "over") ||
//               (activeTab === "upcoming" && setStatus() !== "over");
//             if (!isActive) return;

//             return (
//               <li
//                 key={groupId}
//                 className="w-full flex justify-between items-center gap-3 md:gap-2 p-2 mb-3 bg-yellow-tint text-center text-sm"
//               >
//                 <p className="w-[10%] text-xs">
//                   <span className={`groupStatusDot ${statusStyle}`}>
//                     {statusText}
//                   </span>
//                 </p>
//                 <p className="w-[20%] truncate text-sm">
//                   <Link href={`/group/${groupId}`}>{groupName}</Link>
//                 </p>
//                 <p className="w-[20%] truncate">{location}</p>
//                 <p className="w-[20%]">{groupTime}</p>
//                 <p className="w-[10%]">
//                   {currentNum}/{totalMemberNum}
//                 </p>
//                 <p className="w-[10%]">
//                   <Button
//                     type="button"
//                     appearance="black"
//                     rounded
//                     onClick={handleCancelApply}
//                   >
//                     取消申請
//                   </Button>
//                 </p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }
