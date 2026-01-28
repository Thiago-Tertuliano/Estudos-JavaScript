function removerDuplicatas(array) {
    let semDuplicatas = [];

    for (let i = 0; i < array.length; i++) {
        if (!semDuplicatas.includes(array[i])) {
            semDuplicatas.push(array[i]);
        }
    }

    return semDuplicatas;
}

console.log(removerDuplicatas([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4] ✅