import { BUTTONCLICK_EVENT } from "../../data/constants.js";
import {addanItem}from "../handlers/handler.js";

export const click=( value)=>{
    value.addEventListener(BUTTONCLICK_EVENT,addanItem);
}