// type DeepReadonly<T> = any

/* 
	Record<K,T>构造具有给定类型T的一组属性K的类型.它会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型 
	
*/

/**
 * T extends Record<string, unknown> | Array<unknown>：这个条件表达式表示我们希望泛型 T 能够接受任意类型，但是我们只关注对象类型（使用 Record<string, unknown> 表示）和数组类型（使用 Array<unknown> 表示）。

? { readonly [P in keyof T]: DeepReadonly<T[P]> }：这是条件类型的第一个分支。当 T 是对象类型时，我们使用映射类型来递归地处理对象的每个属性。对于对象的每个属性 P，我们将其设为只读，并递归地调用 DeepReadonly 泛型来处理属性值 T[P]，以确保其嵌套对象也被设为只读。

: T：这是条件类型的第二个分支。当 T 不是对象类型时（例如字符串、数字等基本类型），我们不做任何处理，直接返回 T。
 */
type DeepReadonly<T> = T extends Record<string, unknown> | Array<unknown>
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T;

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo1 = DeepReadonly<X>; // should be same as `Expected`
