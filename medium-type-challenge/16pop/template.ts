
type Pop<T extends any[]> = T extends [...infer S, infer U] ? S : never;


type arr11 = ['a', 'b', 'c', 'd']
type arr22 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]



/* 实现Shift */

type Shift<T extends any[]> = T extends [infer U, ...infer S] ? S : never;

type re11 = Shift<arr11> // expected to be [ 'b', 'c', 'd]
type re22 = Shift<arr22> // expected to be [2, 1]


/* 实现Push */

type MyPush<T extends any[], U> = [...T, U]

type Result1 = MyPush<[1, 2], '3'> // [1, 2, '3']


/* 实现 UnShift*/
type MyUnshift<T extends any[], U> =  [U, ...T]
	
type Result2 = MyUnshift<[1, 2], 0> // [0, 1, 2,]