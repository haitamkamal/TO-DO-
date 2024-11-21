const input = document.querySelector("#write")
const button = document.querySelector("#btnadd")
const div = document.querySelector("#tasks")

button.addEventListener("click", () => {
  if (input.value == "") {
    return
  }
  const li = document.createElement("li")
  li.textContent = input.value
  input.value = ""
  div.appendChild(li)

})
div.addEventListener("click", (e) => {
  if (e.target.style.textDecoration != "line-through") {
    e.target.style.textDecoration = "line-through"
  }
  else {
    e.target.style.textDecoration = "none"
  }
})
div.addEventListener("contextmenu", (e) => {
  div.removeChild(e.target)
})