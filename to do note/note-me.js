        // gett all top fields to apply
        const titles = document.getElementById("title");
        const txmsg = document.getElementById("txmsg");
        const getdate = document.getElementById("getdate");
        // declare a click funtion to create new element
        function addnew() {
        var gparent = document.getElementById("notes");
        var parent = document.createElement("div");
        parent.classList.add("disp");
        gparent.append(parent);
        // create all elements dynamically
        const title = document.createElement("h2");
        const note = document.createElement("p");
        const data = document.createElement("span");
        const delta = document.createElement("button");
        // append them all
        parent.appendChild(title);
        parent.appendChild(note); 
        parent.appendChild(data);
        parent.appendChild(delta);
        // apply values to the children contentText now
        title.innerHTML = titles.value;
        note.innerHTML = txmsg.value;
        data.innerHTML = getdate.value;
        delta.innerHTML = "&#x2713";
        //  Remove btn apply for done Note
        delta.addEventListener('click', function () {
            gparent.removeChild(parent);
        });}
