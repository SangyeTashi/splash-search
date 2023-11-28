function stt() {
    let inputField = document.getElementById('transcript');
    let inputValue = inputField.value;

    // add tsek and shey after ངོ
    let modifiedValue = inputValue.replace(/ངོ$/, 'ངོ་། །');
    modifiedValue = modifiedValue.replace(/ནོ$/, 'ནོ། །');
    modifiedValue = modifiedValue.replace(/དོ$/, 'དོ། །');
    modifiedValue = modifiedValue.replace(/འོ$/, 'འོ། །');
    modifiedValue = modifiedValue.replace(/སོ$/, 'སོ། །');
    modifiedValue = modifiedValue.replace(/ཏོ$/, 'ཏོ། །');
    modifiedValue = modifiedValue.replace(/རོ$/, 'རོ། །');
    modifiedValue = /(?:།|་|ག|ཤ)$/.test(modifiedValue)
        ? modifiedValue
        : modifiedValue + '།';
    modifiedValue = modifiedValue.replace(/ $/, '');
    modifiedValue = modifiedValue.replace(/ང།/g, 'ང་།');
    // add spaces after shay unless there are two shay together
    modifiedValue = modifiedValue.replace(/(?<!།)།(?!།)/g, '། ');
    modifiedValue = modifiedValue.replace(/།།/g, '། །');
    // remove extra tsek
    modifiedValue = modifiedValue.replace(/༑/g, '།');
    modifiedValue = modifiedValue.replace(/ག། /g, 'ག །');

    modifiedValue = modifiedValue.replace(/་+/g, '་');
    modifiedValue = modifiedValue.replace(/[༼༽]/g, '');

    // remove extraspaces
    modifiedValue = modifiedValue.replace(/ +/g, ' ');

    modifiedValue = modifiedValue.replace(/^[༌། ]+/, '');
    modifiedValue = modifiedValue.replace(/^་/, '');
    modifiedValue = modifiedValue.replace(/^[ིེོུ]+/, '');

    modifiedValue = modifiedValue.replace(/ཕྱིར$/, 'ཕྱིར།');
    modifiedValue = modifiedValue.replace(/རྩ་བ$/, 'རྩ་བ་ལས།');
    modifiedValue = modifiedValue.replace(/རྩ་བ།/, 'རྩ་བ་ལས།');
    modifiedValue = modifiedValue.replace(/། ། /g, '། །');
    modifiedValue = modifiedValue.trimEnd();

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        'value'
    ).set;
    nativeInputValueSetter.call(inputField, modifiedValue);

    var ev2 = new Event('input', { bubbles: true });
    inputField.dispatchEvent(ev2);
}

// Create a new button element
const newButton = document.createElement('button');
newButton.textContent = 'Click me'; // Set the button text (change as needed)
newButton.style.position = 'fixed';
newButton.style.bottom = '8rem';
newButton.style.right = '45vw';
newButton.style.backgroundColor = 'yellow';
newButton.className =
    'focus:outline-none text-white bg-yellow-500 font-medium text-md p-4 sm:p-9';

newButton.addEventListener('click', () => {
    stt();
});

const newButton2 = document.createElement('button');
newButton2.textContent = 'Click me'; // Set the button text (change as needed)
newButton2.style.position = 'fixed';
newButton2.style.bottom = '8rem';
newButton2.style.right = '35vw';
newButton2.style.backgroundColor = 'yellow';
newButton2.className =
    'focus:outline-none text-white bg-yellow-500 font-medium text-md p-4 sm:p-9';

newButton2.addEventListener('click', () => {
    let inputField = document.getElementById('transcript');

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        'value'
    ).set;
    nativeInputValueSetter.call(inputField, inputField.value + ' །');

    var ev2 = new Event('input', { bubbles: true });
    inputField.dispatchEvent(ev2);
});

// Append the new button to the parent element
document.body.appendChild(newButton);
document.body.appendChild(newButton2);
