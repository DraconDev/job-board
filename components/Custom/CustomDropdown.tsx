// import { useState } from "react";

// type ListBoxCustomProps = {
//     type: string[];
//     name: string;
//     action: (option: string) => void;
// };

// const CustomDropdown = (props: ListBoxCustomProps) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleSelect = (option) => {
//         onSelect(option);
//         setIsOpen(false);
//     };

//     return (
//         <div className="custom-dropdown">
//             <div
//                 className="dropdown-header"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 {selectedOption}
//             </div>
//             {isOpen && (
//                 <div className="dropdown-options">
//                     {options.map((option, index) => (
//                         <div
//                             key={index}
//                             className="dropdown-option"
//                             onClick={() => handleSelect(option)}
//                         >
//                             {option}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
