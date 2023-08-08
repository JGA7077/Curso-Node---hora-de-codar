function a() {
  console.log('Executando a()');
}

function b() {
  console.log('Executando b()');
}

function c() {
  console.log('Executando c()');
}

setTimeout(() => {
  a()
}, 1000);

setTimeout(() => {
  b()
}, 100);

setTimeout(() => {
  c()
}, 0);
