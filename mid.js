
const calculation = (a) => {
  return b => {
    return c => {
      return a + (b * c);
    }
  }
};

const label = calculation(6);
const result = label(30)(5);
console.log(result)