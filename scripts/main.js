let importantIcon = "fas fa-star";
let notImportantIcon = "far fa-star";
let isImportant= true;
let isPanelVisible=true;



function toggleImportance(){
    console.log("icon clicked!");
    if(isImportant){
        // switch to none imp
        $("#iImportant").removeClass(importantIcon).addClass(notImportantIcon);
        isImportant=false;
    }
    else{
        //switch to imp
        
        $("#iImportant").removeClass(notImportantIcon).addClass(importantIcon);
        isImportant=true;
    }
    
}
function toggleVisibility(){
    if(isPanelVisible){
        $("#sect-form").hide();
        isPanelVisible=false;
    }else{
        $("#sect-form").show();
        isPanelVisible=true;
    }
}

function init() {
  console.log("Task manager");

  //load data

  //hook events
  $("#iImportant").click(toggleImportance);
  $("#btnClear").click(toggleVisibility);
      
}

window.onload = init;
