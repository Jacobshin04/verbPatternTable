
const h1 = document.getElementById("myH1");
const h2 = document.getElementById("myH2");
const h3 = document.getElementById("myH3");

const arrLength = 8;
const pronounList = ["أَنا", "إنْتَ", "إنْتِ", "إنْتُوا", "هو", "هي", "هم", "إِحْنا"];
// const pronounList = ["I", "you_1", "you_2", "you_3", "he", "she", "they", "we"];
const patternComfirmedList = [];

presentArr = [];
pastArr = [];
commandArr = [];



//pattern sample words
const F1_B_sample1 = ["فِهِم", "فْهَم", "فْهِم", "فِهْم"];
// const F1_B_sample2 = ["طِلِع", "طْلَع", "طْلِع", "طِلْع"];
const F1_D_sample1 = ["رَفَع", "رْفَع", "رَفْع", ""];
const F1_M_sample1 = ["ضَلّ", "ضَلّ", "", ""];
const F1_E_sample1 = ["تَرَك", "تْرُك", "تَرْك", ""];
const F1_N_sample1 = ["حَطّ", "حُطّ"];
const F1_A_sample1 = "مَسَك";

const F2_A_sample1 = ["حَضَّر", "حَضِّر", "حَضّر", ""];
const vowels = ["َ", "ِ", "ْ", "ُ", "ّ"];
const upStick = vowels[0];
const downStick = vowels[1];
const upCircle = vowels[2];
const upComma = vowels[3];
const upW = vowels[4];

String.prototype.addVerbAt=function(indexPosition, stringToAdd) {
    
    var origString = this.split('');
    
    // Insert the string at the index position
    origString.splice(indexPosition, 0, stringToAdd);
    
    // Join back the individual characters
    // to form a new string
    newString = origString.join('');
    return newString;
}


String.prototype.addAllVerbs= function addAllVerbs(firstVerb="", secondVerb="", thirdVerb="", fourthVerb="") {
    var origString = this.split('');
    result = "";
    verbs = [firstVerb, secondVerb, thirdVerb, fourthVerb];
    for(let i = 0; i < origString.length && i < verbs.length; i++)
    {
        result += origString[i];
        result += verbs[i];
    }

    return result;
}

function arabicVowelRemove(word){
    for(let i = 0; i < vowels.length; i++)
    {
        word = word.replaceAll(vowels[i], "");
    }
    return word;
}

const addStyles = (el, styles) => Object.assign(el.style, styles);

/* addStyles(document.getElementById('my-element'), {
  background: 'red',
  color: '#ffff00',
  fontSize: '3rem'
}); */

function setUpForm(pattern){
/*     eval('const ' + pattern + '_obj ' + '= new ' + pattern.slice(0, 3)
        + 'Pattern();');
    console.log(' const ' + pattern + '_obj ' + '= new ' + pattern.slice(0, 3)
    + 'Pattern();'); */
    
    eval('const ' + pattern + '_display' + '= document.getElementById("' 
        + pattern + '_display");' );

    eval('const ' + pattern + '_input' + '= document.getElementById("' 
        + pattern + '_input");' );

    eval('const ' + pattern + '_form' + '= document.getElementById("' 
        + pattern + '_form");' );

    eval(pattern + '_form.addEventListener("submit", event => {' 
        + 'event.preventDefault();'
        + 'const arabicWord = ' + pattern + '_input.value;'
        + pattern + '_obj.' + pattern + '(arabicWord, ' + pattern 
        + '_display);'
        
        + '});');
}
//original code
/* const F1_A_display = document.getElementById("F1_A_display");
const F1_A_input = document.getElementById("F1_A_input");
const F1_A_form = document.getElementById("F1_A_form");

F1_A_form.addEventListener("submit",  event => {

    event.preventDefault();

    const arabicWord = F1_A_input.value;
    F1_obj.F1_A(arabicWord, F1_A_display);
    
}); */

//before
// function changeTextColorArr (textArr, colorArr){
//     resultArr = [];
//     for(let i = 0; i < textArr.length; i++)
//     {
//         color = colorArr[i] === "" ? "black" : colorArr[i];
//         beginTag =   `<span style="color: ${color}">`
//         endTag= '</span>';

//         result = beginTag + textArr[i] + endTag;
//         resultArr.push(result);
//     }
//     return resultArr;
// }
function changeTextColorArr(textArr, colorArr) {
    resultArr = [];
    for (let i = 0; i < textArr.length; i++) {
        const span = document.createElement('span');
        const color = colorArr[i] === "" ? "black" : colorArr[i];
    
        span.style.color = color;
        span.textContent = textArr[i]; // Safely set the text content
    
        // fragment.appendChild(span); // Append the span to the document fragment
        resultArr.push(span.outerHTML);
    }
    
    return resultArr;}

    

class F1_Pattern {
    constructor()
    {
        this.lineK = changeTextColorArr(["ي", "وا", "ْتِ", "ْتوا", "ت", "َت", "ْنا",
            "ِت", "تِ", "توا", "نا", "ُوا", "ِي" ], 
        ["purple", "purple", "red", "red", "red", "red", "red", "red", "red", "red", "red", "purple", "red"]);

        this.lineL = changeTextColorArr(["بَ", "بِتْ", "بِنْ", "بِ"], 
            ["blue", "blue", "blue", "blue"]);

        this.lineM = changeTextColorArr(["بْتِ", "بْنِ", "إ", "َى", "وْ", "ؤ"], 
            ["blue", "blue", "orange", "green", "green", "black"]);
                               
        this.lineN = changeTextColorArr(["بُ", "بْتُ", "بْنُ", "بُ"], 
            ["blue", "blue", "blue", "blue"]);

        this.lineO = changeTextColorArr(["أُ", "َيْ"], 
            ["orange", "green"]);
            
    }
    
}

class F2_Pattern {
    constructor()
    {
        this.lineK = ["ي", "وا", "تِ", "توا", "ت", "َت", "نا",
            "ِت", "ْتِ", "ْتوا", "ْنا", "ُوا", "ِي" ];
        this.lineL = ["بَ", "بِتْ", "بِنْ", "بِ"];
        this.lineM = ["بْتِ", "بْنِ", "إ", "َى", "وْ", "ؤ"];
        this.lineN = ["بُ", "بْتُ", "بْنُ", "بُ"];
        this.lineO = ["أُ", "َيْ"];
    }

}