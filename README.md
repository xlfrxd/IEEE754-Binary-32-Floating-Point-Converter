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

To start using the translator, simply open the `index.html` file in your web browser. The user interface will guide you through the process of entering your input and obtaining the corresponding decimal output.

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

1. **Zero**: Both positive and negative zero.
2. **Infinity**: Both positive and negative infinity.
3. **NaN**: Not-a-Number values.
4. **Denormalized Numbers**: When the exponent is zero and the mantissa is non-zero.

## Troubleshooting

If you encounter any issues while using the translator, consider the following tips:

1. Ensure that the hexadecimal input is exactly 8 characters long and the binary input is correctly divided into 1, 8, and 23 bits.
2. Check that you have selected the correct input type and output format.
3. If the result is not displaying correctly, refresh the page and try again.

## Credits

This project was developed as part of the CSARCH2 course at De La Salle University - Manila, College of Computer Studies.

- **Instructor**: Mr. Cempron, Jonathan Paul
- **Developers**: Alfred Victoria, Izabella Imperial, Julianne Ong, Rey Inocencio 
