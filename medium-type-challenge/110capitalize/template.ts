// type MyCapitalize<S extends string> = any

type MyCapitalize<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Uppercase<F>}${Rest}`
  : S;

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
