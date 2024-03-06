import { createContext, useState } from "react";
import {
    addPercentForBrand,
    getDifferenceInYears,
    subPercentForYears,
} from "../helpers";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
    const [data, setData] = useState({
        brand: "",
        year: "",
        plan: "",
    });

    const handleDataChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    const quoteSecured = (baseQuote, percentage) => {
        const yearDifference = getDifferenceInYears(data.year);

        // subtract percentage% for each year of difference
        let quote = subPercentForYears(percentage, yearDifference, baseQuote);

        // add percentage% for brand
        quote = addPercentForBrand(data.brand, quote);

        // add percentage% for plan
        const plan = {
            1: 1.2,
            2: 1.5,
            3: 1.8,
        };
        return (quote = quote * plan[data.plan]);
    };

    return (
        <QuoteContext.Provider
            value={{
                handleDataChange,
                data,
                quoteSecured,
            }}
        >
            {children}
        </QuoteContext.Provider>
    );
};

export { QuoteProvider };
export default QuoteContext;
