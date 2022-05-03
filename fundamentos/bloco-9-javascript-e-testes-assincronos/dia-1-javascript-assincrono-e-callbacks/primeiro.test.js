// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
//   });

////////////////////////////////////////////////////////////////

// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     }, 500);
//   });

  //////////////////////////////////////////////////////////////

//   test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//       } catch (error) {
//         done();
//       }
//     }, 500);
//   });

///////////////////////////////////////////////////////////////

// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//       } catch (error) {
//         done(error); // Alteramos esta linha
//       }
//     }, 500);
//   });

////////////////////////////////////////////////////////////

// const asyncSum = (a, b, callback) => {
//     setTimeout(() => {
//       const result = a + b + 1;
//       callback(result);
//     }, 500);
//   };
  
//   test('Testando asyncSum, soma 5 mais 10', (done) => {
//     asyncSum(5, 10, (result) => {
//       try {
//         expect(result).toBe(15);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });

/////////////////////////////////////////////////////////////////

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando uppercase', (done) => {
  uppercase("test", (result) => {
    try {
      expect(result).toBe("TEST");
      done();
    } catch (error) {
      done(error);
    }
  });
});