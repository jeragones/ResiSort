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
