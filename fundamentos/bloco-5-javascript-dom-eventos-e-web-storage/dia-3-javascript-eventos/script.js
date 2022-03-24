function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


  let dias = document.getElementById("days");

  for (i=0; i< dezDaysList.length; i +=1) {
    let dia = dezDaysList[i];
    let criadia = document.createElement("li");
    criadia.innerText = dia;
    criadia.className = "days"
    dias.appendChild(criadia);

    if( dia == 24 || 25 || 31) {
      criadia.className = "day holiday"
    }
    else if ( dia == 4 || 11 || 18 || 25) {
      criadia.className = "day friday"
    }
  }

  let botao = document.createElement("button");
  document.getElementsByClassName("buttons-container")[0].appendChild(botao);