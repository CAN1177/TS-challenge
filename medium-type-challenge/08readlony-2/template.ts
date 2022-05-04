// type MyReadonly2<T, K> = any


/**
 * 1. K 赋初始化，如果不传值就是默认所有是 readonly
 * 2. & 运算
 * 3. 先把 K 中包含的都变成 readonly
 * 4. 再计算 K 之外剩下的，都是普通类型
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]:T[P]
} & {
  [P in keyof T as P extends K ? never : P]:T[P]
}




interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo2: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property
todo2.completed = true // OK