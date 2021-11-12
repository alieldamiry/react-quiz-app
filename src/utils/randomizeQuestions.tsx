export default function randomizeQuestions(arr: any[]) {
  const updatedArr = [...arr];
  updatedArr.sort(() => Math.random() - 0.5);
  updatedArr.forEach((question) => {
    question.options.sort(() => Math.random() - 0.5);
  });
  return updatedArr;
}
