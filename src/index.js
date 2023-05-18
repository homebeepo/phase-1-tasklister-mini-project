document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', function (event) {
    event.preventDefault()
    createTask(document.querySelector('#new-task-description').value)
  })
});

function createTask (input) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'X'
  p.textContent = input
  p.append(btn)
  document.querySelector('#list').appendChild(p)
}