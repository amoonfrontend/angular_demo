(function () {
  console.log("tests");
})();

(() => {
  console.log("ssss");
})();


var test = 1;

if (test > 0) {
  test ++;
  console.log(test);
}

test && (function () {
  test ++;
  console.log(test);
})();


(x => console.log(x))("ddddd");
