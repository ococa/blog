/**
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 */


 /**
 * @param {number[]} A
 * @return {number[]}
 */
// 先排序 后求方
var sortedSquares = A => A.map(a => a * a ).sort((a, b) => { return a - b});

// 先用二分查找找到0或最靠近0的区域，再用双指针简单比较填入新数组 

var so = function(A) {
  let pointleft = 0
  let pointRitht = A.length -1;
  let B = [];
  // 当指针没有交汇
  while (pointRitht !== pointleft) {
    // 绝对值大的值先push到
    if(Math.abs(A[pointRitht]) > Math.abs(A[pointleft])) {
      B.unshift(Math.pow(A[pointRitht], 2));
      pointRitht -= 1;
    } else if (A[pointRitht] < A[pointleft]) {
      B.unshift(Math.pow(A[pointleft], 2));
      pointleft += 1;
    }
  }
  return B;
}


