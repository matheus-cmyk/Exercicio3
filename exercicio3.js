let modeloVei, distPerco, tempoPerco, veloMedia

modeloVei = prompt("Qual o nome do modelo do veiculo? ")
distancia = parseFloat(prompt("Qual a distancia percorrida em km")) 
tempoPerco = parseFloat(prompt("Quanto tempo levou para percorrer essa distancia em horas? "))
veloMedia = distancia/tempoPerco

alert(`Modelo do veiculo é ${modeloVei} \nDistancia percorrida foi ${distancia} km\nTempo percorrido${tempoPerco} horas\nVelocidade Média: ${veloMedia.toFixed(2)} km/h`)