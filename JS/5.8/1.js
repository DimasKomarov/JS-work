// Есть массив сообщений:

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. 
// Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

// Имея такую вводную информацию, решите, 
// какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». 
// Структура должна быть подходящей, чтобы можно было однозначно сказать, 
// было ли прочитано это сообщение для каждого объекта сообщения.

// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. 
// Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.

// Мой ответ: Можно использовать weakSet для хранения информации о прочитанных сообщениях.

// Их ответ:

// Можно хранить прочитанные сообщения в WeakSet:

messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)

// WeakSet позволяет хранить набор сообщений и легко проверять наличие сообщения в нём.

// Он очищается автоматически. 
// Минус в том, что мы не можем перебрать его содержимое, 
// не можем получить «все прочитанные сообщения» напрямую. 
// Но мы можем сделать это, перебирая все сообщения и фильтруя те, которые находятся в WeakSet.

// Альтернативным решением может быть добавление свойства вида message.isRead=true к сообщению после его прочтения. 
// Так как сообщения принадлежат чужому коду, то это не очень хорошо, но если использовать свойство-символ, 
// то вероятность конфликтов будет небольшой.

// Например:

// символьное свойство вместо имени, которое известно только нашему коду
let isRead = Symbol("isRead");
messages[0][isRead] = true;
// Теперь чужой код вряд ли увидит наше дополнительное свойство.

// Хотя символы и позволяют уменьшить вероятность проблем, использование здесь WeakSet лучше с архитектурной точки зрения.