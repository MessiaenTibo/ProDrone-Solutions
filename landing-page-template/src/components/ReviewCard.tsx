interface ReviewCardProps {
    name: string;
    image: string;
    rating: string;
    title: string;
    text: string;
    rowSpan: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, image, rating, title, text, rowSpan }) => {
    return (
        <div
            className="p-6 shadow-lg rounded-sm max-w-sm bg-white mx-auto"
            /* The gridRow property needs to be applied as pure css!
            Because it gets loaded dynamically, the tailwindcss JIT compiler can't optimize it.*/
            style={{ gridRow: `span ${rowSpan} / span ${rowSpan}` }}
        >
            <img src={image} alt={name} className="w-16 h-16 mx-auto rounded-full mb-3" />
            <h4 className="text-lg font-semibold text-blue-600 text-center">{name}</h4>
            <div className="flex justify-center text-2xl lg:text-3xl text-yellow-300 border-b border-gray-200 mb-2 pb-2 lg:mb-3 lg:pb-3">
                {rating}
            </div>
            <p className="font-semibold md:text-lg lg:text-xl">{title}</p>
            <p className="text-gray-600 text-sm mt-2 lg:text-lg">{text}</p>
        </div>
    );
};

export default ReviewCard;