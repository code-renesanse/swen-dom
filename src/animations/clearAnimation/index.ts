import { getDomFromReference } from "../../getters";

/**
 * 
 * @param {DOMElement | String} domRef - reference to the dom element 
 * @returns 
 */
export let clearAnimation = (domRef: string | HTMLElement) => {
    let dom = getDomFromReference(domRef);
    dom.style.animation = ''; 
};