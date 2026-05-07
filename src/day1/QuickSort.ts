/*
    1) idx = -1, find and swap anything lower than 5 to the front
         ~~~swap~~~
         |        |
         v        v
        [8, 7, 6, 4, {5}]
        ^  ^  ^  ^
        |__|__|__|
    
    2) ++idx, swap it with the value lower than 5
        [4, 7, 6, 8, {5}]
    
    3) swap the pivit to the ++idx position;
        [4, {5}, 6, 8, 7]
    
    4) return idx
*/

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    
    const pivotIdx = partition(arr, lo, hi);
    
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    let idx = lo;
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= arr[hi]) {
            [arr[i], arr[idx]] = [arr[idx], arr[i]]
            idx++;
        }
    }
    [arr[hi], arr[idx]] = [arr[idx], arr[hi]];
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
