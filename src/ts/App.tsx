const list = <div id="todoList"></div>;
const input = <input id="todoInput" type="text" />;

const add = () => {
    const e = <div class="todoListItem">{input.value}</div>;
    e.append(<div class="removeBtn" onClick={() => e.remove()}> Remove </div>);
    list.prepend(e);
    input.value = "";
};
const btn = <div id="addBtn" onClick={add}> Add </div>;

document.body.append(<div id="app"> {input} {btn} {list} </div>);