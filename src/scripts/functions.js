export function button() {
const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);
newButton.addEventListener('click', () => {
    alert('New button clicked!');
  });
}

