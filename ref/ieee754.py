# Python basis for JavaScript translation

class IEEE754Translator:
    def __init__(self, input_type, input_arg):
        self.input_type = input_type
        self.input_arg = input_arg

    def calc(self):
        if self.input_type == "hex":
            return self.calc_hex(self.input_arg)
        elif self.input_type == "bin":
            return self.calc_bin(self.input_arg)
        else:
            raise ValueError("Use 'hex' or 'bin'.") # Can be replaced with other error handling via website

    def calc_hex(self, hex_str):
        # Convert hex to binary string (same thing)
        bin_str = bin(int(hex_str, 16))[2:].zfill(32)
        return self.calc_bin(bin_str)

    def calc_bin(self, bin_str):
        # Split the binary string into sign, exponent, and mantissa
        sign = int(bin_str[0], 2)
        exponent = int(bin_str[1:9], 2)
        mantissa = int(bin_str[9:], 2)

        # Calculate the actual exponent
        exponent_actual = exponent - 127

        # Calculate the actual mantissa
        mantissa_actual = 1 + mantissa / (2 ** 23)

        # Calculate the floating-point value
        value = ((-1) ** sign) * (2 ** exponent_actual) * mantissa_actual

        return value

    def display(self, value, output_format="float"):
        if output_format == "fixed":
            return f"{value:.6f}"
        elif output_format == "float":
            return str(value)
        else:
            raise ValueError("Invalid output format. Use 'fixed' or 'float'.")

# Sample inputs
input_type = 'hex'
input_arg = '40490fdb'
translator = IEEE754Translator(input_type, input_arg)
value = translator.calc()
print(translator.display(value, output_format="float"))

input_type = 'bin'
input_arg = '01000000010010010000111111011011'
translator = IEEE754Translator(input_type, input_arg)
value = translator.calc()
print(translator.display(value, output_format="fixed"))
