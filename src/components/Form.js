export default class Form {
  constructor(handleFormSubmit, formSelector) {
    this._form = document.querySelector(formSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._inputList = this._form.querySelectorAll(".form__input");
    this._resetButton = this._form.querySelector(".form__button_type_reset");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  _submitFormHandler = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues(), this._form);
  };

  setEventListeners() {
    this._form.addEventListener("submit", this._submitFormHandler);
  }
}
