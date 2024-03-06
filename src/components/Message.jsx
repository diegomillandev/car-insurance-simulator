export const Message = ({ quote, data }) => {
    const { year, plan, brand } = data;
    const brands = { 1: "American", 2: "European", 3: "Asian" };
    const plans = { 1: "Basic", 2: "Complete", 3: "Full" };
    return (
        <div className="bg-green-300 py-3 border border-green-800 rounded flex justify-center">
            <div className="text-green-950 w-1/4 text-left">
                <p className="font-bold">
                    Brand: <span className="font-normal">{brands[brand]}</span>
                </p>
                <p className="font-bold">
                    Year: <span className="font-normal">{year}</span>
                </p>
                <p className="font-bold">
                    Plan: <span className="font-normal">{plans[plan]}</span>
                </p>
                <p className="font-bold">
                    The total: <span className="font-normal">${quote}</span>
                </p>
            </div>
        </div>
    );
};
