class Form {
  constructor(showResults){
    const form = document.getElementById('search');
    this._onSubmitCallback = this._onSubmitCallback.bind(this);
    this.showResults = showResults;
    form.addEventListener('submit', this._onSubmitCallback);
  }

  _onSubmitCallback(event) {
    const query = document.getElementById('query-input');
    query.placeholder = "";
    this.
    console.log("Submitted", query.value);
    event.preventDefault();
  }
}
