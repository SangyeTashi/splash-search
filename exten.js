function stt() {
    let inputField = document.getElementById('transcript');
    let inputValue = inputField.value;

    // add tsek and shey after ངོ
    let modifiedValue = inputValue.replace(/ངོ$/, 'ངོ་། །');
    modifiedValue = modifiedValue.replace(/ $/, '');
    modifiedValue = modifiedValue.replace(/ནོ$/, 'ནོ། །');
    modifiedValue = modifiedValue.replace(/དོ$/, 'དོ། །');
    modifiedValue = modifiedValue.replace(/འོ$/, 'འོ། །');
    modifiedValue = modifiedValue.replace(/སོ$/, 'སོ། །');
    modifiedValue = modifiedValue.replace(/ཏོ$/, 'ཏོ། །');
    modifiedValue = modifiedValue.replace(/རོ$/, 'རོ། །');
    modifiedValue = /(?:།|་|ག|ཤ)$/.test(modifiedValue)
        ? modifiedValue
        : modifiedValue + '།';
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

    modifiedValue = modifiedValue.replace(/^[༌། ]+/g, '');
    modifiedValue = modifiedValue.replace(/^་/g, '');
    modifiedValue = modifiedValue.replace(/^[ིེོུ]+/g, '');

    modifiedValue = modifiedValue.replace(/ཕྱིར$/g, 'ཕྱིར།');
    modifiedValue = modifiedValue.replace(/རྩ་བ$/g, 'རྩ་བ་ལས།');
    modifiedValue = modifiedValue.replace(/རྩ་བ།/g, 'རྩ་བ་ལས།');
    modifiedValue = modifiedValue.replace(/། ། /g, '། །');
    modifiedValue = modifiedValue.replace(/་ /g, '་');
    modifiedValue = modifiedValue.replace(/ ་/g, '');
    modifiedValue = modifiedValue.replace(/…+/g, '');

    //specific to current ab

    modifiedValue = modifiedValue.replace(/་ངོས་/g, '་ང་');
    modifiedValue = modifiedValue.replace(/^ངོས་/g, 'ང་');
    modifiedValue = modifiedValue.replace(/ ངོས་/g, 'ང་');
    // modifiedValue = modifiedValue.replace(/ང་ཡིས་/g, 'ངས་');
    modifiedValue = modifiedValue.replace(/་ང་ཡི་/g, '་ངའི་');
    modifiedValue = modifiedValue.replace(/དེ་ལ་/g, 'དེར་');
    modifiedValue = modifiedValue.replace(/ཁོ་མོ་/g, 'མོ་');
    modifiedValue = modifiedValue.replace(/འདི་རུ་/g, 'འདིར་');

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
    document.querySelector('audio.w-full').playbackRate = 1.2;
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

    nativeInputValueSetter.call(inputField, removeFirstWord(inputField.value));

    var ev2 = new Event('input', { bubbles: true });
    inputField.dispatchEvent(ev2);
});

// Add undo button
const buttonUndo = document.createElement('button');
buttonUndo.textContent = 'Undo'; // Set the button text (change as needed)
buttonUndo.style.position = 'fixed';
buttonUndo.style.bottom = '8rem';
buttonUndo.style.right = '20vw';
buttonUndo.style.backgroundColor = 'yellow';
buttonUndo.className =
    'focus:outline-none text-white bg-yellow-500 font-medium text-md p-4 sm:p-9';

buttonUndo.addEventListener('click', () => {
    let lastText = document.getElementsByClassName(
        'py-4 cursor-pointer flex justify-between gap-1 items-center border-b-2 border-b-[#384451]'
    )[0];

    lastText.click();
});

// Append the new button to the parent element
document.body.appendChild(newButton);
document.body.appendChild(newButton2);
document.body.appendChild(buttonUndo);

function removeFirstWord(string) {
    let result = string.replace(/.*?[་།]/, '');
    return result;
}
