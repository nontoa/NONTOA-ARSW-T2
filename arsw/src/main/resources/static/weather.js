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
                console.log("###############################################################");
                o = JSON.parse(data);
                console.log(o.sys.country);
                // Obtener la referencia del elemento body
                var body = document.getElementsByTagName("body")[0];

                // Crea un elemento <table> y un elemento <tbody>
                var tabla = document.createElement("table");
                var tblBody = document.createElement("tbody");

                // Crea las celdas
                for (var i = 0; i < 2; i++) {
                    // Crea las hileras de la tabla
                    var hilera = document.createElement("tr");

                    for (var j = 0; j < 5; j++) {
                        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                        // texto sea el contenido de <td>, ubica el elemento <td> al final
                        // de la hilera de la tabla
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
                                default:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode("Other information");
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
                                default:
                                    var celda = document.createElement("td");
                                    var textoCelda = document.createTextNode(o.weather);
                                    celda.appendChild(textoCelda);
                                    hilera.appendChild(celda);
                                    break
                            }
                        }


                    }

                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                    tblBody.appendChild(hilera);
                }

                // posiciona el <tbody> debajo del elemento <table>
                tabla.appendChild(tblBody);
                // appends <table> into <body>
                body.appendChild(tabla);
                // modifica el atributo "border" de la tabla y lo fija a "2";
                tabla.setAttribute("border", "2");
            });
        }
    }
})();
