export const renderOption = (value) => {
    const newOption = document.createElement('option');
    newOption.innerText = value;
    return newOption;
}