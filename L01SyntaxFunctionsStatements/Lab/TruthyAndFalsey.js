function checkValue(value) {
  if (value) {
    console.log('Truthy');
  } else {
    console.log('Falsey');
  }
}
//falsy values => false, null, undefined, NaN, 0, 0n, ""
checkValue('Pesho');//true
checkValue('false');//true
checkValue(false);//false
checkValue('');//false
checkValue('0');//true
checkValue(0);//false
checkValue(10);//true

