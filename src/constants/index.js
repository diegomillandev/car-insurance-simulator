export const brands = [
    {id:1, name: "European"},
    {id:2, name: "American"},
    {id:3, name: "Asiatic"},
]

export function getYears(_time = 10) {
    const currentYear = new Date().getFullYear() - 1;
    return Array.from(new Array(_time), (val, index) => currentYear - index);
}

export const plans = [
    {id:1, name: "Basic"},
    {id:2, name: "Complete"},
    {id:3, name: "Full"},
] 