/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0
    for (let row in grid) {
        for (let column in grid[row]){
            if (grid[row][column] === '1'){
                islands ++
                waterChecker(parseInt(row), parseInt(column), grid)
            }
        }
    }
    return islands
};

const waterChecker = (rows, cols, grid) => {
    if(!grid[rows] || !grid[rows][cols] || grid[rows][cols] === '0') return
    grid[rows][cols] = '0'
    waterChecker(rows + 1, cols, grid)
    waterChecker(rows - 1, cols, grid)
    waterChecker(rows, cols + 1, grid)
    waterChecker(rows, cols - 1, grid)
}