function showMyName(name: string) {
  console.log(name);
}

showMyName('John');

function square(a: number): number {
  return a * a;
}

square(10);

function sum(
  this: any,
  title: string,
  ...numbers: number[]
) {
  return (
    title +
    ' = ' +
    numbers.reduce(
      (sum: number, num: number): number =>
        sum + num,
      0
    )
  );
}

sum('Numbers', 1, 6, 10);

const executeFunc = (
  func: any
): string | number | string[] => {
  const title: string = 'Lorem Ipsum';
  const age: number = 24;
  const hobby: string[] = ['Sport', 'Movies'];
  return func(title, age, hobby);
};

executeFunc(
  (
    title: string,
    age: number,
    hobbies: string
  ) => {
    return true;
  }
);
