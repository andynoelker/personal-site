export default class validate {
  constructor() {
    this.errors = 0;
  }

  hasErrors = () => {
    return this.errors > 0;
  }

  validate = values => {
    let errors = {};
    this.errors = 0;
    if (values.name.value == '') {
      this.errors += 1;
      errors.name = {
        value: values.name.value,
        error: 'Required',
      }
    }

    if (values.email.value == '') {
      this.errors += 1;
      errors.email = {
        value: values.email.value,
        error: 'Required',
      }
    } else if (!values.email.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-Z0]{2,})+$/)) {
      this.errors += 1;
      errors.email = {
        value: values.email.value,
        error: 'Email address is invalid',
      }
    }
    if (values.message.value == '') {
      this.errors += 1;
      errors.message = {
        value: values.message.value,
        error: 'Required',
      }
    }
    return errors;
  }
}
