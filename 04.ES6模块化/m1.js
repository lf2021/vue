let a = 10
let c = 20
let d = 30

function show() {
  console.log('11111111');
}

// 每个模块只允许调用一次 export default
// 如果没有指定export default导出，则默认是导出空对象{}
export default {
  a,
  c,
  show
}

// 按需导出方式
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
  console.log('oooooo');
}
