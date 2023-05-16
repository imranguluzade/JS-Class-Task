class Students {
  constructor(student, points, finalPoint) {
    this.student = student;
    this.points = points;
    this.finalPoint = finalPoint;
  }

  calculator() {
    const sumOfPoints = this.points.reduce(function (accmulator, current) {
      return accmulator + current;
    }, 0);
    const resultOfAverage =
      (sumOfPoints + this.finalPoint) / (this.points.length + 1);
    return resultOfAverage;
  }
  showActivity() {
    const resultOfAverage = this.calculator();
    if (resultOfAverage > 70) {
      return `Tələbənin adı:${this.student}; Qiymətləri ${this.points}; Final Qiyməti: ${this.finalPoint} Status: Keçib`;
    } else {
      return `Tələbənin adı:${this.student}; Qiymətləri ${this.points}; Final Qiyməti: ${this.finalPoint} Status: Kəsilib`;
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
