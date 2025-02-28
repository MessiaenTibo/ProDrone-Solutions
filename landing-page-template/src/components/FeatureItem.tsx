interface FeatureItemProps {
    title: string;
    description: string;
    image: string;
}

export default function FeatureItem({ title, description, image }: FeatureItemProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 max-w-sm text-center">
            <div className="p-4 h-40 w-40 bg-gray-50 border">
                <img src={image} alt={title} />
            </div>
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
