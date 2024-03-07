import { brands, getYears, plans } from "../constants";
import { Toaster, toast } from "sonner";
import { useQuote } from "../hooks";
import { useState } from "react";
import { Message } from "./Message";

const promise = () =>
    new Promise((resolve) => setTimeout(() => resolve({}), 2000));

export const Form = () => {
    const { data, handleDataChange, quoteSecured } = useQuote();
    const [quote, setQuote] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(data).includes("")) {
            toast.error("Error, all fields are required.");
            return;
        }

        toast.promise(promise, {
            loading: "Quoting...",
            success: () => {
                return `Quoted!`;
            },
            error: "Error",
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
        setQuote(quoteSecured(2000, 3));
        // await new Promise((resolve) => setTimeout(resolve, 6000));
        // setQuote(0);
    };

    return (
        <>
            <Toaster position="top-right" richColors />

            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label
                        htmlFor="brand"
                        className="block text-zinc-700 uppercase font-semibold ps-1 mb-2"
                    >
                        Brand
                    </label>
                    <select
                        name="brand"
                        className="w-full p-2 rounded-lg border-2 border-gray-300"
                        onChange={handleDataChange}
                        value={data.brand}
                    >
                        <option value="" disabled>
                            -- Brand Selection --
                        </option>
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label
                        htmlFor="year"
                        className="block text-zinc-700 uppercase font-semibold ps-1 mb-2"
                    >
                        Year
                    </label>
                    <select
                        name="year"
                        className="w-full p-2 rounded-lg border-2 border-gray-300"
                        onChange={handleDataChange}
                        value={data.year}
                    >
                        <option value="" disabled>
                            -- Year Selection --
                        </option>
                        {getYears(25).map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label
                        htmlFor="year"
                        className="block text-zinc-700 uppercase font-semibold ps-1 mb-2"
                    >
                        Plans
                    </label>
                    <div className="flex justify-around">
                        {plans.map((plan) => (
                            <label
                                key={plan.id}
                                className="flex items-center cursor-pointer"
                            >
                                <input
                                    onChange={handleDataChange}
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    className="mr-2 cursor-pointer"
                                />
                                {plan.name}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="my-5">
                    <button
                        type="submit"
                        className="bg-zinc-700 hover:bg-zinc-800 text-white w-full uppercase font-semibold py-2 px-4 rounded transition-colors duration-150"
                    >
                        Quote
                    </button>
                </div>

                {quote !== 0 && <Message data={data} quote={quote} />}
            </form>
        </>
    );
};
