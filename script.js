let allPlayer = document.querySelector('#allPlayer');
let letterInWord = document.querySelector('#letterInWord');


allPlayer.addEventListener('click', playAll);
letterInWord.addEventListener('click', stampa);

function stampa(){
    var x = myArr.toString();
    var y = myArr.join('');
    document.getElementById("sampletext").value = y ;
    var dove = document.querySelector(".resultList");
    var resultPara = document.createElement ('p') ; 
  resultPara.className = 'resultPara';
  resultPara.appendChild(document.createTextNode(y));
  dove.appendChild(resultPara);
  console.log(myArr);
 
};
function playAll() {       //   https://jsfiddle.net/exrx8e1y/    https://stackoverflow.com/a/48056986/14503082

    dtlarea=document.getElementById("details");
    //dtlarea.style.display="none";
    dtltxt="";
  
    var mytimer = setInterval(function() {
      
        var voices = speechSynthesis.getVoices();
        //console.log(voices);
        if (voices.length !== 0) {
  
          var msg = new SpeechSynthesisUtterance();
  
          msg.rate = document.getElementById("rate").value; // 0.1 to 10
          msg.pitch = document.getElementById("pitch").value; //0 to 2
          msg.volume = document.getElementById("volume").value; // 0 to 1
           
          msg.text = document.getElementById("sampletext").value; 
          msg.lang =  document.getElementById("lang").value; //'it_IT';
           
          for(var i=0;i<voices.length;i++){
  
              dtltxt+=voices[i].lang+' '+voices[i].name+'\n';
             
              if(voices[i].lang==msg.lang) {
                msg.voice = voices[i]; // Note: some voices don't support altering params
                msg.voiceURI = voices[i].voiceURI;
                // break;
              }
          }
           
          msg.onend = function(e) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
            dtlarea.value=dtltxt; 
          };
           
          speechSynthesis.speak(msg);
  
          clearInterval(mytimer);
          
        }
    }, 0);
  
  } 

  const newA = document.getElementById("a");
  const newB = document.getElementById("b");
  const newC = document.getElementById("c");
  const newD = document.getElementById("d");
  const newE = document.getElementById("e");
  const newF = document.getElementById("f");
  const newG = document.getElementById("g");
  const newH = document.getElementById("h");
  const newI = document.getElementById("i");
  const newL = document.getElementById("l");
  const newM = document.getElementById("m");
  const newN = document.getElementById("n");
  const newO = document.getElementById("o");
  const newP = document.getElementById("p");
  const newQ = document.getElementById("q");
  const newR = document.getElementById("r");
  const newS = document.getElementById("s");
  const newT = document.getElementById("t");
  const newU = document.getElementById("u");
  const newV = document.getElementById("v");
  const newZ = document.getElementById("z");
  
  
  newA.addEventListener("click", addA);
  newB.addEventListener("click", addB);
  newC.addEventListener("click", addC);
  newD.addEventListener("click", addD);
  newE.addEventListener("click", addE);
  newF.addEventListener("click", addF); 
  newG.addEventListener("click", addG);
  newH.addEventListener("click", addH);
  newI.addEventListener("click", addI);
  newL.addEventListener("click", addL);
  newM.addEventListener("click", addM);
  newN.addEventListener("click", addN);
  newO.addEventListener("click", addO);
  newP.addEventListener("click", addP);
  newQ.addEventListener("click", addQ);
  newR.addEventListener("click", addR);
  newS.addEventListener("click", addS);
  newT.addEventListener("click", addT);
  newU.addEventListener("click", addU);
  newV.addEventListener("click", addV);
  newZ.addEventListener("click", addZ);
  
   myArr = [];
  
  
  
  function addA(){
    var lettera = "A";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addB(){
    var lettera = "B";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  
  function addC(){
    var lettera = "C";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
      taskList.appendChild (para);
  };
  function addD(){
    var lettera = "D";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addE(){
    var lettera = "E";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addF(){
    var lettera = "F";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addG(){
    var lettera = "G";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addH(){
    var lettera = "H";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addI(){
    var lettera = "I";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addL(){
    var lettera = "L";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addM(){
    var lettera = "M";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addN(){
    var lettera = "N";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addO(){
    var lettera = "O";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addP(){
    var lettera = "P";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addQ(){
    var lettera = "Q";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addR(){
    var lettera = "R";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addS(){
    var lettera = "S";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addT(){
    var lettera = "T";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addU(){
    var lettera = "U";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addV(){
    var lettera = "V";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  function addZ(){
    var lettera = "Z";
    var newLength = myArr.push(lettera);
      const para = document.createElement ('p');
      para.className = 'task';
      para.appendChild (document.createTextNode (lettera) );
  taskList.appendChild (para);
  };
  
      document.getElementById("a").addEventListener("click", function () {
        document.getElementById("sampletext").value = "A";
      });
  
      document.getElementById("b").addEventListener("click", function () {
        document.getElementById("sampletext").value = "B";
      });
  
      document.getElementById("c").addEventListener("click", function () {
        document.getElementById("sampletext").value = "C";
      });
  
      document.getElementById("d").addEventListener("click", function () {
        document.getElementById("sampletext").value = "D";
      });
  
      document.getElementById("e").addEventListener("click", function () {
        document.getElementById("sampletext").value = "E";
      });
  
      document.getElementById("f").addEventListener("click", function () {
        document.getElementById("sampletext").value = "F";
      });
  
      document.getElementById("g").addEventListener("click", function () {
        document.getElementById("sampletext").value = "G";
      });
  
      document.getElementById("h").addEventListener("click", function () {
        document.getElementById("sampletext").value = "H";
      });
  
      document.getElementById("i").addEventListener("click", function () {
        document.getElementById("sampletext").value = "I";
      });
      document.getElementById("l").addEventListener("click", function () {
        document.getElementById("sampletext").value = "L";
      });
      document.getElementById("m").addEventListener("click", function () {
        document.getElementById("sampletext").value = "M";
      });
      document.getElementById("n").addEventListener("click", function () {
        document.getElementById("sampletext").value = "N";
      });
      document.getElementById("o").addEventListener("click", function () {
        document.getElementById("sampletext").value = "O";
      });
      document.getElementById("p").addEventListener("click", function () {
        document.getElementById("sampletext").value = "P";
      });
      document.getElementById("q").addEventListener("click", function () {
        document.getElementById("sampletext").value = "Q";
      });
      document.getElementById("r").addEventListener("click", function () {
        document.getElementById("sampletext").value = "R";
      });
      document.getElementById("s").addEventListener("click", function () {
        document.getElementById("sampletext").value = "S";
      });
      document.getElementById("t").addEventListener("click", function () {
        document.getElementById("sampletext").value = "T";
      });
      document.getElementById("u").addEventListener("click", function () {
        document.getElementById("sampletext").value = "U";
      });
      document.getElementById("v").addEventListener("click", function () {
        document.getElementById("sampletext").value = "V";
      });
      document.getElementById("z").addEventListener("click", function () {
        document.getElementById("sampletext").value = "Z";
      });