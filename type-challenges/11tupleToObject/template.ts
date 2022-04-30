type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [V in T[number]]: V;
};

// typeof 操作符可以用来获取一个变量或对象的类型
// as const 类型断言（所有）

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>;
