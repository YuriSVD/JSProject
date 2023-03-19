let wrap = document.getElementById("wrap");
let url = new URL(location.href);
let value = JSON.parse(url.searchParams.get("data"));
let valueInfo = document.createElement("div");
valueInfo.classList = "info";
/*let print = value => {
    for (let item in value) {
        let itemDiv = document.createElement("div");
        let data = value[item];
        if (typeof data === "object") {
            print(data);
        }
        else {
            itemDiv.append(`${item} : ${data}`);
            valueInfo.appendChild(itemDiv);
        }
        wrap.appendChild(valueInfo);
    }
}*/ //Хотів рекурсію, але трохи не коректно відображало інформацію
//пихтів цілий день, але так і не додумав як це реалізувати.
// проситься сюди рекурсія, але як правильно реалізувати поки не знаю
for (let key in value) {
    let div = document.createElement("div");
    div.classList.add("block", "margin");
    let keyDiv = document.createElement("div");
    keyDiv.classList.add("item", "padding");
    keyDiv.append(key);
    div.appendChild(keyDiv);
    let data = value[key];
    if (typeof data === "object") {
        let valueDiv = document.createElement("div");
        valueDiv.classList = "value";
        for (let dataItem in data) {
            let block = document.createElement("div");
            block.classList = "block";
            let dataItemDiv = document.createElement("div");
            dataItemDiv.classList.add("item", "padding");
            dataItemDiv.append(dataItem);
            block.append(dataItemDiv);
            let anotherData = data[dataItem];
            let dataDiv = document.createElement("div");
            dataDiv.classList.add("value", "padding");
            if (typeof anotherData === "object") {
                let anotherDiv = document.createElement("div");
                anotherDiv.classList.add("value");
                dataDiv.classList.remove("padding");
                for (let anotherItem in anotherData) {
                    let anotherBlock = document.createElement("div");
                    anotherBlock.classList = "block";
                    let anotherDataItemDiv = document.createElement("div");
                    anotherDataItemDiv.classList.add("item", "padding");
                    anotherDataItemDiv.append(anotherItem);
                    anotherBlock.append(anotherDataItemDiv);
                    let someAnotherData = anotherData[anotherItem];
                    let anotherDataDiv = document.createElement("div");
                    anotherDataDiv.classList.add("value", "padding");
                    anotherDataDiv.append(someAnotherData);
                    anotherBlock.append(anotherDataDiv)
                    anotherDiv.append(anotherBlock);
                    dataDiv.append(anotherDiv);
                }
            } else {
                dataDiv.append(anotherData);
            }
            block.append(dataDiv)
            valueDiv.append(block);
            div.append(valueDiv);
        }
    } else {
        let valueDiv = document.createElement("div");
        valueDiv.classList.add("value", "padding");
        valueDiv.append(data);
        div.append(valueDiv);
    }
    valueInfo.appendChild(div);
}
wrap.appendChild(valueInfo);
