const calc = () => {
    return 4 * 3;
}

// let aNumber = calc();

// console.log(aNumber);

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);