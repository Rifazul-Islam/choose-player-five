
const playersArray = [];

function display(cardPlayer) {

    console.log(cardPlayer)

    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = '';


    if (cardPlayer.length > 4) {

        alert('plese five not allow card');

    }

    for (let i = 0; i < cardPlayer.length; i++) {
        const name = playersArray[i].playersName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1} </th>
            <td>${name}</td>
          
          `;

        tableBody.appendChild(tr);

    }

}

function addplayercard(element) {

    element.disabled = true;
    const playersName = element.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        playersName: playersName
    }
    playersArray.push(playerObject);

    document.getElementById('Total-count').innerText = playersArray.length;

    display(playersArray);
}

