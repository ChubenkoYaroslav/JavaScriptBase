const firstArray = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];

const myArray = firstArray.filter(i => {
  
  return i !== null && i !== 0 && i !== false && i !== undefined && i !== '' && !Number.isNaN(i);
});

console.log(myArray);
