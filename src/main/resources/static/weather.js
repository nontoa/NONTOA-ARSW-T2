/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var o;


var w = (function () {
    return {
        searchButton: function () {
            var city = $("#nameCity").val();
            console.log(city);

            $.get('/clima/' + city, function (data) {
                console.log(data);
                o = JSON.parse(data);
                //console.log(o.weather[0].main);
                var body = document.getElementsByTagName("body")[0];
                var center = document.createElement("center");
                var tabla = document.createElement("table");
                var tblBody = document.createElement("tbody");
                for (var i = 0; i < 2; i++) {
                    var hilera = document.createElement("tr");
                    for (var j = 0; j < 6; j++) {
                        if (i == 0) {
                            switch (j) {
                                case 0:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Name");
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 1:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Country");
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 2:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Lon");
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 3:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Lat");
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 4:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Main");
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                default:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Description");
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                            }
                        }
                        else {
                            switch (j) {
                                case 0:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.name);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 1:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.sys.country);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 2:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.coord.lon);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 3:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.coord.lat);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                case 4:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.weather[0].main);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break;
                                default:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.weather[0].description);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break
                            }
                        }


                    }
                    tblBody.appendChild(hilera);
                }
                tabla.appendChild(tblBody);
                center.appendChild(tabla);
                body.appendChild(center);
                tabla.setAttribute("border", "2");
            });
        }
    }
})();
