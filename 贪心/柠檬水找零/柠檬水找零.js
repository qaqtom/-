/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fiveCount = 0;
    let tenCount = 0;
    for (let i = 0; i < bills.length; i++){
        let bill = bills[i];
        if (bill === 5) {
            fiveCount++;
        } else if (bill === 10) {
            if (fiveCount) {
                fiveCount--;
                tenCount++;
            } else {
                return false
            }
        } else if (bill === 20) {
            if (tenCount && fiveCount) {
                tenCount--;
                fiveCount--;
            } else if (fiveCount > 2) {
                fiveCount -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};

lemonadeChange([5, 5, 10, 10, 20])