# Vyer Validator - Simplified String Validation

**Vyer Validator** offers streamlined string validation, simplifying the process of ensuring data integrity and accuracy in applications.

## Installation

You can install the **Vyer Validator** library using npm:

```bash
npm i --save vyer-validator
```

## Usage

```javascript
const string = "";
const validator = VyerValidator(string).IsRequired().MinLength(5);
validator.Validate(); // ==> false, because the string is empty and less than 5 characters
validator.Errors(); // => returns an array of error messages
```

## API Documentation

### Response

**Vyer Validator** returns a response that provides the following methods:

- `Validate()`: Validates your validators and returns a boolean value.
- `Errors()`: Checks for rule exceptions and returns error messages.

### Built-in Validators

**Vyer Validator** provides the following built-in validators:

- `IsRequired(errorMessage)`: Validates if the string is a non-empty value.
- `EmailOnly(errorMessage)`: Validates if the string is in Email Format.
- `MaxLength(max, errorMessage)`: Validates the maximum length of the value.
- `MinLength(min, errorMessage)`: Validates the minimum length of the value.
- `RangeNumeric(min, max, errorMessage)`: Validates the range of numeric values.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
