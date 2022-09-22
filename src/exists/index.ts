/**
 * 
 * @param {String} domId - id of the dom element 
 */
export let domExists = (domId: string) => {
    let tmp = document.getElementById(domId);
    return tmp != null && tmp != undefined;
};