function changebg(){
    const colors1=['#E0BBE4','#957DAD','#D291BC','#FEC8D8','#FFDFD3','#FFDFD3','#FFDFD3','#DEE6FC'];
    const colors=['red','green','purple','indigo','blue','yellow','orange'];
    const id=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[id];
    document.getElementById("hello").style.backgroundColor = colors1[id];
}