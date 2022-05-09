// type Trim<S extends string> = any


type Empty = ' ' | '\n' | '\t';
type TrimLeft11<S extends string> = S extends `${Empty}${infer R}` ? TrimLeft<R> : S;
type TrimRight<S extends string> = S extends `${infer R}${Empty}` ? TrimRight<R> : S;
type Trim<S extends string> = TrimRight<TrimLeft11<S>>;


type trimed11 = Trim<'  Hello World  '> // expected to be 'Hello World'
