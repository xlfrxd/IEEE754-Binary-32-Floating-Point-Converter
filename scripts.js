function saveToFile() {
    const resultText = document.getElementById('outputResult').innerText;
    const blob = new Blob([resultText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'result.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function convertIEEE754Binary() {
    const mantissa = document.getElementById('binaryMantissa').value;
    const exponent = parseInt(document.getElementById('binaryExponent').value);
    let result = '';

    // Validate input
    if (mantissa === "Infinity") {
        result = "0 | 11111111 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if (mantissa === "-Infinity") {
        result = "1 | 11111111 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if (mantissa === "0") {
        result = "0 | 00000000 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if (mantissa === "-0") {
        result = "1 | 00000000 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if (isNaN(exponent) || !Number.isInteger(exponent)) {
        result = 'Invalid exponent. Please enter an integer.';
        document.getElementById('outputResult').innerText = result;
        return;
    }

    // Determine sign bit (0 for positive numbers, 1 for negative numbers)
    const signBit = mantissa.startsWith('-') ? 1 : 0;
    const absMantissa = signBit ? mantissa.slice(1) : mantissa;

    // Normalize the mantissa
    let normalizedMantissa = absMantissa.replace('.', '');
    let normalizedExponent = exponent;

    if (absMantissa.includes('.')) {
        const parts = absMantissa.split('.');
        const integerPart = parts[0];
        const fractionalPart = parts[1];

        if (integerPart !== '0') {
            normalizedMantissa = integerPart + fractionalPart;
            normalizedExponent += integerPart.length - 1;
        } else {
            let firstOneIndex = fractionalPart.indexOf('1');
            if (firstOneIndex !== -1) {
                normalizedMantissa = fractionalPart.substring(firstOneIndex);
                normalizedExponent -= (firstOneIndex + 1);
            } else {
                normalizedMantissa = '0';
                normalizedExponent = 0;
            }
        }
    }

    // Adjust the exponent to match the IEEE 754 bias (127 for single precision)
    const biasedExponent = normalizedExponent + 127;

    // Adjust mantissa to fit 23 bits and add implicit leading 1
    normalizedMantissa = normalizedMantissa.substring(1, 24).padEnd(23, '0');

    // Ensure biased exponent is within range
    if (biasedExponent > 255) {
        if (signBit == 1) {
            result = "1 | 11111111 | 00000000000000000000000";
        }
        else {
            result = "0 | 11111111 | 00000000000000000000000";
        }
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(" | ",""))}`;
        return;
    } else if (biasedExponent <= 0) {
        result = 'Underflow: The exponent is too small for single precision.';
        document.getElementById('outputResult').innerText = result;
        return;
    }

    // Convert the fields to binary representation
    const signBitStr = signBit.toString();
    const exponentStr = biasedExponent.toString(2).padStart(8, '0');
    const fractionStr = normalizedMantissa.padEnd(23, '0');

    // Concatenate the parts to get the final IEEE 754 binary string
    result = `${signBitStr}${exponentStr}${fractionStr}`;
    let resultString = `${signBitStr} | ${exponentStr} | ${fractionStr}`;
    document.getElementById('outputResult').innerText = `${resultString} : ${binaryToHex(result)}`;
}


function convertIEEE754Decimal() {
    const decimalMantissa = document.getElementById('decimalMantissa').value;
    const decimalExponent = parseInt(document.getElementById('decimalExponent').value);

    // Validate input
    if(decimalMantissa === "Infinity") {
        result = "0 | 11111111 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if(decimalMantissa === "-Infinity") {
        result = "1 | 11111111 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if(decimalMantissa === "0") {
        result = "0 | 00000000 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }
    if(decimalMantissa === "-0"){
        result = "1 | 00000000 | 00000000000000000000000";
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(' | ',''))}`;
        return;
    }   
    if (isNaN(decimalExponent) || !Number.isInteger(decimalExponent)) {
        result = 'Invalid exponent. Please enter an integer.';
        document.getElementById('outputResult').innerText = result;
        return;
    }
    
    // Determine sign bit
    const signBit = (parseFloat(decimalMantissa) < 0) ? 1 : 0;
    const absMantissa = Math.abs(parseFloat(decimalMantissa));

    // Calculate the normalized form of the decimal number
    const normalizedValue = absMantissa * Math.pow(10, decimalExponent);

    // Convert the normalized value to binary
    const binaryRepresentation = normalizedValue.toString(2);
    
    // Extract integer and fractional parts
    const [integerPart, fractionalPart] = binaryRepresentation.split('.');

    // Normalize the mantissa
    let normalizedMantissa = integerPart + (fractionalPart || '');
    let normalizedExponent = integerPart.length - 1;

    // Adjust mantissa to fit 23 bits and add implicit leading 1
    normalizedMantissa = normalizedMantissa.substring(1, 24).padEnd(23, '0');

    // Adjust the exponent to match the IEEE 754 bias (127 for single precision)
    const biasedExponent = normalizedExponent + 127;

    // Ensure biased exponent is within range
    if (biasedExponent >= 255) {
        if (signBit == 1) {
            result = "1 | 11111111 | 00000000000000000000000";
        }
        else {
            result = "0 | 11111111 | 00000000000000000000000";
        }
        document.getElementById('outputResult').innerText = `${result} : ${binaryToHex(result.replaceAll(" | ",""))}`;
        return;
    } else if (biasedExponent <= 0) {
        result = 'Underflow: The exponent is too small for single precision.';
        document.getElementById('outputResult').innerText = result;
        return;
    }

    // Convert the fields to binary representation
    const signBitStr = signBit.toString();
    const exponentStr = biasedExponent.toString(2).padStart(8, '0');
    const fractionStr = normalizedMantissa.padEnd(23, '0');

    // Concatenate the parts to get the final IEEE 754 binary string
    result = `${signBitStr}${exponentStr}${fractionStr}`
    let resultString = `${signBitStr} | ${exponentStr} | ${fractionStr}`;
    document.getElementById('outputResult').innerText = `${resultString} : ${binaryToHex(result)}`;
}

function handleNaN(signBit, normalizedMantissa) {
    let result = '';
    if (normalizedMantissa.startsWith('1')) {
        // Quiet NaN
        result = `${signBit} | 11111111 | ${normalizedMantissa.padEnd(23, '0').substring(0, 23)}`;
    } else {
        // Signaling NaN
        result = `${signBit} | 11111111 | 01000000000000000000000${normalizedMantissa.padEnd(22, '0').substring(0, 22)}`;
    }
    return result;
}

function binaryToHex(binary) {
    const binaryGroups = binary.match(/.{1,4}/g); // Split binary string into groups of 4 bits
    const hex = binaryGroups.map(group => parseInt(group, 2).toString(16)).join('');
    return hex.toLowerCase();
}
