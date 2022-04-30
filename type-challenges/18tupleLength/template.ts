// type Length<T> = any


// 增加约束extends readonly any[]， 不然T没有length 属性，这会报错
type MyLength<T extends readonly any[]> = T["length"]


type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = MyLength<tesla> // expected 4
type spaceXLength = MyLength<spaceX> // expected 5