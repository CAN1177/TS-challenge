// type First<T extends any[]> = any;


// 解法1 判断是否为空数组
// type First<T extends any[]> = T extends [] ? never : T[0];

// 解法2 判断数组长度
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 解法3 遍历所有元素
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 解法4 inter

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

// 涉及知识点
// extends 类型条件判断
// 获取 tuple 的length 属性
// extends union 判断规则，可以遍历出
// inter的使用（推断里面有没有）



type arr1 = ['a', 'b', 'c']
type arr2 = []

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3