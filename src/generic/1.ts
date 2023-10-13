/*
  There is a getPromise() function that returns a promise that lets you access an array containing strings and numbers.
  Complement this function with generics so that it returns the correct type.
*/

function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};