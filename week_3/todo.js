let tasks = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return; // 빈 값 방지
  tasks.push(input.value);
  input.value = "";
  render();
});

function remove(list, li) {
    list.removeChild(li);
}

const render = () => {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // 초기화
  tasks.forEach(task => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.textContent = '❌';

    li.textContent = task;
    li.onclick = () => {
        li.style.textDecoration = "line-through";
    };
    li.append(delBtn);
    list.appendChild(li);
    delBtn.onclick = () => {
        list.removeChild(li);
        tasks.splice(tasks.at(task), 1); // 더 완벽히 하고 싶어서 인터넷에서 찾아서 넣은 기능입니다
    };

  });
};

