
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(arr) {
    let res = 0;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        // console.log(res);
        res = Math.max(this.calculateDepth(item), res);
      }
    });
    // console.log(res);
    return res + 1;
  }
}

module.exports = {
  DepthCalculator,
};
