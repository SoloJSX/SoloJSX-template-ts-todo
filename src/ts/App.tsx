interface TodoListItem_I {
    id: string;
    text: string;
}

export interface App_I {
    items: TodoListItem_I[];
    list: HTMLElement;
    input: HTMLInputElement;
}

export default class App {
    static init() {
        const items: TodoListItem_I[] = [];
        const list = <div id="todoList"></div>;
        const input = <input id="todoInput" type="text" />;
        const app = { items, list, input };
        const btn = <div id="addBtn" onClick={() => App.#add(app)}> Add </div>;

        document.body.append(<div id="app"> {input} {btn} {list} </div>);
    }
    static #add(app: App_I) {
        app.items.push({ id: crypto.randomUUID(), text: app.input.value });
        app.input.value = "";
        App.#updateList(app);
    }
    static #remove(app: App_I, tli: TodoListItem_I) {
        app.items = app.items.filter(i => i.id !== tli.id);
        App.#updateList(app);
    }
    static #updateList(app: App_I) {
        app.list.innerHTML = "";
        for (const tli of app.items) {
            app.list.prepend(App.#getListElement(app, tli));
        }
    }
    static #getListElement(app: App_I, tli: TodoListItem_I) {
        const text = tli.text;
        const date = new Date;
        const dateText = [date.getFullYear(), date.getMonth(), date.getDate()].join("-");

        return <div class="todoListItem">
            <div>{text}</div>
            <div class="todoListItemDate"> {dateText} </div>
            <div class="removeBtn" onClick={() => App.#remove(app, tli)}>Remove</div>
        </div>;
    }
}

App.init();