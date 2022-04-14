const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return [arrays.reduce((par1, par2) => par1 + ', ' + par2)]
  }

  console.log(flatten());