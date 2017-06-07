class results {
  constructor(){
    const resultBox = document.getElementById('results');
  }

  show() {
    this.resultBox.classList.remove('hidden');
  }

  hide() {
    this.resultBox.classList.append('hidden');
  }
}
