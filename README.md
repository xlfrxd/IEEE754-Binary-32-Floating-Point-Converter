# IEEE754-Binary-32-Floating-Point-Translator

Web-based IEEE754 Binary-32 Floating Point Simulator for the completion of the requirement CSARCH2 under De La Salle University - Manila, College of Computer Studies.

## User Manual

This user manual provides detailed instructions on how to use the IEEE-754 Binary-32 Floating Point Translator website.

### Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Using the Translator](#using-the-translator)
    - [Selecting Input Type](#selecting-input-type)
    - [Entering Hexadecimal Input](#entering-hexadecimal-input)
    - [Entering Binary Input](#entering-binary-input)
    - [Choosing Output Format](#choosing-output-format)
    - [Translating the Input](#translating-the-input)
    - [Saving the Result to a File](#saving-the-result-to-a-file)
4. [Special Cases](#special-cases)
5. [Troubleshooting](#troubleshooting)
6. [Credits](#credits)

## Introduction

The IEEE-754 Binary-32 Floating Point Translator is a web-based tool designed to convert hexadecimal and binary representations of IEEE-754 Binary-32 floating-point numbers into their decimal equivalents. This tool supports both normalized and special cases such as zero, infinity, and NaN.

## Getting Started

To start using the translator, simply open the [IEEE754-32 Binary 32 Converter](https://ieee-754-binary-32-floating-point-translator.vercel.app/) in your web browser. The user interface will guide you through the process of entering your input and obtaining the corresponding decimal output.

## Using the Translator

### Selecting Input Type

1. Locate the "Input Type" dropdown menu at the top of the form.
2. Select either "Hexadecimal" or "Binary" depending on the type of input you wish to enter.

### Entering Hexadecimal Input

1. After selecting "Hexadecimal" as the input type, four input fields labeled "00" will appear.
2. Enter the hexadecimal value (8 characters, 2 characters per field) you want to convert.

### Entering Binary Input

1. After selecting "Binary" as the input type, three input fields labeled "S", "Exponent", and "Mantissa" will appear.
2. Enter the binary value for the sign (1 bit), exponent (8 bits), and mantissa (23 bits) respectively.

### Choosing Output Format

1. Locate the "Output Format" dropdown menu below the input fields.
2. Select either "Floating Point" or "Fixed Point" to choose the desired format for the output.

### Translating the Input

1. Click the "Translate" button to process the input and display the result.
2. The translated result will appear in the output section below the button.

### Saving the Result to a File

1. Once the translation is complete, the "Save to File" button will be enabled.
2. Click the "Save to File" button to download the result as a text file (`IEEE754_result.txt`).

## Special Cases

The translator handles the following special cases:

**Zero:** 
- When asked to represent Zero values in Single-Precision Binary, the representation consists of the respective sign bit, and all bits of the sign and exponent fields set to 0.

**Infinity:**
- Falls under this case when the normalized value in binary format has an exponent exceeding 127.
- Representation consists of the sign bit, all sign bits set to 1, and all exponent fields set to 0.

**Denormalized Numbers:**
- Numbers that are smaller than the smallest normaliz number/falls under the denormalized area.
- Falls under this case when the normalized value in binary format has an exponent less than -126
- To represent denormalized numbers, exponent bits are set to zero and the mantissa follows the normal representation

**NaN**: 
- Signaling NaN:
    - signals invalid operation exception
    - Represented by sign bit, all exponent bits set to 1, and significand follows the rules: MSb = 0, is nonezero
- Quiet NaN:
    - floating-point result allows results to be propagated
    - Represented by sign bit, all exponent bits set to 1, and significand follows the rules: MSb = 1, is nonezero

## Troubleshooting

If you encounter any issues while using the translator, consider the following tips:

1. Ensure that the hexadecimal input is exactly 8 characters long and the binary input is correctly divided into 1, 8, and 23 bits.
2. Check that you have selected the correct input type and output format.
3. If the result is not displaying correctly, refresh the page and try again.

## Test Cases

### Binary 
**Normal Binary**

![Normal Binary](https://github.com/user-attachments/assets/ab25b260-01ba-43ef-b45b-99d384de7adf)

**Negative Binary**

![Negative Binary](https://github.com/user-attachments/assets/a3d71f86-953e-4b49-82e6-21510e8a05fb)

**Negative Exponent**

![Negative Exponent](https://github.com/user-attachments/assets/7e12a09e-b674-42a5-84f1-34fa4ec116ab)

**Negative Binary and Exponent**

![Negative Binary Negative Exponent](https://github.com/user-attachments/assets/e5d416c4-b442-4272-94da-d309d5797981)

**Smallest Exponent**

![Smallest](https://github.com/user-attachments/assets/a4b5617d-9c4f-481e-9496-869e55287bf2)

**Largest Exponent**

![Largest Exponent](https://github.com/user-attachments/assets/1c9e572f-1ff1-4eca-a315-3a7c029c72af)


### Special Cases

**Zero**

![Zero](https://github.com/user-attachments/assets/f41c9dc2-bbfa-4c36-a2f6-1961f1a0e4e4)

**Negative Zero**

![Negative Zero](https://github.com/user-attachments/assets/5d27ad43-541d-45f6-9928-d2f77a206c7e)

**Denormalized**

**Positive Infinity**

![image](https://github.com/user-attachments/assets/18dea5a0-2e5a-471c-8b09-1588ca13b2d2)

**Negative Infinity**

![image](https://github.com/user-attachments/assets/5535fcd0-5002-4dc3-98a3-9faf0694e515)

**sNaN**

**qNaN**

### Decimal
**Postive Decimal**

![Normal Numbe](https://github.com/user-attachments/assets/d3ddeefc-81a1-4fd3-82d6-ac4b1803315c)

**Negative Decimal**

![Negative Decimal](https://github.com/user-attachments/assets/d65a1442-ec29-4238-988b-0f77a1ddafa9)


## Credits

This project was developed as part of the CSARCH2 course at De La Salle University - Manila, College of Computer Studies.

- **Instructor**: Mr. Cempron, Jonathan Paul
- **Developers**: Alfred Victoria, Izabella Imperial, Julianne Ong, Rey Inocencio 
