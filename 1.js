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
};

console.log("==========>>>>>>>>",lengthOfLastWord(str));