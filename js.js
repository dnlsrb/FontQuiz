
function fontCheck(){
    console.log('font checking started');
     
        const fontCheck = new Set([
        // Windows 10
          'Arial', 'Arial Black', 'Bahnschrift', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Gadugi', 'Georgia', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'Mongolian Baiti', 'MS Gothic', 'MV Boli', 'Myanmar Text', 'Nirmala UI', 'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'Segoe UI Symbol', 'SimSun', 'Sitka', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',
          ].sort());
          (async() => {
            await document.fonts.ready;
            const addFont = [];
    
            for (const font of fontCheck.values()) {
              if (document.fonts.check(`12px "${font}"`)) {
                addFont.push(font);
              }
            }
            getThreeFont(addFont);
          })();
    console.log('font checking end');
    }
      

function getThreeFont(font){
    console.log('getting 3 font checking started');

    const getFont = [];
    
    for(let i = 0; i < 3; i++) { 
     let genNumber = Math.floor(Math.random() * font.length);
    
     getFont.push(isNumberExist(genNumber, getFont));
     console.log(isNumberExist(getFont, font));
    }
    console.log(getFont);
    
   
    console.log('getting 3 font checking end');
    getQuizFont(getFont, font, false);
    changeFont(btn1, font[getFont[0]], true);
    changeFont(btn2, font[getFont[1]], true);
    changeFont(btn3, font[getFont[2]], true);
     
}
function isNumberExist(number, font){
    if(font.includes(number)){
        console.log(number + " already exist Changing....");
        let genNumber = Math.floor(Math.random() * font.length);
        return isNumberExist(genNumber, font)
    }else{
        console.log('Proceeds');
        return number;
    }
}


function getQuizFont(Selected, Font){
    let genNumber = Math.floor(Math.random() * 3);
    changeFont(text,Font[Selected[genNumber]]);
}

function changeFont(element, font, changeText) {
    element.style.fontFamily = font;
    if(changeText == true){ 
    element.innerHTML = font;
     
    }else{
        console.log('eh');
        hiddenValue.setAttribute('value', font);
    }
}

function gameStart(){
fontCheck();
}



// Onclick and event listener

function isRight(buttonId){
    console.log(buttonId);
     
    let buttonValue = document.getElementById(buttonId).innerText;
    console.log(buttonValue + " " + hiddenValue.value)
    if(buttonValue == hiddenValue.value){
        let Add = parseInt(score.innerHTML) + 1;
        score.innerHTML = Add;
    }else{
        let Minus = parseInt(score.innerHTML)- 1;
        score.innerHTML = Minus;
    }
    showCorrect(buttonId)
 
    gameStart()
}


function testText(){
    let changeText = document.getElementById("inputText").value;
    if(changeText == ""){
        text.innerHTML = "Aa";
    } else { 
    text.innerHTML = changeText;
    }
}

function resetText(){
    text.innerHTML = "Aa";
    inputText.value = "";
}

 function showCorrect(buttonId){
    
    let buttonValue = document.getElementById(buttonId).innerText;
     
 
     if(buttonValue == hiddenValue.value){
        console.log(buttonId);
        document.getElementById(buttonId).style.backgroundColor = "green";
         
    }else{
        document.getElementById(buttonId).style.backgroundColor = "red";
        
    }
    setTimeout(function() {
        document.getElementById(buttonId).style.backgroundColor = "";
        }, 1000);
}

 

 


gameStart();
