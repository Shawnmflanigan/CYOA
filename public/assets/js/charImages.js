function createImg(text) {
    const myText = text

    let myColorCodes = []

    for (let i = 0; i < myText.length; i++) {
        
        myColorCodes.push(myText.charCodeAt(i))

    }


    const colorWrapperTR = document.createElement("div");
    
    let myDivArr = [];

    for (let i = 0; i < 16; i++) {
        let colorBlock = document.createElement("div");

        myDivArr.push(colorBlock); 
        colorBlock.setAttribute("style", "height:20px; width:20px;");
        let a = (Math.floor(i / (myColorCodes.length/16))) * 10
        let b = (Math.floor(i * (myColorCodes.length/16))) * 20
        let c = (Math.floor(i ^ (myColorCodes.length/16))) * 50
        let d = Math.round(a * b * c) 
        d = (Math.round(parseFloat(('0.' + String(d).substring(0, 3)))))
        colorBlock.style.backgroundColor = 'rgba(' + a + ',' + b + ',' + c + ',' + d + ')';
        colorWrapperTR.appendChild(colorBlock)
    }

    
    //create duplicates
    colorWrapperTR.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap;");
    const colorWrapperBL = colorWrapperTR.cloneNode(true)
    const colorWrapperBR = colorWrapperTR.cloneNode(true)
    reverseChildren(colorWrapperBR)
    const colorWrapperTL = colorWrapperBR.cloneNode(true)
    colorWrapperBL.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap-reverse;");
    colorWrapperTL.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap-reverse;");
    // create housing & append
    const wrapperWrapper = document.createElement("div");
    wrapperWrapper.appendChild(colorWrapperTL)
    wrapperWrapper.appendChild(colorWrapperTR)
    wrapperWrapper.appendChild(colorWrapperBL)
    wrapperWrapper.appendChild(colorWrapperBR)

    
    wrapperWrapper.setAttribute("style", "height:160px; width:160px;display: flex;flex-wrap: wrap-reverse;");

    return wrapperWrapper
}

function reverseChildren(parent) {
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
}

export { createImg }