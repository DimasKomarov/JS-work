// Каким будет результат выполнения этого кода?

let user = {
    name: "John",
    go: function () { console.log(this.name) }
}; // подвох - это точка с запятой

user.go()

// P.S. Здесь есть подвох :)