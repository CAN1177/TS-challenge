type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

interface Todo {
  title: string;
  description: string;
}

// js实现

// function readonly(obj) {
//   const result = {};

//   for (const key in obj) {
//     result["readonly" + key] = obj[key];
//   }
//   return result;
// }

// // 测试🌰
// const todo: MyReadonly<Todo> = {
//   title: "Hey",
//   description: "foobar",
// };

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
