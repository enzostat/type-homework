//1. Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function altArr<T>(arg1:T[], arg2:T[]):T[] {
    let tempArr = [];
    for(let i = 0; i < arg1.length; i++) {
        tempArr.push(arg1[i])
        tempArr.push(arg2[i])
    }
    return tempArr
}

//2. Write a function that returns the elements on odd positions in an array.
function oddArr<T>(arg:T[]):T[] {
    let tempArr = []
    for (let i = 0; i <arg.length; i++) {
        if(i%2 === 0) {
            console.log('we are having fun')
        } else {
            tempArr.push(arg[i])
        }
    }
}


//3. Write a function that tests whether a string is a palindrome.

function palinArr(arg:string):boolean {
    let split1 = " ";
    let split2 = " "
    let whereToSplit = 0;
    if(arg.length%2 === 0) {
        whereToSplit = arg.length/2;
        split1 = arg.slice(-(whereToSplit))
        split2 = arg.slice(whereToSplit)
        if(split1 === split2) {
            return true
        } else {
            return false
        }
    } else {
       whereToSplit = Math.floor(arg.length/2)
       split1 = arg.slice(-(whereToSplit))
       split2 = arg.slice(whereToSplit)
       if(split1 === split2) {
           return true
       } else {
           return false
       }
    }
   
}