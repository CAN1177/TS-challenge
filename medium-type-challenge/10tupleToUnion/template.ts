/**
 * T extends unknown[]：这个约束确保 T 是一个数组类型，且数组元素的类型可以是任意类型（unknown）。

	* T[number]：T[number] 表达式表示类型 T 中元素的联合类型。这是因为 T 是一个数组类型，number 是该数组的索引类型，T[number] 表示可以取到 T 中所有可能的值。
 */
type TupleToUnion<T extends unknown[]> = T[number];

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
