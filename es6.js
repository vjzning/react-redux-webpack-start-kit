'use strict'
function p1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.33) {
        reject('p1_fail');
      } else {
        resolve('p1_ suc');
      }
    }, 1000);
  });
}
function p2(p1) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.33) {
        reject('p2_ fail');
      } else {
        resolve(p1 + 'p2 _ suc');
      }
    }, 1000)
  });
}
function p3(p2) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.33) {
        reject('p3_fail');
      } else {
        resolve(p2 + ' p3_ suc');
      }
    }, 1000);
  });
}
function p4(p3) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.33) {
        reject('p4_ fail');
      } else {
        resolve(p3 + 'p4 _ suc');
      }
    }, 1000)
  });
}
p1().then((val) => {
  console.log(1, val);
  return p2(val)
})
.then(function (val) {
  console.log(2, val);
  return p3(val);
})
.then(function (val) {
  console.log(3, val);
  return p4(val);
})
.then(function (val) {
  console.log(4, val);
})
.catch((err) => {
  console.log(err);
});