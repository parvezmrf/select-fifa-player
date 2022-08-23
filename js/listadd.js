const playerArray = [];


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

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName
    }


    playerArray.push(playerObj);
    if (playerArray.length > 5) {
        alert('You can not select more than 5 players');
        return;
    }

    document.getElementById('total-added-players').innerText = playerArray.length;

    display(playerArray);
}