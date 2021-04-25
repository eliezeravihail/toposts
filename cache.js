

const fillZeros_byRows = (arr2d) => {
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[0].length; j++) {
            arr2d[i][j] = "0";
        }
    }
}

const fillZeros_byColumns = (arr2d) => {
    for (let i = 0; i < arr2d[0].length; i++) {
        for (let j = 0; j < arr2d.length; j++) {
            arr2d[j][i] = "0";
        }
    }
}

const testTime = (func, arg) => {
    timestart = (new Date()).getTime()
    for (let index = 0; index < 1000; index++) {
        func(arg);
    }
    console.log(func.name,": ",((new Date()).getTime() - timestart)/1000.0);
}

const arr2d = new Array(100);
for (let i = 0; i < 100; i++) {
        arr2d[i] = new Array(100).fill(0);
}


testTime(fillZeros_byRows,arr2d);
testTime(fillZeros_byColumns,arr2d);


