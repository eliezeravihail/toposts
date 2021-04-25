
const readByRows = (arr2d) => {
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[0].length; j++) {
            arr2d[i][j];
        }
    }
}

const readByColumns = (arr2d) => {
    for (let i = 0; i < arr2d[0].length; i++) {
        for (let j = 0; j < arr2d.length; j++) {
            arr2d[j][i];
        }
    }
}

const testTime = (func, arg) => {
    timestart = (new Date()).getTime()
    for (let index = 0; index < 100; index++) {
        func(arg);
    }
    return (new Date().getTime() - timestart)/100.0;
}


const findChacheLimit = (testFunc, rowsFunc,ColumnsFunc)=>{
    let limit = 10;
    let maxTest = 10000;
    const gump = 10;
    const result = new Array(maxTest/gump);
    while (limit<=maxTest){
        const tempArr2d = new Array(limit);
        for (let i = 0; i < limit; i++) {
            tempArr2d[i] = new Array(limit).fill(0);
        }
        result.push(`line's length: ${limit}\t rows: ${testFunc(rowsFunc,tempArr2d)}\tcolumns: ${testFunc(ColumnsFunc,tempArr2d)}`);
        limit *= gump;
    }
    return result;
}

findChacheLimit(testTime, readByRows,readByColumns).forEach(x=>console.log(x))



