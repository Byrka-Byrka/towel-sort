
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length <= 0) return [];
    matrix = matrix.reduce((accum, current, index)=>{
      if (index%2) {
        current.reverse()
      }
      return [...accum, ...current]
    },[])
    return matrix
  }

