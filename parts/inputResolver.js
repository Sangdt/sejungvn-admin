import FormSubmitInput from "./customInput/FormSubmitInput";
import MoneyInput from "./customInput/MoneyInput";

export default function resolveInput(type) {
    if (type.name === 'price') {
      return MoneyInput
    }
    if (type.name === 'submissionIfno') {
      return FormSubmitInput
    }
  }