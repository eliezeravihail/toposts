const colmunsBefore = (arr2d) => {
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[0].length; j++) {
            arr2d[i][j] = "0";
        }
    }
}

const rowsBefore = (arr2d) => {
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

arr2d = [[]];
for (let i = 0; i < 1000; i++) {
    arr2d[i] = []
    for (let j = 0; j < 1000; j++) {
        arr2d[i][j] = i*j;
    }
}

testTime(colmunsBefore,arr2d);
testTime(rowsBefore,arr2d);

