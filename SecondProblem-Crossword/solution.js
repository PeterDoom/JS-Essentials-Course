//https://judge.softuni.bg/Contests/Practice/Index/1492#1 the link for the requirments for the task! and some tests

function solve() {

   let buttons = document.querySelectorAll('button')

   let output = document.querySelector('#output p')


   buttons[0].addEventListener('click', filter);
   buttons[1].addEventListener('click', sort);
   buttons[2].addEventListener('click', rotate);
   buttons[3].addEventListener('click', get);

   


   function filter() {
      let input = document.getElementById('input').value.split('');
      let secondCmd = document.getElementById('filterSecondaryCmd').value;
      let position = (+document.getElementById('filterPosition').value) - 1;

      switch (secondCmd) {
         case 'uppercase':
            output.innerHTML += input.filter((c) => c === c.toUpperCase())[position]
            break;
         case 'lowercase':
            output.innerHTML += input.filter((c) => c === c.toLowerCase())[position];
            break;
         case 'nums':
            output.innerHTML += input.filter((c) => !isNaN(c))[position];
            break;
      }

   }

   function sort() {
      let input = document.getElementById('input').value.split('').sort((a, b) => a.localeCompare(b));
      let secondCmd = document.getElementById('sortSecondaryCmd').value;
      let position = (+document.getElementById('sortPosition').value) - 1;

      if (secondCmd === "Z") {
         input = input.reverse();
      }
      output.innerHTML += input[position]

   }

   function rotate() {
      let input = document.getElementById('input').value.split('')
      let secondCmd = document.getElementById('rotateSecondaryCmd').value;
      let position = (+document.getElementById('rotatePosition').value) - 1;

      let rotation = secondCmd % input.length;

      while (rotation > 0) {
         let char = input.pop();
         input.unshift(char);
         rotation -= 1;
      }

      output.innerHTML += input[position];

   }

   function get() {
      let input = document.getElementById('input').value.split('');
      let position = +document.getElementById('getPosition').value - 1 
      output.innerHTML += input[position];
   }

}