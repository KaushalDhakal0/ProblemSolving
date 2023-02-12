// 1.Merge 2 Sorted Lists
const list1 = [1,2,4];
const list2 = [1,3,4];
var mergeTwoLists = function(list1, list2) {
    return list1.concat(list2).sort((a,b) => a-b);
};



// console.log("1.======>",mergeTwoLists(list1,list2));

const str = "   fly me   to   the moon  "
var lengthOfLastWord = function(s) {
    const temp = s.trim().split(" ");
    const y = temp[temp.length - 1];
    return y.length;
    //More faster solution
    // return s.trim().split(" ").pop().length;
};




// console.log("==========>>>>>>>>",lengthOfLastWord(str));



/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if (n < 2) {

        return 1;
    }

        let firstStep = 1;

        let secondStep = 1;

        let thirdStep = 0;

        for (let i=2; i<=n; i++) {

            thirdStep = firstStep + secondStep;

            firstStep = secondStep;

            secondStep = thirdStep;
            console.log("=1=",firstStep,"=2=",secondStep,"=3=",thirdStep);
        }

        return thirdStep;
        
};

// console.log(climbStairs(3));


var mySqrt = function(x) {
    return Math.round(Math.sqrt(x));
};
// const mySqrt = function(x) {
//     let result = 1;
//     while (result*result <= x) result++;
//     return result - 1;
// };

console.log("++++++======>",mySqrt(8));