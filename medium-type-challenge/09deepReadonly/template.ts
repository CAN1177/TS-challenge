// type DeepReadonly<T> = any

/* 
	Record<K,T>构造具有给定类型T的一组属性K的类型.它会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型 
	
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
