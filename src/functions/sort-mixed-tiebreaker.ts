export default function sortMixedTieBreaker(a: any, b: any): number {

    if (a[0] < b[0]) {
        return -1;
    }
    else if (a[0] > b[0]) {
        return 1;
    }
    if (a.length === 1 && b.length === 1)
        return 0;
    if (a.length === 1)
        return -1;
    if (b.length === 1)
        return 1;
    return sortMixedTieBreaker(a.substr(1), b.substr(1));
};
