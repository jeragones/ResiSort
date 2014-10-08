/**
 * Created by Daniel on 30/09/2014.
 */
function resetActive(event, percent, step) {
    $(".progress-bar").css("width", percent + "%").attr("aria-valuenow", percent);
    $(".progress-completed").text(percent + "%");

    $("div").each(function () {
        if ($(this).hasClass("activestep")) {
            $(this).removeClass("activestep");
        }
    });

    if (event.target.className == "col-md-2") {
        $(event.target).addClass("activestep");
    }
    else {
        $(event.target.parentNode).addClass("activestep");
    }

    hideSteps();
    showCurrentStepInfo(step);
}

function hideSteps() {
    $("div").each(function () {
        if ($(this).hasClass("activeStepInfo")) {
            $(this).removeClass("activeStepInfo");
            $(this).addClass("hiddenStepInfo");
        }
    });
}

function showCurrentStepInfo(step) {
    var id = "#" + step;
    $(id).addClass("activeStepInfo");
}

function showPartner(op) {
    //alert(op);

    if(op) {
        $("#explique").show();
    } else {
        $("#explique").hide();
    }
    /*
    $("#opNo").click(function() {
        
        //document.getElementById('explique').innerHTML = "<label> Explique:</label> ";
    }
    
    $("#opSi").click(function() {
        
        //document.getElementById('explique').innerHTML = "<label> Explique:</label> ";
    }
*/
    /*
    $("#comboEx").on('click', function() {
    $("#explique").show();
    
});
*/
 //document.getElementById('explique').style.visibility="visible";
}

function showBMC(op){
    if(op) {
        $("#BMC").show();
         showBTCC(false);
         showBP(false);
         showBE(false);
         showAF(false);
         showO(false);
    } else {
        $("#BMC").hide();
    }

}
function showBTCC(op){
    if(op) {
        $("#BTCC").show();
        showBMC(false);
         showBP(false);
         showBE(false);
         showAF(false);
         showO(false);
    } else {
        $("#BTCC").hide();
    }

}
function showBP(op){
    if(op) {
        $("#BP").show();
          showBMC(false);
         showBTCC(false);
         showBE(false);
         showAF(false);
         showO(false);
    } else {
        $("#BP").hide();
    }

}
function showBE(op){
    if(op) {
        $("#BE").show();
        showBMC(false);
         showBP(false);
         showBTCC(false);
         showAF(false);
         showO(false);
    } else {
        $("#BE").hide();
    }
}
function showAF(op){
    if(op) {
        $("#AF").show();
        showBMC(false);
         showBP(false);
         showBTCC(false);
         showO(false);
         showBE(false);
    } else {
        $("#AF").hide();
    }
}

function showO(op){
    if(op) {
        $("#Other").show();
         showBMC(false);
         showBP(false);
         showBTCC(false);
         showAF(false);
         showBE(false);
         
    } else {
        $("#Other").hide();
    }
}


function hideAll(){
    showBMC(false);
    showBP(false);
    showBTCC(false);
    showBE(false);
    showAF(false);
    showO(false);


}

function showJustCM(op){
  if(op) {
        $("#justCM").show();
         
    } else {
        $("#justCM").hide();
    }

}

function showJustCR(op){
  if(op) {
        $("#justCR").show();
         
    } else {
        $("#justCR").hide();
    }

}


