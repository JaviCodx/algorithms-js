export default function binarySearch<T>(array: T[], seek: T) {
    let hi = array.length;
    let low = 0;

    do {
        const m = Math.floor(low + (hi - low) / 2);
        const v = array[m];

        if (v === seek) return true;
        else if (v > seek) {
            hi = m;
        } else {
            low = m + 1;
        }
    } while (low < hi);

    return false;
}
