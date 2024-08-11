



F1_Pattern.prototype.F1_B = function F1_B(input, tableDisplay){

    input = arabicVowelRemove(input); 
    he_past = input.addAllVerbs(downStick, downStick );
    he_command = input.addAllVerbs(upCircle, upStick );
    she_command = input.addAllVerbs(upCircle, downStick);
    they_command = input.addAllVerbs(downStick, upCircle);

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
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}



F1_Pattern.prototype.F1_D = function F1_D(input, tableDisplay){
    input = arabicVowelRemove(input); 
    he_past = input.addAllVerbs(upStick, upStick );
    he_command = input.addAllVerbs(upCircle, upStick );
    she_command = input.addAllVerbs(upStick, upCircle);
    // they_command = input.addAllVerbs(downStick, upCircle);

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
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}




F1_Pattern.prototype.F1_M = function F1_M(input, tableDisplay){

    input = arabicVowelRemove(input); 
    he_past = input.addAllVerbs(upStick, upW );
    he_command = he_past;
    // she_command = input.addAllVerbs(upStick, upCircle);
    // they_command = input.addAllVerbs(downStick, upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineL[1] + he_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    console.log(presentArr[2]);
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
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_E = function F1_E(input, tableDisplay){
    input = arabicVowelRemove(input); 
    he_past = input.addAllVerbs(upStick, upStick );
    he_command = input.addAllVerbs(upCircle, upComma );
    she_command = input.addAllVerbs(upStick, upCircle);
    // they_command = input.addAllVerbs(downStick, upCircle);

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
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

//need update
F1_Pattern.prototype.F1_N = function F1_N(input, tableDisplay){
    input = arabicVowelRemove(input); 
    he_past = input.addAllVerbs(upStick, upW);
    you_1_command = input.addAllVerbs(upComma, upW );
    // she_command = input.addAllVerbs(upStick, upCircle);
    // they_command = input.addAllVerbs(downStick, upCircle);


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
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

//done
F1_Pattern.prototype.F1_A = function F1_A(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick );
    he_command = input.addAllVerbs(upCircle, downStick );
    she_command = input.addAllVerbs(upStick, upCircle);

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
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_C = function F1_C(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(downStick, downStick);
    he_command = input.addAllVerbs(upCircle, downStick);
    she_command = input.addAllVerbs(downStick, upCircle);

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
    pastArr.push(he_command + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_command + this.lineK[2]); //you2
    pastArr.push(he_command + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(she_command + this.lineK[1]); //they
    pastArr.push(he_command + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command); //you1
    commandArr.push(this.lineM[2] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineM[2] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_L = function F1_L(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upW);
    he_command = input.addAllVerbs(downStick, upW);
    she_command = input.addAllVerbs(upStick, upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineL[1] + he_command); //you1
    presentArr.push(presentArr[1]+ this.lineK[0]); //you2
    presentArr.push(presentArr[1]+ this.lineK[1]); //you3
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
    commandArr.push(he_command); //you1
    commandArr.push(he_command + this.lineK[0]); //you2
    commandArr.push(he_command + this.lineK[11]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} //end of F1_L

F1_Pattern.prototype.F1_H = function F1_H(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs("");
    he_command = input.replace("ا", "و");
    he_command = he_command.addAllVerbs(upComma);
    she_command = input.replace("ا", "");
    she_command = she_command.addAllVerbs(upComma);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineL[1] + he_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineL[2] + he_command); //we

    pastArr = [];
    pastArr.push(she_command + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(she_command + this.lineK[2]); //you2
    pastArr.push(she_command + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(she_command + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(he_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[1]); //you3
    commandArr.push("");
    commandArr.push("")
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} //end of F1_H

F1_Pattern.prototype.F1_F = function F1_F(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs("");
    he_command = input.replace("ا", "ي");
    he_command = he_command.addAllVerbs(downStick);
    she_command = input.replace("ا", "");
    she_command = she_command.addAllVerbs(downStick, upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineL[1] + he_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[11]); //they
    presentArr.push(this.lineL[2] + he_command); //we

    pastArr = [];
    pastArr.push(she_command + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(she_command + this.lineK[8]); //you2
    pastArr.push(she_command + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[11]); //they
    pastArr.push(she_command + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(he_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[11]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}// end of F1_F

F1_Pattern.prototype.F1_G = function F1_G(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs("");
    he_command = input.replace("ا", "");
    he_command = he_command.addAllVerbs(downStick, upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_past); //I
    presentArr.push(this.lineL[1] + he_past); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_past); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineL[2] + he_past); //we

    pastArr = [];
    pastArr.push(he_command + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_command + this.lineK[8]); //you2
    pastArr.push(he_command + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_command + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(he_past); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}// end of F1_G

F1_Pattern.prototype.F1_T = function F1_T(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick);
    he_command = input.addAllVerbs(upCircle);
    she_command = input.replace("ا", "");
    she_command = she_command.addAllVerbs(upStick);
    they_command = input.replace("ا", "");
    they_command = they_command.addAllVerbs(upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineM[0] + he_command); //you1
    presentArr.push(this.lineM[0] + they_command + this.lineK[0]); //you2
    presentArr.push(this.lineM[0] + they_command + this.lineK[11]); //you3
    presentArr.push(this.lineL[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineL[3] + they_command + this.lineK[11]); //they
    presentArr.push(this.lineM[1] + he_command); //we

    pastArr = [];
    pastArr.push(she_command + this.lineO[1] + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(she_command + this.lineO[1] + this.lineK[8]); //you2
    pastArr.push(she_command + this.lineO[1] + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(she_command + this.lineK[11]); //they
    pastArr.push(she_command + this.lineO[1] + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command); //you1
    commandArr.push(this.lineM[2] + they_command + this.lineK[0]); //you2
    commandArr.push(this.lineM[2] + they_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} // end of F1_T

F1_Pattern.prototype.F1_J = function F1_J(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick);
    he_command = input.replace("ى", "");
    he_command = he_command.addAllVerbs(upCircle);
    she_command = input.replace("ى", "");
    she_command = she_command.addAllVerbs(upStick);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command + this.lineK[0]); //I
    presentArr.push(this.lineM[0] + he_command + this.lineK[0]); //you1
    presentArr.push(this.lineM[0] + he_command + this.lineK[0]); //you2
    presentArr.push(this.lineM[0] + he_command + this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command + this.lineK[0]); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineL[3] + he_command + this.lineK[1]); //they
    presentArr.push(this.lineM[1] + he_command + this.lineK[0]); //we

    pastArr = [];
    pastArr.push(she_command + this.lineO[1] + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(she_command + this.lineO[1] + this.lineK[8]); //you2
    pastArr.push(she_command + this.lineO[1] + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(she_command + this.lineK[1]); //they
    pastArr.push(she_command + this.lineO[1] + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command + this.lineK[0]); //you1
    commandArr.push(commandArr[1]); //you2
    commandArr.push(this.lineM[2] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_K = function F1_K(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(downStick, downStick);
    he_command = input.replace("ي", "");
    he_command = he_command.addAllVerbs(upCircle);
    she_command = input.replace("ي", "");
    she_command = she_command.addAllVerbs(downStick,upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command + this.lineM[3]); //I
    presentArr.push(this.lineM[0] + he_command + this.lineM[3]); //you1
    presentArr.push(this.lineM[0] + he_command + this.lineK[0]); //you2
    presentArr.push(this.lineM[0] + he_command + this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command + this.lineM[3]); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineL[3] + he_command + this.lineK[1]); //they
    presentArr.push(this.lineM[1] + he_command + this.lineM[3]); //we

    pastArr = [];
    pastArr.push(he_command + this.lineK[12] + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_command + this.lineK[12] + this.lineK[8]); //you2
    pastArr.push(he_command + this.lineK[12] + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[0] + this.lineK[5]); //she
    pastArr.push(she_command + this.lineK[0] + this.lineK[11]); //they
    pastArr.push(he_command + this.lineK[12] + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command + this.lineM[3]); //you1
    commandArr.push(this.lineM[2] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineM[2] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_S = function F1_S(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick);
    you_1_command = input.replace("أ", "");
    you_1_command = you_1_command.addAllVerbs(upComma);
    she_past = input.addAllVerbs(upStick, upCircle) + this.lineK[5];

    presentArr = [];
    presentArr.push(this.lineN[0] + this.lineM[4] + you_1_command); //I
    presentArr.push(this.lineN[1] + this.lineM[4] + you_1_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
    presentArr.push(this.lineN[3] + this.lineM[4] + you_1_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineN[2] + this.lineM[4] + you_1_command); //we

    pastArr = [];
    pastArr.push(he_past + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineK[2]); //you2
    pastArr.push(he_past + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_past); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_past + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(you_1_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_R = function F1_R(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick);
    he_command = input.replace("أ", "ؤ")
    he_command = he_command.addAllVerbs("", upComma);
    she_command = input.addAllVerbs("", upComma);
    they_command = input.addAllVerbs("", upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + she_command); //I
    presentArr.push(this.lineN[1] + he_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
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
    pastArr.push(they_command + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_past + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineO[0] + he_command); //you1
    commandArr.push(this.lineO[0] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineO[0] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}// end of F1_R

F1_Pattern.prototype.F1_I = function F1_I(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick);
    he_command = input.addAllVerbs(upCircle, upStick);
    // she_command = input.addAllVerbs(,);

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
    pastArr.push(he_past + this.lineK[7]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(he_past + this.lineK[2]); //you2
    pastArr.push(he_past + this.lineK[3]); //you3
    pastArr.push(he_past); //he
    pastArr.push(he_past + this.lineK[5]); //she
    pastArr.push(he_past + this.lineK[1]); //they
    pastArr.push(he_past + this.lineK[6]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineM[2] + he_command); //you1
    commandArr.push(this.lineM[2] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineM[2] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} // end of F1_I

F1_Pattern.prototype.F1_P = function F1_P(input, tableDisplay){

    input = arabicVowelRemove(input);
    I_present = input.replace("إ", "با")
    I_present = I_present.replace("ى", "ي");
    he_past = input;
    he_command = input.replace("إ", "ي").replace("ى", "");
    she_command = input.replace("ى", "");
    they_command = input.replace("إ", "").replace("ى", "ي").addAllVerbs(downStick);
    you_1_command = "تعال";

    presentArr = [];
    presentArr.push(I_present); //I
    presentArr.push(this.lineM[0] + he_command + this.lineK[0]); //you1
    presentArr.push(presentArr[1]); //you2
    presentArr.push(this.lineM[0] + he_command + this.lineK[1]); //you3
    presentArr.push(this.lineL[3] + he_command + this.lineK[0]); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineL[3] + he_command + this.lineK[11]); //they
    presentArr.push(this.lineM[1] + he_command + this.lineK[0]); //we

    pastArr = [];
    pastArr.push(they_command + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(they_command + this.lineK[8]); //you2
    pastArr.push(they_command + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(she_command + this.lineK[1]); //they
    pastArr.push(they_command + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(you_1_command); //you1
    commandArr.push(commandArr[1] + this.lineK[0]); //you2
    commandArr.push(commandArr[1] + this.lineK[11]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} // end of F1_P

F1_Pattern.prototype.F1_Y = function F1_Y(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(downStick, downStick);
    he_command = input.addAllVerbs("", upStick);
    she_command = input.addAllVerbs(upCircle, downStick);
    they_command = input.addAllVerbs(downStick, upCircle);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineN[1] + he_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
    presentArr.push(this.lineN[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(presentArr[4] + this.lineK[1]); //they
    presentArr.push(this.lineN[2] + he_command); //we

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
    commandArr.push(this.lineO[0] + he_command); //you1
    commandArr.push(this.lineO[0] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineO[0] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}

F1_Pattern.prototype.F1_X= function F1_X(input, tableDisplay){

    input = arabicVowelRemove(input);
    I_present ="ب" + input;
    I_present = I_present.addAllVerbs(upStick, upCircle, upStick);
    he_past = input.addAllVerbs(upStick, upStick);
    he_command = input.addAllVerbs("", upStick);
    she_command = input.addAllVerbs(upW, upCircle);

    presentArr = [];
    presentArr.push(I_present); //I
    presentArr.push(this.lineN[1] + he_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
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
    commandArr.push(this.lineO[0] + he_command + this.lineK[0]); //you2
    commandArr.push(this.lineO[0] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}// end of F1_X

F1_Pattern.prototype.F1_W = function F1_W(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick);
    he_command = input.addAllVerbs(upCircle, downStick);
    she_command = input.addAllVerbs(upStick, upCircle);
    they_command = input.addAllVerbs("", downStick);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command); //I
    presentArr.push(this.lineN[1] + they_command); //you1
    presentArr.push(presentArr[1] + this.lineK[0]); //you2
    presentArr.push(presentArr[1] + this.lineK[1]); //you3
    presentArr.push(this.lineN[3] + he_command); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineN[3] + they_command + this.lineK[1]); //they
    presentArr.push(this.lineN[2] + they_command); //we

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
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} // end of F1_W

F1_Pattern.prototype.F1_Z = function F1_Z(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upStick, upStick);
    he_command = input.replace("ى", "");
    she_command = he_command.addAllVerbs(upStick);

    presentArr = [];
    presentArr.push(this.lineL[0] + he_command + this.lineK[0]); //I
    presentArr.push(this.lineN[1] + he_command + this.lineK[0]); //you1
    presentArr.push(this.lineN[1] + he_command + this.lineK[0]); //you2
    presentArr.push(this.lineN[1] + he_command + this.lineK[1]); //you3
    presentArr.push(this.lineN[3] + he_command + this.lineK[0]); //he
    presentArr.push(presentArr[1]); //she
    presentArr.push(this.lineN[3] + he_command + this.lineK[1]); //they
    presentArr.push(this.lineN[2] + he_command + this.lineK[0]); //we

    pastArr = [];
    pastArr.push(she_command + this.lineO[1] + this.lineK[4]); //I
    pastArr.push(pastArr[0]); //you1
    pastArr.push(she_command + this.lineO[1] + this.lineK[8]); //you2
    pastArr.push(she_command + this.lineO[1] + this.lineK[9]); //you3
    pastArr.push(he_past); //he
    pastArr.push(she_command + this.lineK[5]); //she
    pastArr.push(she_command + this.lineK[1]); //they
    pastArr.push(she_command + this.lineO[1] + this.lineK[10]); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(this.lineO[0] + he_command + this.lineK[0]); //you1
    commandArr.push(commandArr[1]); //you2
    commandArr.push(this.lineO[0] + he_command + this.lineK[1]); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
} //end of F1_Z

F1_Pattern.prototype.F1_Zc = function F1_Zc(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(upComma, downStick);
    he_command = input.addAllVerbs(upCircle, upStick);
    she_command = input.addAllVerbs(upCircle, downStick);
    they_command = input.addAllVerbs(upComma);

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
    commandArr.push(""); //you1
    commandArr.push(""); //you2
    commandArr.push(""); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}// end of F1_Zc
/* TEMPLET
F1_Pattern.prototype.F1_* = function F1_*(input, tableDisplay){

    input = arabicVowelRemove(input);
    he_past = input.addAllVerbs(,);
    he_command = input.addAllVerbs(,);
    she_command = input.addAllVerbs(,);

    presentArr = [];
    presentArr.push(); //I
    presentArr.push(); //you1
    presentArr.push(); //you2
    presentArr.push(); //you3
    presentArr.push(); //he
    presentArr.push(); //she
    presentArr.push(); //they
    presentArr.push(); //we

    pastArr = [];
    pastArr.push(); //I
    pastArr.push(); //you1
    pastArr.push(); //you2
    pastArr.push(); //you3
    pastArr.push(he_past); //he
    pastArr.push(); //she
    pastArr.push(); //they
    pastArr.push(); //we

    commandArr = [];
    commandArr.push(""); //I
    commandArr.push(); //you1
    commandArr.push(); //you2
    commandArr.push(); //you3
    commandArr.push(""); //he
    commandArr.push("");
    commandArr.push("");
    commandArr.push("");

    displayArr(presentArr, pastArr, commandArr, arguments.callee.name, tableDisplay);
}
 */

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
        presentCell.innerHTML = presentArr[i];
        row.appendChild(presentCell);
      
        var pastCell = document.createElement("td");
        pastCell.innerHTML = pastArr[i];
        row.appendChild(pastCell);

        var commandCell = document.createElement("td");
        commandCell.innerHTML = commandArr[i];
        row.appendChild(commandCell);
     
        tableBody.appendChild(row); 
    }

     table.appendChild(tableBody);
     addStyles(table, {marginLeft: 'auto',
        marginRight: 'auto'
    })
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

function makeForm(pattern){
    var form = document.createElement("form");
    form.id = `${pattern}_form`;
    form.classList.add("verbPatternForm")

    
    var para = document.createElement("p");
    addStyles(para, {fontSize: `2rem`, margin: '15px' });
    para.textContent = `${pattern} Verb Form Generator`;
    form.appendChild(para);

    var input = document.createElement("input");
    input.type = "text";
    input.id = `${pattern}_input`;
    input.placeholder = `${pattern} Input`;
    addStyles(input, {fontSize: '1.5rem', width: '275px', marginRight: `10px`});
    form.appendChild(input);

    var button = document.createElement("button");
    button.type = "submit";
    addStyles(button, {fontSize: '1.5rem'});
    button.textContent = "Generate";
    form.appendChild(button);

    var displayDiv = document.createElement("div");
    displayDiv.id = `${pattern}_display`;
    form.appendChild(displayDiv);

    document.getElementById("formsContainer").appendChild(form);
}