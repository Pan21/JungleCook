


function initListeners(){
    $("nav a ").click(function(e){
        
        var btnID = this.id;
        
        MODEL.getView(btnID);
    });

    $("button").click(function(e){
        
        var btnID = this.id;
        
        MODEL.getView(btnID);
    });

    $(".navicon").click(function(e){
        $("nav").toggleClass( "navMobileView");
        
        
    })




}

function viewDetail(){
    console.log("clicked")
    var btnID = "detailRecipe";
    MODEL.getView(btnID);

}



function initPages(){
    $.get('../views/nav.html', function(nav){
        $("#nav").html(nav);
        initListeners();
    });

    $.get('../views/home.html', function(data){
        $("#content").html(data);
    });
}

$(document).ready(function(){
    initPages();
}); 


function loginAlert(){

    swal({
        title: "Welcome,",
        text: "You Have been logged in!",
        icon: "success",
        button: "Continue",
      });

      Logged();
}

function Logged(){

    if (document.getElementById("loggedIn").style.display === "none") {
        document.getElementById("loggedIn").style.display = "block";
      document.getElementById("loggedOut").style.display = "none"
    } else {
      document.getElementById("loggedIn").style.display = "none";
      document.getElementById("loggedOut").style.display = "block";
    }

    
    }




