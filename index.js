// code your solution here
function superbowlWin(array) {
    if (array.find(findWin) === undefined) {
        return undefined;
    }
    else {
        return array.find(findWin).year;
    }
}

function findWin (element) {
    return element.result === 'W';
}
