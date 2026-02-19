let form = document.querySelector('form');
let inp = document.querySelectorAll('input');

// event ==> submit
form.addEventListener('submit', (dets) => {
    dets.preventDefault();
    console.log(dets)

    console.log(inp);
    for(let i = 0; i<6;i++){
        console.log(inp[i].value);
    }

    //create
    let card = document.createElement('div');
    let img_div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    let b = document.createElement('b');
    let i = document.createElement('i');
    let span = document.createElement('span');

    // add style -- class
    card.classList.add('card');
    img_div.classList.add('img-div');

    // add tag into html
    document.body.append(card);

    // add child into parent tag
    card.append(img_div);
    img_div.append(img);
    card.append(h3);
    card.append(h5);
    card.append(b);
    card.append(i);
    card.append(span);
    console.log(card)

    // add text content
    
    if (inp[0].value === "" || inp[1].value === "" || inp[2].value === "" || inp[3].value === "" || inp[4].value === "" || inp[5].value === "") {
        img.setAttribute('src', "https://i1.sndcdn.com/artworks-000063431287-wlirar-t500x500.jpg")
        h3.textContent = "Meow";
        h5.textContent = "Meowww Meoww";
        b.textContent = "Meoww";
        i.textContent = "m@meow.com";
        span.textContent = "9999999999";
    } else {
        img.setAttribute('src', inp[0].value);
        h3.textContent = inp[1].value;
        h5.textContent = inp[2].value;
        b.textContent = inp[3].value;
        i.textContent = inp[4].value;
        span.textContent = inp[5].value;
    }

    // input clear 
    form.reset();
})