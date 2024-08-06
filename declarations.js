const h1 = document.getElementById("myH1");
const h2 = document.getElementById("myH2");
const h3 = document.getElementById("myH3");

const arrLength = 8;
const pronounList = ["I", "you_1", "you_2", "you_3", "he", "she", "they", "we"];
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
const F1_A_sample1 = ["مَسَك", "مْسِك", "مَسْك"];

const F2_A_sample1 = ["حَضَّر", "حَضِّر", "حَضّر", ""];

class F1_Pattern {
    constructor()
    {
        this.lineK = ["ي", "وا", "ْتِ", "ْتوا", "ت", "َت", "ْنا",
            "ِت", "تِ", "توا", "نا", "ُوا", "ِي" ];
        this.lineL = ["بَ", "بِتْ", "بِنْ", "بِ"];
        this.lineM = ["بْتِ", "بْنِ", "إ", "َى", "وْ", "ؤ"];
        this.lineN = ["بُ", "بْتُ", "بْنُ", "بُ"];
        this.lineO = ["أُ", "َيْ"];
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