import { JSX } from "react";

interface FeatureItemProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

export default function FeatureItem({ title, description, icon }: FeatureItemProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 max-w-2xs text-center">
            <div className="p-4 h-40 w-40 flex justify-center items-center">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
