const BigNumber = require("bignumber.js");

// function height(n,m) {
//     if (n === 0 || m === 0) return new BigNumber(0);
//     if (n === 1 ) return new BigNumber(m);
//     return new BigNumber(1).plus(height(n-1,m-1)).plus(height(n,m-1));
// }

// const height = (n, m) => {
//   if (n === 0 || m === 0) return new BigNumber(0);
//   if (n === 1) return new BigNumber(m);

//   let dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(new BigNumber(0)));

//   // Fill the DP table
//   for (let eggs = 1; eggs <= n; eggs++) {
//       for (let tries = 1; tries <= m; tries++) {
//           if (eggs === 1) {
//               // With 1 egg, the worst-case scenario is linear search, so you can test `tries` floors.
//               dp[eggs][tries] = new BigNumber(tries);
//           } else if (eggs > tries) {
//               // With more eggs than tries, you can always find the solution in `tries` tries.
//               dp[eggs][tries] = dp[eggs-1][tries];
//           }

//           else {
//               // Recurrence relation: dp[eggs][tries] = dp[eggs-1][tries-1] + dp[eggs][tries-1] + 1
//               dp[eggs][tries] = dp[eggs - 1][tries - 1].plus(dp[eggs][tries - 1]).plus(1);
//           }
//       }
//   }

// //  const _dp = dp.map(row => row.map(cell => cell.toFixed()));
// //  console.table(_dp);

//   return dp[n][m].toFixed();
// };

// const height = (n, m) => {
//   if (n === 0 || m === 0) return new BigNumber(0);
//   if (n === 1) return new BigNumber(m);

//   const zero = new BigNumber(0);
//   const one = new BigNumber(1);

//   let prev = [... Array(m)].map((_, i) => new BigNumber(i));
//   let curr = [... Array(m)].map(() => zero);

//   for (let eggs = 2; eggs <= n; eggs++) {
//     for (let tries = 1; tries <= m; tries++) {
//       curr[tries] = one
//         .plus(prev[tries - 1])
//         .plus(curr[tries - 1]);
//     }
//     [prev, curr] = [curr, prev];
//   }
//   return prev[m].toFixed();
// };

const height = (n, m) => {
  if (n === 0 || m === 0) return new BigNumber(0);
  if (n === 1) return new BigNumber(m);

  const one = new BigNumber(1);

  // Initialize prev array for 1 egg (linear case)
  let prev = Array(m + 1).fill().map((_, i) => new BigNumber(i));
  let curr = new Array(m + 1);
  curr[0] = new BigNumber(0);

  for (let eggs = 2; eggs <= n; eggs++) {
    for (let tries = 1; tries <= m; tries++) {
      // If eggs are more than tries, use the previous result 
      curr[tries] = (eggs > tries) ? prev[tries] : one.plus(prev[tries - 1]).plus(curr[tries - 1]);
    }  
    // Swap prev and curr arrays
    [prev, curr] = [curr, prev];
  }
  return prev[m].toFixed();
};

console.log(height(477, 10000));
