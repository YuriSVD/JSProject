fetch(link).then(responses => responses.json())
    .then(responses => {
        if (document.title === "Users") {
            for (let response of responses) {
                let userDiv = document.createElement("div");
                userDiv.classList = "user";
                let a = document.createElement("a");
                a.innerText = response.id + " " + response.name;
                a.href = "user-details.html?data=" + JSON.stringify(response);
                userDiv.appendChild(a);
                wrap.appendChild(userDiv);
            }
        } else if (document.title === "User Details") {
            let block = document.createElement("div")
            block.id = "comments";
            for (let response of responses) {
                let title = document.createElement("div");
                title.classList = "title";
                let a = document.createElement("a");
                a.innerText = response.title;
                a.href = "post-details.html?data=" + JSON.stringify(response);
                title.append(a);
                block.appendChild(title);
                wrap.appendChild(block);
            }
        } else if (document.title === "Post Details") {
            let block = document.createElement("div")
            block.id = "posts";
            for (let response of responses) {
                let commentDiv = document.createElement("div");
                commentDiv.classList = "post";
                for (let item in response) {
                    let itemDiv = document.createElement("div");
                    itemDiv.innerText = `${item} : ${response[item]}`;
                    commentDiv.appendChild(itemDiv);
                    block.appendChild(commentDiv);
                }
                wrap.appendChild(block);
            }
        }
    })