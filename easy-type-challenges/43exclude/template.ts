// type MyExclude<T, U> = any
type MyExclude<T, U> =  T extends U ? never : T

type test1 = '1' | '2' | '3' | '4' | '5' 
type test2 = '2' | '3' | '4' | '5' | '6' | '7' | '8'


// Exclude <T, U>类型，但不能直接使用它本身
// 从联合类型T中排除U的类型成员，来构造一个新的类型
type t1 = Exclude<'a' | 'b' | 'c', 'a'>
type t2 = Exclude<test1, test2>