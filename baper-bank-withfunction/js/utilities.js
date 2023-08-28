function getInputfieldValueById(inputFieldId){
    const inputField= document.getElementById(inputFieldId);
    const inputFieldString= inputField.value;
    const inputFieldvalue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldvalue;
};


function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
};

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};