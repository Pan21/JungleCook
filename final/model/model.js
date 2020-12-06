var MODEL = (function(){


    var _getView = function(viewName){
        $.get(`views/${viewName}.html`, function(data){
            $("#content").html(data);
        });
    };


    return {
        getView: _getView,
    }
})();




