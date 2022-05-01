function myExclude(T, U) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];
    let boo = false;
    for (let j = 0; j < U.length; j++) {
      const u = U[j];
      if (t === u) {
        boo = true;
      }
    }
    if (!boo) {
      result.push(t);
    }
  }
  return result;
}

let arr1 = ["a", "b", "c"];

let arr2 = ["a", "b"];

console.log(
  "%c 🍧 myExclude: ",
  "font-size:20px;background-color: #EA7E5C;color:#fff;",
  myExclude(arr1, arr2)
);
