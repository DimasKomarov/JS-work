aclean(arr)
function aclean(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].length != arr[i + 1].length) {
            set.add(arr[i]);
        }
    }
    return Array.from(set);
}