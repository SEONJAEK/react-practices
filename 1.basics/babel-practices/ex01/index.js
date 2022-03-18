// require은 노드의 모듈 시스템으로 module.export로 내보낸 것을 다른 곳에서 불러와서 쓰게 한다.
const babel = require ('@babel/core');

// const fn = function(){
//     return 1;
// }

const result = babel.transform('const fn = () => 1;', {});
console.log(result);