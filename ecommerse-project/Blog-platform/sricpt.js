function addComment() {

  let input = document.getElementById("commentInput");

  let comment = input.value;

  let li = document.createElement("li");

  li.textContent = comment;

  document.getElementById("commentList").appendChild(li);

  input.value = "";
}