// code your solution here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = '*') {
    return function innerFunc(adj = 'special') {
        return `You are ${flair}${adj}${flair}!`;
    }
}