document.addEventListener('DOMContentLoaded', function () {


  var btn = document.createElement('input');
  btn.type = 'submit'
  btn.value = 'Find Prime';

  var numberTxt = document.createElement('input');
  numberTxt.type = 'text'
  numberTxt.value = '10000';

  btn.onclick = function() {
      var NUMBER = parseInt(numberTxt.value)
      var r = 0;


      var startJS = window.performance.now();
      r = findPrime(NUMBER)
      var finishJS = window.performance.now();
      var milisecondsJS = startJS - finishJS;
      var p = document.createElement('p');
      p.innerHTML = 'JS: ' + milisecondsJS + ' r:' + r;
      document.body.appendChild(p);


      var startJAVA = window.performance.now();
      r = echo.findPrimeJava(NUMBER)
      var finishJAVA = window.performance.now();
      var milisecondsJAVA = startJAVA - finishJAVA + ' r:' + r.content;
      var p = document.createElement('p');
      p.innerHTML = 'JAVA: ' + milisecondsJAVA;
      document.body.appendChild(p);

      /*
       * This code is commented as I had to use the same method
       * to access native or java code.
       */

      //var startNATIVE = window.performance.now();
      //r = echo.findPrimeNative(NUMBER);
      //var finishNATIVE = window.performance.now();
      //var milisecondsNATIVE = startNATIVE - finishNATIVE;
      //var p = document.createElement('p');
      //p.innerHTML = 'NATIVE: ' + milisecondsNATIVE + ' r:' + r;
      //document.body.appendChild(p);
  }
  document.body.appendChild(btn);
  document.body.appendChild(numberTxt);

});

function sum(n) {
    var signal;
    var i, j;
    var total = 0;
    var r1;
    var start = n / 2;

    for (j = 0; j <= n; j++) {
        r1 = start;
        signal = -1;
        for (i = 0; i<= n; i++) {
            r1 = r1 + (i * signal);
            signal = -signal;
        }
        total = total + r1;
    }
    return total;
}

function findPrime(n)
{
    var count = 0;
    var i;

    for (i = 1; count < n; i++) {
        if (isPrime(i))
            count++;

        if (count == n)
            break;

    }
    console.log(i);

    return i;
}

function isPrime(n)
{
    var i = 0;
    if (n == 1 || n == 2)
        return true;

    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            break;
        }
    }

    return (n == i);
}
