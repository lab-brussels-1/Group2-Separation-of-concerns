import { INPUT_ID , OUTPUT_ID} from "../../data/constants.js";
import {renderOption} from "../components/component.js"

export const addanItem = () => {
    const newItemValue = document.getElementById(INPUT_ID).value;
    const newOption = renderOption(newItemValue);
    document.getElementById(OUTPUT_ID).prepend(newOption);
};
    