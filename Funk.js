function arbitraryN(n1, n2) {
    if (n1 % 2 === 0 && n2 % 2 === 0) {
      return n1 * n2;
    } else if (n1 % 2 !== 0 && n2 % 2 !== 0) {
      return n1 + n2;
    } else {
      if (n1 % 2 !== 0) {
        return n1;
      } else {
        return n2;
      }
    }
  }
  
  console.log(arbitraryN(6, 8)); 
  console.log(arbitraryN(3, 5)); 
  console.log(arbitraryN(3, 8)); 
  