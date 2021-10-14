import sortMixedTieBreaker from "./sort-mixed-tiebreaker";

export default function sortMixedArray(a: any, b: any): number {
    if (typeof a !== typeof b) {
        return typeof a === "number" ? -1 : 1;
    }
    if (typeof a === "number") {
        return a - b;
    }
    return sortMixedTieBreaker(a, b)
};
