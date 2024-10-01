 
 

function input(){
    console.log('font checking started');
     
        const fontCheck = new Set([
        // Windows 10
        'AGENCYB', 'AGENCYR', 'ALGER', 'ANTQUAB', 'ANTQUABI', 'ANTQUAI',   'arial', 'arialbd', 'arialbi', 'ariali', 'ARIALN', 'ARIALNB', 
        'ARIALNBI', 'ARIALNI', 'ariblk', 'ARLRDBD', 'bahnschrift', 'BASKVILL', 'BAUHS93', 'BELL', 'BELLB', 'BELLI', 'BERNHC', 'BKANT', 'BOD_B',
        'BOD_BI', 'BOD_BLAI', 'BOD_BLAR', 'BOD_CB', 'BOD_CBI', 'BOD_CI', 'BOD_CR', 'BOD_I', 'BOD_PSTC', 'BOD_R', 'BOOKOS', 'BOOKOSB', 'BOOKOSBI', 
        'BOOKOSI', 'BRADHITC', 'BRITANIC', 'BRLNSB', 'BRLNSDB', 'BRLNSR', 'BROADW', 'BRUSHSCI', 'BSSYM7', 'calibri', 'calibrib', 'calibrii', 'calibril', 
        'calibrili', 'calibriz', 'CALIFB', 'CALIFI', 'CALIFR', 'CALIST', 'CALISTB', 'CALISTBI', 'CALISTI', 'cambria', 'cambriab', 'cambriai', 'cambriaz',
        'Candara', 'Candarab', 'Candarai', 'Candaral', 'Candarali', 'Candaraz', 'CASTELAR', 'CENSCBK', 'CENTAUR', 'CENTURY', 'CHILLER', 'COLONNA', 'comic',
        'comicbd', 'comici', 'comicz', 'consola', 'consolab', 'consolai', 'consolaz', 'constan', 'constanb', 'constani', 'constanz', 'COOPBL', 'COPRGTB', 
        'COPRGTL', 'corbel', 'corbelb', 'corbeli', 'corbell', 'corbelli', 'corbelz', 'cour', 'courbd', 'courbi',  'couri', 'CURLZ___', 'DUBAI-BOLD',
        'DUBAI-LIGHT', 'DUBAI-MEDIUM', 'DUBAI-REGULAR', 'ebrima', 'ebrimabd', 'ELEPHNT', 'ELEPHNTI', 'ENGR', 'ERASBD', 'ERASDEMI', 'ERASLGHT', 'ERASMD',
        'FELIXTI',   'FORTE', 'FRABK', 'FRABKIT', 'FRADM', 'FRADMCN', 'FRADMIT', 'FRAHV', 'FRAHVIT', 'framd', 'FRAMDCN', 'framdit', 'FREESCPT', 
        'FRSCRIPT', 'FTLTLT', 'Gabriola', 'gadugi', 'gadugib', 'GARA', 'GARABD', 'GARAIT', 'georgia', 'georgiab', 'georgiai', 'georgiaz', 'GIGI', 
        'GILBI___', 'GILB____', 'GILC____', 'GILI____',   'GILSANUB', 'GIL_____', 'GLECB', 'GlitchGoblin-2O87v', 'GLSNECB', 'GOTHIC',
        'GOTHICB', 'GOTHICBI', 'GOTHICI', 'GOUDOS', 'GOUDOSB', 'GOUDOSI', 'GOUDYSTO', 'HARLOWSI', 'HARNGTON', 'HATTEN', 'himalaya', 'holomdl2', 
        'HTOWERT', 'HTOWERTI', 'impact', 'IMPRISHA', 'INFROMAN', 'Inkfree', 'ITCBLKAD', 'ITCEDSCR', 'ITCKRIST', 'javatext', 'JOKERMAN', 'JUICE___',
        'KUNSTLER', 'LATINWD', 'LBRITE', 'LBRITED', 'LBRITEDI', 'LBRITEI', 'LCALLIG', 'LeelaUIb', 'LEELAWAD', 'LEELAWDB', 'LeelawUI', 'LeelUIsl',
        'LFAX', 'LFAXD', 'LFAXDI', 'LFAXI', 'LHANDW', 'LSANS', 'LSANSD', 'LSANSDI', 'LSANSI', 'LTYPE', 'LTYPEB', 'LTYPEBO', 'LTYPEO', 'lucon', 
        'l_10646', 'MAGNETOB', 'MAIAN', 'malgun', 'malgunbd', 'malgunsl', 'MATURASC', 'micross',  'MISTRAL', 'mmrtext', 'mmrtextb', 
        'MOD20',  'monbaiti', 'MSUIGHUB', 'MSUIGHUR',  'msyi', 'MTCORSVA',
        'MTEXTRA', 'mvboli', 'NIAGENG', 'NIAGSOL', 'Nirmala', 'NirmalaB', 'NirmalaS', 'ntailu', 'ntailub', 'OCRAEXT', 'OLDENGL', 'ONYX', 'OUTLOOK', 
        'pala', 'palab', 'palabi', 'palai', 'PALSCRI', 'PAPYRUS', 'PARCHM', 'PERBI___', 'PERB____', 'PERI____', 'PERTIBD', 'PERTILI', 'PER_____',
        'phagspa', 'phagspab', 'PLAYBILL', 'POORICH', 'PRISTINA', 'RAGE', 'RAVIE', 'REFSAN', 'REFSPCL', 'ROCCB___', 'ROCC____', 'ROCK', 'ROCKB', 
        'ROCKBI', 'ROCKEB', 'ROCKI',  'SCHLBKB', 'SCHLBKBI', 'SCHLBKI',  'SCRIPTBL', 'segmdl2', 'segoepr', 'segoeprb', 'segoesc', 
        'segoescb', 'segoeui', 'segoeuib', 'segoeuii', 'segoeuil', 'segoeuisl', 'segoeuiz', 'seguibl', 'seguibli', 'seguiemj', 'seguihis', 'seguili',
        'seguisb', 'seguisbi', 'seguisli', 'seguisym',    'SHOWG',    'SNAP____', 'STENCIL', 'sylfaen', 'symbol', 'tahoma', 'tahomabd', 'taile', 'taileb', 'TCBI____', 'TCB_____',
        'TCCB____', 'TCCEB', 'TCCM____', 'TCMI____', 'TCM_____', 'TEMPSITC', 'times', 'timesbd', 'timesbi', 'timesi', 'trebuc', 'trebucbd', 
        'trebucbi', 'trebucit', 'verdana', 'verdanab', 'verdanai', 'verdanaz',   'VINERITC', 'VIVALDII', 'VLADIMIR',
        'webdings', 'wingding', 'WINGDNG2', 'WINGDNG3',

          ].sort());
          (async() => {
            
            const addFont = [];
    
            for (const font of fontCheck.values()) {
              
                addFont.push(font);
               
            }
            getThreeFont(addFont)
          })();

 
    
    console.log('font checking end');
    }
      

function getThreeFont(font){
    console.log('getting 3 font checking started');
    console.log("Font Length: " + font.length);
 
    const getFont = [];
 
    for(let i = 0; i < 3; i++) { 
     let genNumber = Math.floor(Math.random() * font.length);
    
     getFont.push(isNumberExist(genNumber, getFont));
     console.log(isNumberExist(getFont, font));
    }
    console.log(getFont);
    
   
    console.log('getting 3 font checking end');
 
    
    loadFont(font[getFont[0]]);
    loadFont(font[getFont[1]]);
    loadFont(font[getFont[2]]);
     
     
    getQuizFont(getFont, font, false);
    changeFont(btn1, font[getFont[0]], true);
    changeFont(btn2, font[getFont[1]], true);
    changeFont(btn3, font[getFont[2]], true);
    offloader();
}

 
 

async function LoadMessage(loaderMes){
    for (let i = 0; i < 2; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 2000);
       
    } 
 
    loaderMessage.innerHTML = loaderMes;

    return this;
}

  function loader(){
    let loader = document.getElementById("loader");
    loader.style.visibility = 'visible';
    
  
 
 
}
async function offloader(){
    for (let i = 0; i < 2; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 2000);
       
    } 
    let loader = document.getElementById("loader");
    loader.style.visibility = 'hidden';
    return this;
 
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
    changeWord()
 
}

function changeWord(){
    
        
const wordCheck = [
    // Windows 10
    "world", "technology", "advances", "every", "innovation", "become", 
    "driving", "force", "behind", "many", "industries", "rise", "artificial", 
    "intelligence", "explosion", "smart", "devices", "people", "constantly", 
    "finding", "ways", "improve", "global", "economy", "depend", "shifts", 
    "digital", "transformation", "system", "development", "better", "future", 
    "sustainability", "climate", "change", "significant", "impact", "healthcare", 
    "education", "communication", "research", "engineering", "continue", "challenge", 
    "imagination", "opportunities", "endless", "society", "evolving", "quickly", 
    "need", "adapt", "efforts", "focus", "collaboration", "creativity", 
    "achieve", "long-term", "success", "technology", "shaping", "modern", 
    "lives", "influence", "future", "decisions", "ensuring", "innovation", 
    "leads", "positive", "change", "fields", "automation", "robotics", 
    "biotechnology", "artificial", "intelligence", "sustainable", "solutions", 
    "energy", "resources", "preservation", "planet", "climate", "change", 
    "crucial", "progress", "global", "goals", "generation", "emerging", 
    "technologies", "revolutionize", "industries", "transform", "everyday", 
    "life", "enhancing", "efficiency", "solutions", "optimize", "processes", 
    "ensuring", "innovation", "positively", "impacts", "society"

      ];

    let gen = genNumber(105);
      
    text.innerHTML = wordCheck[gen];
    text.title = wordCheck[gen];
    
}
function genNumber(quantity){
   const genNumber =  Math.floor(Math.random() * quantity);
return genNumber;
}
function changeFont(element, font, changeText) {
 
    if(changeText == true){ 
    element.innerHTML = font.toLowerCase() ;
    element.name = font;
    element.title = font;
    }else{
        console.log('eh');
        hiddenValue.setAttribute('value', font);
        element.style.fontFamily = font;
      
    }
}

function gameStart(){
loader();
 
input();
}



// Onclick and event listener

function isRight(buttonId){
    console.log(buttonId);
     
    let buttonValue = document.getElementById(buttonId).innerText;
    console.log(buttonValue + " " + hiddenValue.value)
    if(buttonValue.toUpperCase() == hiddenValue.value.toUpperCase()){
        let Add = parseInt(score.innerHTML) + 1;
        score.innerHTML = Add;
    }else{
        let Minus = parseInt(score.innerHTML)- 1;
        score.innerHTML = Minus;
        
    } 
    showCorrect(buttonId)
     Restart();
 
}


function testText(){
    let changeText = document.getElementById("inputText").value;
    if(changeText == ""){
        text.innerHTML = text.title;
    } else { 
    text.innerHTML = changeText;
    }
}

function resetText(){
    text.innerHTML = inputText.value;
 
}
async function Restart(){
    for (let i = 0; i < 2; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
}
    console.log('Done');
    gameStart()
}


async function RestartButton(buttonId){

    for (let i = 0; i < 2; i++) {
        await sleep(i * 1000);
}
    console.log('Done');
    disableButton(false)
    document.getElementById(buttonId).style.backgroundColor = "";
}

 function showCorrect(buttonId){
    
    let buttonValue = document.getElementById(buttonId).innerText;
    const buttons = document.getElementsByTagName("button");
    console.log("button name " + buttons[1].name);
    disableButton(true)
     if(buttonValue == hiddenValue.value){
        console.log(buttonId);
        document.getElementById(buttonId).style.backgroundColor = "green";
        
    }else{
        document.getElementById(buttonId).style.backgroundColor = "red";
        for(let i = 0; i < buttons.length; i++) {
            console.log(buttons[i].name + " is  match? "+ hiddenValue.value);
        if(buttons[i].name == hiddenValue.value){
            console.log("Button Name " + buttons[i].name);
            document.getElementById(buttons[i].id).style.backgroundColor = "green";
            RestartButton(buttons[i].id);
        }
        }
    }
    RestartButton(buttonId);
       
  
}
function loadFont(fontName) {
    console.log('Loading Font '+ fontName);
    const style = document.createElement('style');
    
    // Define the @font-face rule
    style.innerHTML = `
        @font-face {
            font-family: '${fontName}';
            src: 
            url('fonts/${fontName}.TTF') format('truetype'),
            url('fonts/${fontName}.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        #text {
            font-family: '${fontName}', sans-serif; /* Apply the font */
        }
    `;

    document.head.appendChild(style);
}

 
function disableButton(Con){
    console.log('disabling buttons started');
    const buttons = document.getElementsByTagName("button");
    if(Con == true){ 
    for (const button of buttons) {
    button.disabled = true;
    }
    }else{
     for (const button of buttons) {
        
     button.disabled = false;
      }
    }
}
// Function to load a CSS file dynamically
 

 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 


gameStart();
