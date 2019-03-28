/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var w = (function () {
    return {
        searchButton: function () {
            var city = $("#nameCity").val();
            console.log(city);

            $.get('/clima/' + city, function (data) {
                console.log(data)
            });
        }
    }
})();

var m = function () {
    return {
        mostrar: function () {
            var valores = JSON.parse(w.searchButton());
            console.log(valores);
            $("#llenar").append("<br><br>"+valores.coord);

        }


    }
}();
