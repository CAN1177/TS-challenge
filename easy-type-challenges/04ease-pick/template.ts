// type MyPick<T, K> = any;

type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
}
// git测试过冲突klklklkl

// js 实现
// function myPick(todo, keys) {
//   const obj = {};
//   keys.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//     obj[key] = todo[key];
//   });
//   return obj;
// }
