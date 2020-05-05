function appendChar(char){
	let res = document.getElementById("res");

	if (char === ''){
		res.innerHTML = '';
	}else{
		res.innerHTML = res.innerHTML + char;
	}
}

function compute(){
	let res = document.getElementById("res");
	let resText = res.innerHTML;

	if (resText !== ''){
		let matches = resText.match(/(\d+)([+\-\*\/]+)(\d+)/);
		if (matches.length >= 4){
			let op1 = matches[1];
			let operand = matches[2];
			let op2 = matches[3];

			let bin1 = arrayToBin(op1.split(''));
			let bin2 = arrayToBin(op2.split(''));

			console.log(bin1);
			console.log(bin2);

			let ans = '';

			if (operand === '+'){
				ans = binToArray(bin1+bin2);
			} else if (operand === '-'){
				ans = binToArray(Math.abs(bin1-bin2));
			} else if (operand === '*'){
				ans = binToArray(bin1*bin2);
			} else if (operand === '/'){
				ans = binToArray(Math.floor(bin1/bin2));
			}

			res.innerHTML = operand === '-' ? `(-)${ans}` : ans;

			console.log(res.innerHTML);
		}
	}
}

function arrayToBin(op){
  let bin1 = 0;

  op.forEach((element) => {
    if (element === '1'){
      let tmp = 0x1;
      bin1 = bin1 << 1;
      bin1 = bin1 | 1;
    } else if (element === '0'){
      bin1 = bin1 << 1;
    }
  });

  return bin1;
}

function binToArray(bin){
  let str = [];

  for (;;){

    if (((bin & 1) == 0)){
      str.unshift('0');
      //console.log(`0: ${str.join('')}`);
    }else if (((bin & 1) == 1)){
      str.unshift('1');
      //console.log(`1: ${str.join('')}`);
    }

    bin = bin >> 1;
    // console.log(bin);

    if (bin == 0){
      break;
    }
  }

  return str.join('');
}