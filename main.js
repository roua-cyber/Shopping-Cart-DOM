
if (document.readyState == 'loading'){
    document.addEventListener('DOMcontentLoaded',ready)
}else{
    ready()
}
function ready (){
            updatecarttotal ();
}
var buttonsthatremoveitem=document.getElementsByClassName('del-btn');

for(i=0;i<buttonsthatremoveitem.length;i++){
    var button=buttonsthatremoveitem[i];
    button.addEventListener('click',function(event){
        var clickedbutton=event.target;
        clickedbutton.parentElement.parentElement.parentElement.remove();
        updatecarttotal ();
    })
}

function updatecarttotal(){
    var shoppingcart=document.getElementsByClassName('shopping-cart')[0];
    var items= shoppingcart.getElementsByClassName('item') ;
    var totalprice=0;
    for(i=0;i<items.length;i++){
       var item=items[i] ;
       var itemprice=item.getElementsByClassName('item-price')[0];
       var price=parseFloat( itemprice.innerText.replace('$', ''));
       var quantity=parseFloat((item.getElementsByClassName('qntity')[0]).value);
       var totalprice=totalprice+(price*quantity);
       console.log(totalprice);
    }
    document.getElementsByClassName('total')[0].innerText='$'+totalprice ;
}

var  plusbuttons=document.getElementsByClassName('plus-btn') ;

    for(i=0;i<plusbuttons.length;i++) {
    var plusbutton=plusbuttons[i];
    plusbutton.addEventListener('click',function(event){
    clickedplusbutton=event.target;
    clickedplusbutton.nextElementSibling.value=parseFloat(clickedplusbutton.nextElementSibling.value)+1 ;
    updatecarttotal ();

    })
}

var  plusbuttons=document.getElementsByClassName('minus-btn') ;

    for(i=0;i<plusbuttons.length;i++) {
    var plusbutton=plusbuttons[i];
    plusbutton.addEventListener('click',function(event){
    clickedplusbutton=event.target;
    clickedplusbutton.previousElementSibling.value=parseFloat(clickedplusbutton.previousElementSibling.value)-1 ;
    updatecarttotal ();

    })
}
    
var  heartbuttons=document.getElementsByClassName('like-btn');
for(i=0;i<heartbuttons.length;i++){
   var heart=heartbuttons[i];
   heart.addEventListener('click',function(event){
       clickedheart=event.target ;
       clickedheart.classList.toggle('red');
   })
}
