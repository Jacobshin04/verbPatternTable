



F1_Pattern.prototype.F1_B = function F1_B(basicWord, presentArr, pastArr, commandArr){
   he_past = basicWord[0];
   he_command = basicWord[1];
   she_command = basicWord[2];
   they_command = basicWord[3];

   presentArr = [];
   presentArr.push(this.lineL[0] + he_command); //I
   presentArr.push(this.lineM[0] + he_command); //you1
   presentArr.push(presentArr[1] + this.lineK[0]); //you2
   presentArr.push(presentArr[1] + this.lineK[1]); //you3
   presentArr.push(this.lineL[3] + he_command); //he
   presentArr.push(presentArr[1]); //she
   presentArr.push(presentArr[4] + this.lineK[1]); //they
   presentArr.push(this.lineM[1] + he_command); //we

   pastArr = [];
   pastArr.push(she_command + this.lineK[7]); //I
   pastArr.push(pastArr[0]); //you1
   pastArr.push(she_command + this.lineK[2]); //you2
   pastArr.push(she_command + this.lineK[3]); //you3
   pastArr.push(he_past); //he
   pastArr.push(they_command + this.lineK[5]); //she
   pastArr.push(they_command + this.lineK[1]); //they
   pastArr.push(she_command + this.lineK[6]); //we

   commandArr = [];
   commandArr.push(""); //I
   commandArr.push(this.lineM[2] + he_command); //you1
   commandArr.push(commandArr[1] + this.lineK[0]); //you2
   commandArr.push(commandArr[1] + this.lineK[1]); //you3
   // commandArr.push(he_command);
   // commandArr.push(she_command);
   // commandArr.push(they_command);

   displayArr(presentArr, pastArr, commandArr, arguments.callee.name);
}



F1_Pattern.prototype.F1_D = function F1_D(basicWord, presentArr, pastArr, commandArr){
    he_past = basicWord[0];
    he_command = basicWord[1];
    she_command = basicWord[2];
    they_command = basicWord[3];

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineM[0] + he_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    presentArr.push(presentArr[1]+ this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineM[1] + he_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineK[7]);  //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineK[2]); //you2
    pastArr.push(he_past + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_past + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[1]); //you3
    // commandArr.push(he_command);
    // commandArr.push(she_command);
    // commandArr.push(they_command);

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name);
}




F1_Pattern.prototype.F1_M = function F1_M(basicWord, presentArr, pastArr, commandArr){
    he_past = basicWord[0];
    he_command = basicWord[1];
    she_command = basicWord[2];
    they_command = basicWord[3];

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineL[1] + he_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    presentArr.push(presentArr[1]+ this.lineK[11]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[11]); //they
    presentArr.push(this.lineL[2] + he_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineO[1] + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineO[1] + this.lineK[8]); //you2
    pastArr.push(he_past + this.lineO[1] + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[11]); //they
    pastArr.push(he_past + this.lineO[1] + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(he_past); //you1
    commandArr.push(he_past + this.lineK[0]); //you2
    commandArr.push(he_past + this.lineK[1]); //you3
    // commandArr.push(he_command);
    // commandArr.push(she_command);
    // commandArr.push(they_command);

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name);
}

F1_Pattern.prototype.F1_E = function F1_E(basicWord, presentArr, pastArr, commandArr){
    he_past = basicWord[0];
    he_command = basicWord[1];
    she_command = basicWord[2];
    they_command = basicWord[3];

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineN[1] + he_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    presentArr.push(presentArr[1]+ this.lineK[1]); //you3
    presentArr.push(this.lineN[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineN[2] + he_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineK[2]); //you2
    pastArr.push(he_past + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_past + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineO[0] + he_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[1]); //you3
    // commandArr.push(he_command);
    // commandArr.push(she_command);
    // commandArr.push(they_command);

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name);
}

F1_Pattern.prototype.F1_N = function F1_N(basicWord, presentArr, pastArr, commandArr){
    he_past = basicWord[0];
    you_1_command = basicWord[1];


    presentArr = [];
    presentArr.push(this.lineL[0] + you_1_command); //I
    presentArr.push(this.lineL[1] + you_1_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    presentArr.push(presentArr[1]+ this.lineK[11]); //you3
    presentArr.push(this.lineL[3] + you_1_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[5] + this.lineK[11]); //they
    presentArr.push(this.lineL[2] + you_1_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineO[1] + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineO[1] + this.lineK[8]); //you2
    pastArr.push(he_past + this.lineO[1] +this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[11]); //they
    pastArr.push(he_past + this.lineO[1] +this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(you_1_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[11]); //you3
    // commandArr.push(he_command);
    // commandArr.push(she_command);
    // commandArr.push(they_command);

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name);
}

F1_Pattern.prototype.F1_A = function F1_A(input, tableDisplay){
    input = arabicVowelRemove(input);
    console.log(input);
    he_past = input.addAllVerbs(upStick, upStick );
    he_command = input.addAllVerbs(upCircle, downStick );
    she_command = input.addAllVerbs(upStick, upCircle);
    // he_command = basicWord[1];
    // she_command = basicWord[2];
    // they_command = basicWord[3];
    console.log(he_past);
    console.log(he_command);
    console.log(she_command);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineM[0] + he_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    presentArr.push(presentArr[1]+ this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineM[1] + he_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineK[2]); //you2
    pastArr.push(he_past + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_past + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command); //you1
    commandArr.push(this.lineM[2] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineM[2] + he_command + this.lineK[1]); //you3
    // commandArr.push(he_command);
    // commandArr.push(she_command);
    // commandArr.push(they_command);

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F2_Pattern.prototype.F2_A =function F2_A(basicWord, presentArr, pastArr, commandArr){
    he_past = basicWord[0];
    he_command = basicWord[1];
    she_command = basicWord[2];
    they_command = basicWord[3];

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineL[1] + he_command); //you1
    presentArr.push(this.lineL[1]+ she_command + this.lineK[0]); //you2
    presentArr.push(this.lineL[1]+ she_command + this.lineK[11]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineL[3] + she_command + this.lineK[11]); //they
    presentArr.push(this.lineL[2] + he_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineK[8]); //you2
    pastArr.push(he_past + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[11]); //they
    pastArr.push(he_past + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(he_command); //you1
    commandArr.push(she_command + this.lineK[0]); //you2
    commandArr.push(she_command + this.lineK[11]); //you3
    // commandArr.push(he_command);
    // commandArr.push(she_command);
    // commandArr.push(they_command);
    
    displayArr(presentArr, pastArr, commandArr, arguments.callee.name);
}


function createCell (row, text, element, pattern){
    var cellName = document.createElement(element);
    cellName.textContent = text;
    cellColorDisplay(cellName, pattern);
    row.appendChild(cellName);
}

function displayArr(presentArr, pastArr, commandArr, pattern, tableDisplay){
    tableDisplay.textContent = "";
    var table = document.createElement("table");
    var tableBody = document.createElement("tableBody"); 
    var row = document.createElement("tr");

    createCell(row, pattern, "th", pattern);
    createCell(row, "present", "th", pattern);
    createCell(row, "past", "th", pattern);
    createCell(row, "command", "th", pattern);
    tableBody.appendChild(row);
    for(let i = 0; i < arrLength; i++)
    {
        var row = document.createElement("tr"); 
        
        var pronounCell = document.createElement("th");
        pronounCell.textContent = pronounList[i];
        pronounCell.classList.add("first_column");
        // cellColorDisplay(pronounCell, pattern);
        row.appendChild(pronounCell);

        var presentCell = document.createElement("td");
        presentCell.textContent = presentArr[i];
        row.appendChild(presentCell);
      
        var pastCell = document.createElement("td");
        pastCell.textContent = pastArr[i];
        row.appendChild(pastCell);

        var commandCell = document.createElement("td");
        commandCell.textContent = commandArr[i];
        row.appendChild(commandCell);
     
        tableBody.appendChild(row); 
    }

     table.appendChild(tableBody);
     var lineBreak = document.createElement("br");

    // tableDisplay.appendChild(lineBreak);
    tableDisplay.appendChild(table);

}

function cellColorDisplay(element, pattern){
    if(patternComfirmedList.includes(pattern))
    {
        element.classList.add("green");        
    }
    else if(pattern === ""){
        //doesn't change color when pattern is ""
        return;
    }
    else{
        element.classList.add("red");
    }
}