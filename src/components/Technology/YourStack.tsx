import { FaRegTrashAlt } from "react-icons/fa";
import type { ITechnologyType } from "../../types/TechnologyType";

interface YourStackProps {
    selectTech: ITechnologyType;
    handleReomveTech: (tech: ITechnologyType) => void;
}

export default function YourStack({
    selectTech,
    handleReomveTech,
}: YourStackProps) {

    return (
        <div
            key={selectTech.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-xs"
        >
            <div className="flex items-center gap-3">
                <img
                    className="h-7 w-7 object-contain"
                    src={selectTech.icon}
                    alt={selectTech.name}
                />
                <div className="name">
                    <h2 className="text-xs font-bold text-slate-900">
                        {selectTech.name}
                    </h2>
                    <p className="text-[10px] text-slate-400 font-medium">
                        {selectTech.category}
                    </p>
                </div>
            </div>
            <button
                onClick={() => handleReomveTech(selectTech)}
                className="cursor-pointer p-1 text-slate-400"
            >
                <FaRegTrashAlt className="text-sm" />
            </button>
        </div>
    )
}