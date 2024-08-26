/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const result = find(i, j, 0);
            if (result) {
                return true;
            }
        }
    };
    function find(i, j, current) {
        if (i < 0 || i > row - 1) return false
        if (j < 0 || j > col - 1) return false

        if (word[current] !== board[i][j]) return false
        if (current === word.length - 1) return true
        const temp = board[i][j];
        board[i][j] = null;
        let res = find(i + 1, j, current + 1) || find(i - 1, j, current + 1) || find(i, j + 1, current + 1) || find(i, j - 1, current + 1)
        board[i][j] = temp;
        return res
    }

    return false;


};

