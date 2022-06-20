// type MyPick<T, K> = any;

type MyPick<T, K extends keyof T> = {
	[P in K]: T[P]
}


interface Todo {
  title: string
  description: string
  completed: boolean
}

type Todo2 = Pick<Todo, 'title' | 'completed'>



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
