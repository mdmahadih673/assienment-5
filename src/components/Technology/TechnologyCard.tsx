import { FaStar } from "react-icons/fa";
import type { ITechnologyType } from "../../types/TechnologyType";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

export type TechnologyCardProps = {
    technology: ITechnologyType;
    selectedTechnologies: ITechnologyType[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnologyType[]>>;
};



function TechnologyCard({
    technology,
    selectedTechnologies,
    setSelectedTechnologies,
}: TechnologyCardProps) {
    const isSelected = selectedTechnologies.find(
        (item) => item.id === technology.id,
    )
    const handleButtonType = () => {
        if (isSelected) return;

        setSelectedTechnologies((currentTechnologies) => [
            ...currentTechnologies,
            technology
        ]);

        toast.success(`${technology.name} Add to Stack `, {
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
        <article
            className={`flex min-h-59 flex-col rounded-xl border ${isSelected ? "border-pink-500" : "border-slate-200"} bg-white p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`}
        >
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 p-1.5">
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-5 w-5 object-contain"
                        />
                    </div>
                    <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[9px] font-semibold text-sky-600">
                        {technology.badge}
                    </span>
                </div>

                <h3 className="mt-2 text-sm font-bold text-slate-900">
                    {technology.name}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-[10px] leading-relaxed text-slate-500">
                    {technology.description}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-1 text-[9px] font-medium text-slate-600">
                    <div className="flex flex-wrap items-center gap-1">
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
                            {technology.category}
                        </span>
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
                            {technology.difficulty}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-slate-800">
                        <FaStar className="text-[10px] text-amber-400" />
                        <span>{technology.rating}</span>
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-3">
                <button
                    type="button"
                    onClick={handleButtonType}
                    disabled={isSelected ? true : false}
                    className={`w-full cursor-pointer rounded-md ${isSelected ? "bg-slate-400" : "bg-slate-900 hover:bg-slate-800"} py-2 text-[10px] font-semibold text-white transition-colors`}
                >
                    {isSelected ? "Added" : "Add to Stack"}
                </button>
            </div>
        </article>
    );
}

export default TechnologyCard;