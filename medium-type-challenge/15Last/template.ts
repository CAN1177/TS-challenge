

/* 
解法一  与14First相反 
举例来说，如果你有 type arr1 = ['a', 'b', 'c']，那么 Last<arr1> 类型就相当于 ['any', 'a', 'b', 'c']，然后取 arr1.length（3）作为索引，也就是数组的最后一个元素 'c'，所以 Last<arr1> 的结果类型就是 'c'。
*/
type Last<T extends any[]> =  [any, ...T][T['length']]


/* 解法二   直接获取最后一项

1、T extends any[]，说明 T 是一个数组类型。
2、[any, ...T]，将 元组类型 T 组成一个新的元组类型 [any, ...T]，此时，该新的元组类型长度是 T的长度+1。
3、T['length']，T 这个元组类型的长度。
4、[any, ...T][T['length']]，理所当然变成了 [any, ...T] 元组最后一个元素的类型
*/
// type Last<T extends any[]> = T extends [...any, infer Last] ? Last : never;



type arr3 = ['a', 'b', 'c']
type arr4 = [3, 2, 1]

type tail1 = Last<arr3> // expected to be 'c'
type tail2 = Last<arr4> // expected to be 1