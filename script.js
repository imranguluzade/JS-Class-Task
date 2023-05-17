class Students {
  constructor(student, points, finalPoint) {
    this._student = student;
    this._points = points;
    this._finalPoint = finalPoint;
  }

  _calculator() {
    const sumOfPoints = this._points.reduce(function (accmulator, current) {
      return accmulator + current;
    }, 0);
    const resultOfAverage =
      (sumOfPoints + this.finalPoint) / (this._points.length + 1);
    return resultOfAverage;
  }
  showActivity() {
    const resultOfAverage = this._calculator();
    if (resultOfAverage > 70) {
      return `Tələbənin adı:${this._student}; Qiymətləri ${this._points}; Final Qiyməti: ${this._finalPoint} Status: Keçib`;
    } else {
      return `Tələbənin adı:${this._student}; Qiymətləri ${this._points}; Final Qiyməti: ${this._finalPoint} Status: Kəsilib`;
    }
  }
}

const students = [
  new Students("Imran", [80, 25, 90], 75),
  new Students("Kenan", [70, 65, 70], 80),
  new Students("Elman", [60, 75, 80], 20),
  new Students("Nicat", [80, 85, 90], 75),
];

for (const student of students) {
  console.log(student.showActivity());
}
