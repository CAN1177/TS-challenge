// const first = (arr) => {
//   if (!arr.length) {
//     return "是空数组啦";
//   }
//   return arr[0];
// };



const first = (arr) => {
 const [first, ...rest] = arr
 return first ? first : "never"
};

console.log(
  "%c 🥚 first: ",
  "font-size:20px;background-color: #3F7CFF;color:#fff;",
  first([2])
);
