class Validation {
  field: string | null | undefined;
  errorMessage: string[];

  constructor(field: string | null | undefined) {
    this.field = field;
    this.errorMessage = [];
  }

  IsRequired(errorMessage?: string) {
    if (this.field == null || this.field === "") {
      errorMessage ? this.errorMessage.push(errorMessage) : this.errorMessage.push("This field is Required");
    }
    return this;
  }

  MaxLength(max: number, errorMessage?: string) {
    if (this.field?.length! > max) {
      errorMessage ? this.errorMessage.push(errorMessage) : this.errorMessage.push(`This field max ${max} character`);
    }
    return this;
  }

  MinLength(min: number, errorMessage?: string) {
    if (this.field?.length! < min) {
      errorMessage ? this.errorMessage.push(errorMessage) : this.errorMessage.push(`This field min ${min} character`);
    }
    return this;
  }

  EmailOnly(errorMessage?: string) {
    const pattern: RegExp = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \\t]|(\\[\\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\\t -Z^-~]*])"
    );

    if (!pattern.test(this.field!)) {
      errorMessage ? this.errorMessage.push(errorMessage) : this.errorMessage.push("This field must Email format");
    }

    return this;
  }

  RangeNumeric(min: number, max: number, errorMessage?: string) {
    const numeric = parseFloat(this.field!);

    if (isNaN(numeric)) {
      this.errorMessage.push("This field must be numeric");
    }

    if (numeric < min || numeric > max) {
      errorMessage ? this.errorMessage.push(errorMessage) : this.errorMessage.push(`This field have min ${min} and max ${max}`);
    }

    return this;
  }

  Validate() {
    return this.errorMessage.length > 0 ? false : true;
  }

  Errors() {
    return this.errorMessage;
  }
}

export default function VyerValidation(field: string | null | undefined) {
  return new Validation(field);
}
