// type MyExclude<T, U> = any

/**
 * 当 T 为 'a' | 'b' | 'c' ，U 为 'a' 时，T extends U 的结果为 true 的部分会被替换为 never（即 'a'），T extends U 的结果为 false 的部分保持不变（即 'b' | 'c'），所以 Result 的类型最后结果为 'b' | 'c'。
 * 
 */
type MyExclude<T, U> =  T extends U ? never : T