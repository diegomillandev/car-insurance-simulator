import { useRef, useMemo } from "react";
import { brands, plans } from "../constants";

export const Message = ({ quote, data }) => {
    const { year, plan, brand } = data;
    const yearSeleted = useRef(year);
    const [{ name: brandSelected }] = useMemo(
        () => brands.filter((item) => item.id === Number(brand)),
        [quote]
    );
    const [{ name: planSelected }] = useMemo(
        () => plans.filter((item) => item.id === Number(plan)),
        [quote]
    );

    return (
        <div className="bg-green-300 py-3 border border-green-800 rounded flex justify-center">
            <div className="text-green-950 text-left">
                <p className="font-bold">
                    Brand: <span className="font-normal">{brandSelected}</span>
                </p>
                <p className="font-bold">
                    Year:{" "}
                    <span className="font-normal">{yearSeleted.current}</span>
                </p>
                <p className="font-bold">
                    Plan: <span className="font-normal">{planSelected}</span>
                </p>
                <p className="font-bold">
                    The total:{" "}
                    <span className="font-normal">${quote?.toFixed(2)}</span>
                </p>
            </div>
        </div>
    );
};
