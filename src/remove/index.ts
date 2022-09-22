import { errorLog } from "swen-logger";
import { getDomFromReference } from "../getters";

/**
 * Removes the DOM element from the page
 * @param {DOMElment | String } domRef - reference to the dom; If string then it is an dom ID 
 */
export let removeDom = (domRef: Document | HTMLElement) => {  
    let dom = getDomFromReference(domRef);
    
    if(dom == null || dom == undefined) {
        errorLog(`The dom is eather null or undefined`);
        return false;
    }
    
    dom.remove();
};
