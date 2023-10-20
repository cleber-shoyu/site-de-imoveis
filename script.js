
function clonar(){
    const node = document.getElementById("card-filho");
    const clone = node.cloneNode(true);
    let doc = document.getElementById("card-pai").appendChild(clone);
}


for(let i = 0; i < 7; i++) {
    clonar();
};

 
let buttonVerTudo = document.querySelector('.btnVer-tudo')
buttonVerTudo.addEventListener("click", function() {
    for(let i = 0; i < 7; i++) {
        clonar();
    };
  });


