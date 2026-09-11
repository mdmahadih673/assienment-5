import { use, useState } from "react";
import type { ITechnologyType } from "../../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import StackItem from "./StackItem";

export interface TechnologiesProps {
    technologiesPromise: Promise<ITechnologyType[]>
}

export default function Technologies({ technologiesPromise }: TechnologiesProps) {
    const Technologies = use(technologiesPromise)
    const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnologyType[]>([]);

    return (
        <section className="pb-12">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                    Explore the{" "}
                    <span className="text-[#d946a8]">Technologies</span>
                </h1>

                <p className="mt-1 text-sm text-[#64748b]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>


            <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_272px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {Technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            selectedTechnologies={selectedTechnologies}
                            setSelectedTechnologies={setSelectedTechnologies}
                        />
                    ))}
                </div>
                <div className="sticky top-6 w-full">
                    <StackItem
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                </div>
            </div>
        </section>
    )
}