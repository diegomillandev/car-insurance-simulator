import { useContext } from "react";
import QuoteContext from "../context/ProviderQuote";

export const useQuote = () => {
    return useContext(QuoteContext);
}