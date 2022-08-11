function findMin(array) {
	let min = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return Number(min).toFixed(2);
}

function findMax(array) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return Number(max).toFixed(2);
}

function calcSum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum = sum + Number(array[i]);
	}
	return sum.toFixed(2);
}

function calcMean(array) {
	let sum1 = calcSum(array);
	mean = sum1 / array.length;
	return mean.toFixed(2);
}

function calcMedian(array) {
	array = array.sort();
	let middle = Math.floor(array.length / 2);
	let median;
	if (array.length % 2) {
		median = ( Number(array[middle]) );
	}
	else {
		median = ( Number(array[middle - 1]) + Number(array[middle]) / 2 );
	}

	return Number(median).toFixed(2);
}

/*
function calcMedian(array) {
        array = array.sort();
        let middle = Math.floor(array.length / 2);
        for (let median = 0; median > array.length; median++) {
        if (array.length % 2) {
                median = ( Number(array[middle]) );
        }
        else {
                median = ( Number(array[middle - 1]) + Number(array[middle]) / 2 );
        }
	}

        return Number(median).toFixed(2);
}
*/

function calcMode(array) {
	let regNum = new Set(array);
	let modeNum = array.filter(item => {
        	if (regNum.has(item)) {
			regNum.delete(item);
		}
		else {
			return item;
		}
	}
)
return [...new Set(modeNum)].join(" ");
}


function calcVariance(array) {
	let mean = calcMean(array);
	
	return calcMean(array.map(function(value) {
                return Math.pow(value - mean, 2).toFixed(2);
			}
		)
	)
}

function calcStdDev(array) {
	let var1 = calcVariance(array);
	let sd = Math.sqrt(var1);
	return sd.toFixed(2);
}


function performStatistics() {
	let array = []; 
	let arr = document.getElementById("textArea").value
	array = arr.split(" ");
	
		document.getElementById("min").value = findMin(array);
		document.getElementById("max").value = findMax(array);
		document.getElementById("sum").value = calcSum(array);
		document.getElementById("mean").value = calcMean(array);
		document.getElementById("median").value = calcMedian(array);
		document.getElementById("mode").value = calcMode(array);
		document.getElementById("var").value = calcVariance(array);
		document.getElementById("stdDev").value = calcStdDev(array);
		
	return false;
}


















