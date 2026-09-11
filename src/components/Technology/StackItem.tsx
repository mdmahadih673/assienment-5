import type { Dispatch, SetStateAction } from "react";
import type { ITechnologyType } from "../../types/TechnologyType";
import { Bounce, toast } from "react-toastify";
import YourStack from "./YourStack";

interface StackItemProps {
    selectedTechnologies: ITechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnologyType[]>>;
}

export default function StackItem({
    selectedTechnologies,
    setSelectedTechnologies,
}: StackItemProps) {
    const handleReomveTech = (tech: ITechnologyType) => {
        const removeTech = selectedTechnologies.filter(
            (selectTechnology) => selectTechnology.id !== tech.id,
        );
        setSelectedTechnologies(removeTech);

        toast.error(`${tech.name} Remove to stack`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);

        toast.success("All technologies removed from stack", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>

            <p className="mt-1 text-xs font-medium text-slate-400">
                {selectedTechnologies.length === 0
                    ? "No technologies selected yet."
                    : `${selectedTechnologies.length} Technology Selected`}
            </p>

            <div className="mt-4 space-y-2">
                {selectedTechnologies.length === 0 ? (
                    <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-slate-200">
                        <p className="text-xs font-medium text-slate-400">
                            Your stack is empty.
                        </p>
                    </div>
                ) : (
                    selectedTechnologies.map((selectTech) => (
                        <YourStack
                            key={selectTech.id}
                            selectTech={selectTech}
                            handleReomveTech={handleReomveTech}
                        />
                    ))
                )}
            </div>

            {selectedTechnologies.length !== 0 && (
                <button
                    type="button"
                    onClick={handleRemoveAll}
                    className="mt-4 w-full rounded-md border border-red-400 bg-white py-2 text-[10px] font-semibold text-red-500 transition-colors hover:bg-rose-50 cursor-pointer"
                >
                    Remove All
                </button>
            )}
        </div>
    );
}
