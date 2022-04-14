const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    let tt = names.reduce((acc, elem, i, arr) => {
        acc += elem.toLocaleLowerCase()
        return acc
    }, [])
    let hh = tt.split('')
    let aa = hh.reduce((acc, elem, i, arr) => {
        elem == 'a'? acc += 1 : acc += 0
        return acc
    }, 0)
    return aa
  }

  console.log(containsA());