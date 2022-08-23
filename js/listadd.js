const cartArray = [];



function display(cartPlayer) {

    console.log(cartPlayer);

    const selectPlayer = document.getElementById('cart-players');
    selectPlayer.innerHTML = '';


    for (let i = 0; i < cartPlayer.length; i++) {
        console.log(cartPlayer[i].playerName);

        const name = cartPlayer[i].playerName;

        const li = document.createElement('li');

        li.innerHTML = `
        <p>${name}</p>
        `;

        selectPlayer.appendChild(li);
    }
}



function addToCart(element) {

    //    console.log(element.parentNode.parentNode.children);
    //    console.log(element.parentNode.parentNode.children[0].innerText);
    //    console.log(element.parentNode.parentNode.children[1].innerText);

    const playerName = element.parentNode.parentNode.children[0].innerText;

    //    console.log(playerName);

    const playerObj = {
        playerName: playerName
    }

    cartArray.push(playerObj);

    //     console.log(cartArray);
    //     console.log(cartArray.length);
    document.getElementById('total-added-players').innerText = cartArray.length;

    display(cartArray);
}