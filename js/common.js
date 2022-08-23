// get input field value
function getInputValueById(elementId) {
    const getElementId = document.getElementById(elementId);
    const inputValueString = getElementId.value;
    const inputValue = parseFloat(inputValueString);

    return inputValue;
}


// get text value

function getTextValue(elementId) {
    const getTextId = document.getElementById(elementId);
    const getIdString = getTextId.innerText;
    const getId = parseFloat(getIdString);

    return getId;
}


function getText(elementId) {
    const getId = document.getElementById(elementId);
    const getIdString = getId;

    return getIdString;
}
