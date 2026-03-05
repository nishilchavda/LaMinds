// select
let form = document.querySelector("form");
let usrename = document.querySelector("#name");
let drole = document.querySelector("#role");
let dbio = document.querySelector("#bio");
let imgUrl = document.querySelector("#url");



// event -- submit(form)
// use only this keyword

const UserManagement = {
    users: [],
    
    // submit form
    init: function () {
        console.log(this.submitForm.bind(this));
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
        console.log(this);
        this.addUser();
    },
    addUser : function () {
        this.users.push({
            username: usrename.value,
            role: drole.value,
            bio: dbio.value,
            url: url.value,
        });
        console.log(this.users);
        this.renderUi();
        form.reset();
        localStorage.setItem("data", JSON.stringify(this.users));
    },
        
    
    // add user(html) function
    renderUi: function () {
        let card = document.createElement("div");
        card.className = "card max-w-lg w-auto overflow-hidden border border-red-950 rounded-xl px-2 py-8 text-center shadow-xl";

        let image = document.createElement("img");
        image.className = "max-w-[200px] max-h-[200px] rounded-full shadow-xl w-full h-full mx-auto my-0 mb-4";
        image.setAttribute("src", imgUrl.value);

        let h2 = document.createElement("h2");
        h2.className = "text-3xl font-medium text-red-950 pt-2";
        h2.textContent = usrename.value;

        let role = document.createElement("p");
        role.className = "text-xl font-medium text-gray-500";
        role.textContent = drole.value;

        let bio = document.createElement("p");
        bio.className = "text-lg font-semibold py-2";
        bio.textContent = dbio.value;

        // appendChild
        let users_cards = document.querySelector(".users");
        users_cards.appendChild(card);
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(role);
        card.appendChild(bio);

    },
    // reset form
    
    // render ui

};

UserManagement.init();

