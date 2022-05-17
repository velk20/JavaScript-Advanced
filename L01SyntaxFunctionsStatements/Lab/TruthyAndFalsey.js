function checkValue(value) {
  if (value) {
    console.log('Truthy');
  } else {
    console.log('Falsey');
  }
}

checkValue('Pesho');
checkValue('false');
checkValue(false);
checkValue('');
checkValue('0');
checkValue(0);
checkValue(10);

