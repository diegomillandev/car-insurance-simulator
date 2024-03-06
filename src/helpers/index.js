export function getDifferenceInYears(year) {
    return new Date().getFullYear() - year;
}

export function subPercentForYears(percentage, yearDifference, baseQuote) {
    return baseQuote - (yearDifference * percentage * baseQuote) / 100;
}

export function addPercentForBrand(brand, quote) {
    const brands = {
        1: 1.15,
        2: 1.3,
        3: 1.05,
    };
    return quote * brands[brand];
}
