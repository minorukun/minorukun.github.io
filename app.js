var leftslot;
var rightslot;
var leftslotisO = false;
var rightslotisO = false;
var tortillaL;
var tortillaR;
class Quesadilla {
  constructor(tortilla, queso, proteina, proteina2, proteina3, condimento, verdura, condimento2, verdura2) {
    this.tortilla = tortilla;
    this.queso = queso;
    this.carne = proteina;
    this.carne2 = proteina2;
    this.carne3 = proteina3;
    this.condimento = condimento;
    this.condimento2 = condimento2
    this.verdura = verdura;
    this.verdura2 = verdura2;
    //indicadores de coccion
    this.burnessA = 0;
    this.burnessAA = 0
    this.burnessAB = 0
    this.burnessB = 0
    this.burnessBA = 0
    this.burnessBB = 0
    //Otros
    this.cheesness = 0;
    this.flipped = false;
    this.folded = false;
    this.rolled = false;
    this.flitfold = false
    this.flfofl = false
    this.hasCheese = false;
    this.isempty = true
  }
}

class Receta {
  constructor(tortilla,queso,proteina,condimento,verdura) {
    this.tortilla = tortilla;
    this.queso = queso;
    this.carne = proteina;
    this.condimento = condimento;
    this.verdura = verdura;
  }
}

function getScoreL() {
  let finalscore = 0
  //Puntos de coccion A
  if (gameState.quesadillaL.burnessAA === 0 && gameState.quesadillaL.burnessAB === 0 ) {
    let difference = Math.abs(gameState.quesadillaL.burnessA - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference)
  } else {
    let difference = Math.floor((gameState.quesadillaL.burnessAA + gameState.quesadillaL.burnessAB) / 2)
    difference = Math.abs(difference - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference)
  }
  //Puntos de coccion B
  if (gameState.quesadillaL.burnessBA === 0 && gameState.quesadillaL.burnessBB === 0 ) {
    let difference = Math.abs(gameState.quesadillaL.burnessB - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference) 
  } else {
    let difference = Math.floor((gameState.quesadillaL.burnessBA + gameState.quesadillaL.burnessBB) / 2)
    difference = Math.abs(difference - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference)
  }
  //Puntos del queso
  let difference = Math.abs(gameState.quesadillaL.cheesness - 70)
  difference = Math.ceil(difference / 2)
  finalscore += 10 - (0.5*difference)
  //Puntos de eleccion de queso
  if (gameState.quesadillaL.queso === gameState.queso) {
    finalscore += 10
  }
  //Puntos de eleccion de tortilla
  if (gameState.quesadillaL.tortilla === gameState.tortilla) {
    finalscore += 10
  }
  //Puntos de eleccion de carne
  if (gameState.quesadillaL.carne === gameState.proteina) {
    finalscore += 4
  }
  if (gameState.proteina2 === "" && typeof gameState.quesadillaL.carne2 === "undefined") {
    finalscore += 4
  } else if (gameState.proteina2 === gameState.quesadillaL.carne2) {
    finalscore += 4
  }
  if (gameState.proteina3 === "" && typeof gameState.quesadillaL.carne3 === "undefined") {
    finalscore += 4
  } else if (gameState.proteina3 === gameState.quesadillaL.carne3) {
    finalscore += 4
  }
  //Puntos de elección de condimento
  if (gameState.condimento === "Sin Salsa" && typeof gameState.quesadillaL.condimento === "undefined") {
    finalscore += 8 
  } else if (gameState.condimento === gameState.quesadillaL.condimento) {
    finalscore += 8
  }
  if (gameState.condimento2 === "Sin Salsa" && typeof gameState.quesadillaL.condimento2 === "undefined") {
    finalscore += 8 
  } else if (gameState.condimento2 === gameState.quesadillaL.condimento2) {
    finalscore += 8
  }
  //Puntos de elección de verduras
  if (gameState.verdura === "" && typeof gameState.quesadillaL.verdura === "undefined") {
    finalscore += 6
  } else if (gameState.verdura === gameState.quesadillaL.verdura) {
    finalscore += 6
  }
  if (gameState.verdura2 === "" && typeof gameState.quesadillaL.verdura2 === "undefined") {
    finalscore += 6
  } else if (gameState.verdura2 === gameState.quesadillaL.verdura2) {
    finalscore += 6
  }
  if (gameState.quesadillaL.folded) {
    finalscore += 5
  }
  if (finalscore < 25) {
    finalscore = -30
  }
  return finalscore
}

function getScoreR() {
  let finalscore = 0
  //Puntos de coccion A
  if (gameState.quesadillaR.burnessAA === 0 && gameState.quesadillaR.burnessAB === 0 ) {
    let difference = Math.abs(gameState.quesadillaR.burnessA - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference) 
  } else {
    let difference = Math.floor((gameState.quesadillaR.burnessAA + gameState.quesadillaR.burnessAB) / 2)
    difference = Math.abs(difference - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference)
  }
  //Puntos de coccion B
  if (gameState.quesadillaR.burnessBA === 0 && gameState.quesadillaR.burnessBB === 0 ) {
    let difference = Math.abs(gameState.quesadillaR.burnessB - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference) 
  } else {
    let difference = Math.floor((gameState.quesadillaR.burnessBA + gameState.quesadillaR.burnessBB) / 2)
    difference = Math.abs(difference - 924)
    difference = Math.ceil(difference / 24)
    finalscore += 15 - (0.5*difference)
  }
  //Puntos del queso
  let difference = Math.abs(gameState.quesadillaR.cheesness - 70)
  difference = Math.ceil(difference / 2)
  finalscore += 10 - (0.5*difference)
  //Puntos de eleccion de queso
  if (gameState.quesadillaR.queso === gameState.Rqueso) {
    finalscore += 10
  }
  //Puntos de eleccion de tortilla
  if (gameState.quesadillaR.tortilla === gameState.Rtortilla) {
    finalscore += 10
  }
  //Puntos de eleccion de carne
  if (gameState.quesadillaR.carne === gameState.Rproteina) {
    finalscore += 4
  }
  if (gameState.Rproteina2 === "" && typeof gameState.quesadillaR.carne2 === "undefined") {
    finalscore += 4
  } else if (gameState.Rproteina2 === gameState.quesadillaR.carne2) {
    finalscore += 4
  }
  if (gameState.Rproteina3 === "" && typeof gameState.quesadillaR.carne3 === "undefined") {
    finalscore += 4
  } else if (gameState.Rproteina3 === gameState.quesadillaR.carne3) {
    finalscore += 4
  }
  //Puntos de elección de condimento
  if (gameState.Rcondimento === "Sin Salsa" && typeof gameState.quesadillaR.condimento === "undefined") {
    finalscore += 8 
  } else if (gameState.Rcondimento === gameState.quesadillaR.condimento) {
    finalscore += 8
  }
  if (gameState.Rcondimento2 === "Sin Salsa" && typeof gameState.quesadillaR.condimento2 === "undefined") {
    finalscore += 8 
  } else if (gameState.Rcondimento2 === gameState.quesadillaR.condimento2) {
    finalscore += 8
  }
  //Puntos de elección de verduras
  if (gameState.Rverdura === "" && typeof gameState.quesadillaR.verdura === "undefined") {
    finalscore += 6
  } else if (gameState.Rverdura === gameState.quesadillaR.verdura) {
    finalscore += 6
  }
  if (gameState.Rverdura2 === "" && typeof gameState.quesadillaR.verdura2 === "undefined") {
    finalscore += 6
  } else if (gameState.Rverdura2 === gameState.quesadillaR.verdura2) {
    finalscore += 6
  }
  if (gameState.quesadillaR.folded) {
    finalscore += 5
  }
  if (finalscore < 25) {
    finalscore = -30
  }
  return finalscore
}

const gameState = {
  level: 0,
  score: 0,
  page: 1,
  ingredients: {
    "level 0": ["harina", "maiz", "queso", "jamon"],
    "level 1": "salchicha",
    "level 2": "chile",
    "level 3": "pescado",
    "level 4": "carne",
    "level 5": "bacon",
    "level 6": "quesobl",
    "level 7": "salmon",
    "level 8": "ketchup",
    "level 9": "omelette",
    "level 10": ["espinaca", "lechuga"],
    "level 11": "champiñon",
    "level 12": ["sal", "crema"],
    "level 13": "quesoox",
    "level 14": "jamonser",
    "level 15": ["gruesa", "pepperoni", "marinara"],
  },
  //Ingredientes de la izquierda
  Rqueso: "",
  Rtortilla: "",
  Rproteina: "",
  Rproteina2: "",
  Rproteina3: "",
  Rcondimento: "",
  Rcondimento2: "",
  Rverdura: "",
  Rverdura2: "",
  queso: "",
  tortilla: "",
  proteina: "",
  proteina2: "",
  proteina3: "",
  condimento: "",
  condimento2: "",
  verdura: "",
  verdura2: "",
  derritiendo: false,
  quesadillaL: undefined,
  quesadillaR: undefined,
  music: false,
  TSlotL: undefined,
  QSlotL: undefined,
  PSlotL: undefined,
  PSlot2L: undefined,
  PSlot3L: undefined,
  VSlotL: undefined,
  VSlot2L: undefined,
  CSlotL: undefined,
  CSlot2L: undefined,
  //Slots derechos
  TSlotR: undefined,
  QSlotR: undefined,
  PSlotR: undefined,
  PSlot2R: undefined,
  PSlot3R: undefined,
  VSlotR: undefined,
  VSlot2R: undefined,
  CSlotR: undefined,
  CSlot2R: undefined,
  burnLT: undefined,
  burnRT: undefined,
  //recetas
  page1: ["a", "b",'c','d','e','f'],
  tutorial: [
    "Bienvenido a la Cocina \n\nEn este tutorial te \nenseñaré donde \nestán las cosas\ny como usarlas\n\nSi ya has jugado \nantes, da click",
    "Este es el ticket, \naquí aparecerán las \nordenes, tu nivel \ny puntos",
    "Arriba están los \nbotones para cambiar \nentre pestañas de \ningredientes, que \nluego desbloquearás",
    "A un lado están los \nbotones para mover \nla tortilla:\nFlip: Voltea \nla tortilla\nFold: Dobla por mitad \nla tortilla\nRoll: Enrolla la tortilla\nMelt: Derrite más \nrápido el queso",
    "En la mesa de madera \nestán los ingredientes\n\nPara colocarlos, da \nclick en ellos y \nselecciona un espacio",
    "Abajo está la estufa \ny una linea\n\nEsta sirve para saber \ndonde están \nlos espacios",
    "A un lado, en otra \nmesa de madera, están \nlos indicadores de \ncocción",
    "En cada uno, hay una \nbarra morada que \nrepresenta el lado \nque está abajo\ny una rosa, que es el \nlado de arriba",
    "Procura que queden \ncerca de la barra \namarilla",
    "Abajo de aquí, hay \nunos botones que\nservirán para \nentregar la quesadilla",
    "Hasta abajo hay unos \ntextos,el del centro \nte da consejos y\nel de la derecha \nte muestra el nombre \ndel ingrediente \nseleccionado",
    "Para hacer una \nquesadilla, coloca \nuna tortilla en la \nsarten y espera \na que se cueza.\nDespués volteala y \nañade los ingredientes.\nFinalmente, vuelve \na esperar a que se \ncueza",
    "Eso es todo \nBuena suerte!"
  ],
  index: 1,
  recetaL: undefined,
  recetaR: undefined,
  inleft: true,
  consejos: [
    "Entrega la tortilla en cuanto el queso se derrita para más puntos",
    "Al doblar la tortilla, el indicador va más lento pero se sigue cociendo a la misma velocidad",
    "Lo máximo que puedes obtener de una quesadilla son 100 puntos",
    "El derretidor acelera el proceso al doble de velocidad",
    "No puedes desdoblar una tortilla ni quitar ingredientes",
    "Si haces demasiados pocos puntos, perderás 30 de estos, y puedes incluso bajar de nivel",
    "Solo puedes colocar pepperoni como proteina a las pan pitas",
    "Las pan pitas son panes árabes usadas para pizzas rápidas",
    "El jamón serrano y de bellota son tipos de jamón españoles",
    "Cuentas las leyendas, que al mejor chef del mundo se le otorga el poder de usar carne Wagyu",
    "Si se deja derritiendo el queso por mucho tiempo, se hace dificil de manejar y perderás puntos",
    "Existen más de 35 ingredientes!",
    "Recuerda siempre cocinar los dos lados de la tortilla",
    "Algunos ingredientes solo se pueden usar con tortillas especificas",
    "Las fresas y plátanos son para las crepas",
    "Los botones de entregar no tienen confirmación, ten cuidado",
    "Solo puedes colocar ingredientes en tortillas"
  ]
};

function leveling() {
  let scoreinstance = gameState.score
  if (gameState.score >= 100000) {
    gameState.level = 35
    gameState.fondo.setTexture("bggold")
  } else
  if (gameState.score >= 77777) {
    gameState.level = 34
  } else
  if (gameState.score >= 55000) {
    gameState.level = 33
  } else
  if (gameState.score >= 40000) {
    gameState.level = 32
  }
  else if (gameState.score >= 30000) {
    gameState.level = 31
  }
  else if (gameState.score >= 20000) {
    gameState.level = 30
  } else if (gameState.score >= 14000) {
    gameState.level = 29
  } else if (gameState.score >= 12500) {
    gameState.level = 28
  } else if (gameState.score >= 11140) {
    gameState.level = 27
  } else if (gameState.score >= 10600) {
    gameState.level = 26
  } else if (gameState.score >= 10000) {
    gameState.level = 25
  } else if (gameState.score >= 9520) {
    gameState.level = 24
  } else if (gameState.score >= 9080) {
    gameState.level = 23
  } else if (gameState.score >= 8715) {
    gameState.level = 22
  } else if (gameState.score >= 8320) {
    gameState.level = 21
  } else if (gameState.score >= 8010) {
    gameState.level = 20
  } else if (gameState.score >= 7777) {
    gameState.level = 19
  } else if (gameState.score >= 7250) {
    gameState.level = 18
  } else if (gameState.score >= 6920) {
    gameState.level = 17
  } else if (gameState.score >= 6530) {
    gameState.level = 16
  } else if (gameState.score >= 6210) {
    gameState.level = 15
  } else if (gameState.score >= 5710) {
    gameState.level = 14
  } else if (gameState.score >= 5300) {
    gameState.level = 13
  } else if (gameState.score >= 4800) {
    gameState.level = 12
  } else if (gameState.score >= 4300) {
    gameState.level = 11
  } else if (gameState.score >= 3700) {
    gameState.level = 10
  } else if (gameState.score >= 3100) {
    gameState.level = 9
  } else if (gameState.score >= 2670) {
    gameState.level = 8
  } else if (gameState.score >= 1890) {
    gameState.level = 7
  } else if (gameState.score >= 1420) {
    gameState.level = 6
  } else if (gameState.score >= 1050) {
    gameState.level = 5
  } else if (gameState.score >= 700) {
    gameState.level = 4
  } else if (gameState.score >= 400) {
    gameState.level = 3
  } else if (gameState.score >= 200) {
    gameState.level = 2
  } else {
    gameState.level = 1
  }
  if (gameState.score > scoreinstance) {
    gameState.tips.setText("Subiste de Nivel")
  }
}

function typeT() {
  gameState.tortilla = Math.floor(Math.random() * 3)
  if (gameState.tortilla === 0) {
    gameState.tortilla = "Salada"
  } else if (gameState.tortilla === 1) {
    gameState.tortilla = gameState.level >= 15 ? "Pizza" : "Salada"
  } else if (gameState.tortilla === 2) {
    gameState.tortilla = gameState.level >= 20 ? "Dulce" : typeT()
  }
  return gameState.tortilla
}

function meat() {
  gameState.proteina = Math.floor(Math.random() * 9);
  if (gameState.proteina === 0) {
    gameState.proteina  = "Jamon";
  } else if (gameState.proteina === 1) {
    gameState.proteina = gameState.level > 0 ? "Salchicha" : meat();
  } else if (gameState.proteina === 2) {
    gameState.proteina = gameState.level > 2 ? "Pescado" : meat();
  } else if (gameState.proteina === 3) {
    gameState.proteina = gameState.level > 3 ? "Carne" : meat();
  } else if (gameState.proteina === 4) {
    gameState.proteina = gameState.level > 4 ? "Bacon" : meat();
  } else if (gameState.proteina === 5) {
    gameState.proteina = gameState.level > 6 ? "Salmon" : meat();
  } else if (gameState.proteina === 6) {
    gameState.proteina = gameState.level > 13 ? "Jamon Serrano" : meat();
  } else if (gameState.proteina === 7) {
    gameState.proteina = gameState.level > 15 ? "Pollo" : meat()
  } else {
    gameState.proteina = gameState.level > 16 ? "Frijoles" : meat()
  }
  return gameState.proteina
}

function meat2() {
  gameState.proteina2 = Math.floor(Math.random() * 9);
  if (gameState.proteina2 === 0) {
    gameState.proteina2  = "Jamon";
  } else if (gameState.proteina2 === 1) {
    gameState.proteina2 = gameState.level > 0 ? "Salchicha" : meat();
  } else if (gameState.proteina2 === 2) {
    gameState.proteina2 = gameState.level > 2 ? "Pescado" : meat();
  } else if (gameState.proteina2 === 3) {
    gameState.proteina2 = gameState.level > 3 ? "Carne" : meat();
  } else if (gameState.proteina2 === 4) {
    gameState.proteina2 = gameState.level > 4 ? "Bacon" : meat();
  } else if (gameState.proteina2 === 5) {
    gameState.proteina2 = gameState.level > 6 ? "Salmon" : meat();
  } else if (gameState.proteina2 === 6) {
    gameState.proteina2 = gameState.level > 13 ? "Jamon Serrano" : meat();
  } else if (gameState.proteina2 === 7) {
    gameState.proteina2 = gameState.level > 15 ? "Pollo" : meat()
  } else {
    gameState.proteina2 = gameState.level > 16 ? "Frijoles" : meat()
  }
  return gameState.proteina2
}

function meat3() {
  gameState.proteina3 = Math.floor(Math.random() * 9);
  if (gameState.proteina3 === 0) {
    gameState.proteina3  = "Jamon";
  } else if (gameState.proteina3 === 1) {
    gameState.proteina3 = gameState.level > 0 ? "Salchicha" : meat();
  } else if (gameState.proteina3 === 2) {
    gameState.proteina3 = gameState.level > 2 ? "Pescado" : meat();
  } else if (gameState.proteina3 === 3) {
    gameState.proteina3 = gameState.level > 3 ? "Carne" : meat();
  } else if (gameState.proteina3 === 4) {
    gameState.proteina3 = gameState.level > 4 ? "Bacon" : meat();
  } else if (gameState.proteina3 === 5) {
    gameState.proteina3 = gameState.level > 6 ? "Salmon" : meat();
  } else if (gameState.proteina3 === 6) {
    gameState.proteina3 = gameState.level > 13 ? "Jamon Serrano" : meat();
  } else if (gameState.proteina3 === 7) {
    gameState.proteina3 = gameState.level > 15 ? "Pollo" : meat()
  } else {
    gameState.proteina3 = gameState.level > 16 ? "Frijoles" : meat()
  }
  return gameState.proteina3
}

function tortillaS() {
  gameState.tortilla = Math.floor(Math.random() * 3);
  if (gameState.tortilla === 0) {
    gameState.tortilla = "Tortilla de Maiz"
  } else if (gameState.tortilla === 1) {
    gameState.tortilla = "Tortilla de Harina"
  } else {
    gameState.tortilla = gameState.level > 8 ? "Omelette" : tortillaS()
  }
  return gameState.tortilla
}

function sauce() {
  if (gameState.tortilla === "Crepa") {
    gameState.condimento = Math.floor(Math.random() * 3)
    if (gameState.condimento === 0) {
      gameState.condimento = "Sin Salsa"
    } else if (gameState.condimento === 1) {
      gameState.condimento = gameState.level > 19 ? "Chocolate" : sauce()
    } else {
      gameState.condimento = gameState.level > 19 ? "Mermalada" : sauce()
    }
  } else if (gameState.tortilla === "Pan pita") {
    gameState.condimento = "Salsa Marinara"
  } else {
    gameState.condimento = Math.floor(Math.random() * 6)
    if (gameState.condimento === 0) {
      gameState.condimento = gameState.level > 1 ? "Chile" : sauce()
    } else if (gameState.condimento === 1) {
      gameState.condimento = gameState.level > 7 ? "Ketchup" : sauce()
    } else if (gameState.condimento === 2) {
      gameState.condimento = gameState.level > 11 ? "Sal" : "Sin Salsa"
    } else if (gameState.condimento === 3) {
      gameState.condimento = gameState.level > 11 ? "Crema" : "Sin Salsa"
    } else if (gameState.condimento === 4) {
      gameState.condimento = gameState.level > 22 ? "Salsa Verde" : sauce()
    } else if (gameState.condimento === 5) {
      gameState.condimento = gameState.level > 22 ? "Salsa Roja" : "Sin Salsa"
    } else {
      gameState.condimento = gameState.level > 28 ? "Mole" : sauce()
    }
  }
  return gameState.condimento
}

function sauce2() {
  if (gameState.tortilla === "Crepa") {
    gameState.condimento2 = Math.floor(Math.random() * 3)
    if (gameState.condimento2 === 0) {
      gameState.condimento2 = "Sin Salsa"
    } else if (gameState.condimento2 === 1) {
      gameState.condimento2 = gameState.level > 19 ? "Chocolate" : sauce()
    } else {
      gameState.condimento2 = gameState.level > 19 ? "Mermalada" : sauce()
    }
  } else if (gameState.tortilla === "Pan pita") {
    gameState.condimento2 = "Salsa Marinara"
  } else {
    gameState.condimento2 = Math.floor(Math.random() * 6)
    if (gameState.condimento2 === 0) {
      gameState.condimento2 = gameState.level > 1 ? "Chile" : sauce()
    } else if (gameState.condimento2 === 1) {
      gameState.condimento2 = gameState.level > 7 ? "Ketchup" : sauce()
    } else if (gameState.condimento2 === 2) {
      gameState.condimento2 = gameState.level > 11 ? "Sal" : "Sin Salsa"
    } else if (gameState.condimento2 === 3) {
      gameState.condimento2 = gameState.level > 11 ? "Crema" : "Sin Salsa"
    } else if (gameState.condimento2 === 4) {
      gameState.condimento2 = gameState.level > 22 ? "Salsa Verde" : sauce()
    } else if (gameState.condimento2 === 5) {
      gameState.condimento2 = gameState.level > 22 ? "Salsa Roja" : "Sin Salsa"
    } else {
      gameState.condimento2 = gameState.level > 28 ? "Mole" : sauce()
    }
  }
  return gameState.condimento2
}


function verdura() {
  if (gameState.level < 10) {
    gameState.verdura = ""
  } else {
    gameState.verdura = Math.floor(Math.random() * 6)
    if (gameState.verdura === 0 ) {
      gameState.verdura = "Lechuga"
    } else if (gameState.verdura === 1) {
      gameState.verdura = "Espinaca"
    } else if (gameState.verdura === 2) {
      gameState.verdura = gameState.level >= 11 ? "Espinaca" : verdura()
    } else if (gameState.verdura === 3) {
      gameState.verdura = gameState.level >= 22 ? "Cebolla" : verdura()
    } else if (gameState.verdura === 4) {
      gameState.verdura = gameState.level >= 29 ? "Aguacate" : verdura()
    } else if (gameState.verdura === 5) {
      gameState.verdura = gameState.level >= 29 ? "Pimientos" : verdura()
    }
  }
  return gameState.verdura
}

function verdura2() {
  if (gameState.level < 10) {
    gameState.verdura2 = ""
  } else {
    gameState.verdura2 = Math.floor(Math.random() * 6)
    if (gameState.verdura2 === 0 ) {
      gameState.verdura2 = "Lechuga"
    } else if (gameState.verdura2 === 1) {
      gameState.verdura2 = "Espinaca"
    } else if (gameState.verdura2 === 2) {
      gameState.verdura2 = gameState.level >= 11 ? "Espinaca" : verdura()
    } else if (gameState.verdura2 === 3) {
      gameState.verdura2 = gameState.level >= 22 ? "Cebolla" : verdura()
    } else if (gameState.verdura2 === 4) {
      gameState.verdura2 = gameState.level >= 29 ? "Aguacate" : verdura()
    } else if (gameState.verdura2 === 5) {
      gameState.verdura2 = gameState.level >= 29 ? "Pimientos" : verdura()
    }
  }
  return gameState.verdura2
}

const recipe = () => {
  let receta = ""
  typeT()
  if (gameState.tortilla === "Salada") {
    receta += "\n" + tortillaS() + "\n";
    if (gameState.level > 5) {
      gameState.queso = Math.floor(Math.random() * 2);
      if (gameState.queso === 0) {
        gameState.queso = "Queso Americano";
      } else if (gameState.queso === 1) {
        gameState.queso = "Queso Blanco";
      }
    } else {
      gameState.queso = "Queso Americano";
    }
    receta += gameState.queso + "\n";
    receta += meat() + "\n";
    if (gameState.level !== 0 && Math.floor(Math.random() * 2) === 0) {
      receta += meat2() + "\n"
    }
    if (gameState.level > 2 && Math.floor(Math.random() * 3) === 0 ) {
      receta += meat3() + "\n"
    }
    receta += sauce() + "\n"
    if (gameState.level > 7 && Math.floor(Math.random() * 2) === 0 && gameState.condimento !== "Sin Salsa") {
      receta += sauce2() + "\n"
    }
    receta += verdura() + "\n"
    if (gameState.level > 11 && Math.floor(Math.random() * 3)) {
      receta += verdura2() + "\n"
    }
  } else if (gameState.tortilla === "Pizza") {
    gameState.tortilla = "Pan pita"
    gameState.queso = "Queso Mozzarella"
    gameState.proteina = "Pepperoni"
    gameState.condimento = "Salsa Marinara"
    receta += "\n" + gameState.tortilla + "\n" + gameState.condimento + "\n" + gameState.queso + "\n" + gameState.proteina
  } else if (gameState.tortilla === "Dulce") {
    gameState.tortilla = "Crepa"
    gameState.condimento = Math.floor(Math.random() * 2) === 0 ? "Chocolate" : "Mermelada roja"
    gameState.verdura = gameState.level >= 21 ? "Platano" : "Fresa"
    receta += "\n" + gameState.tortilla + "\n" + gameState.condimento + "\n" + gameState.verdura
  }
  return receta;
};
//Receta de la derecha

function typeTR() {
  gameState.Rtortilla = Math.floor(Math.random() * 3)
  if (gameState.Rtortilla === 0) {
    gameState.Rtortilla = "Salada"
  } else if (gameState.Rtortilla === 1) {
    gameState.Rtortilla = gameState.level >= 15 ? "Pizza" : "Salada"
  } else if (gameState.Rtortilla === 2) {
    gameState.Rtortilla = gameState.level >= 20 ? "Dulce" : typeTR()
  }
  return gameState.Rtortilla
}

function Rmeat() {
  gameState.Rproteina = Math.floor(Math.random() * 9);
  if (gameState.Rproteina === 0) {
    gameState.Rproteina  = "Jamon";
  } else if (gameState.Rproteina === 1) {
    gameState.Rproteina = gameState.level > 0 ? "Salchicha" : meat();
  } else if (gameState.Rproteina === 2) {
    gameState.Rproteina = gameState.level > 2 ? "Pescado" : meat();
  } else if (gameState.Rproteina === 3) {
    gameState.Rproteina = gameState.level > 3 ? "Carne" : meat();
  } else if (gameState.Rproteina === 4) {
    gameState.Rproteina = gameState.level > 4 ? "Bacon" : meat();
  } else if (gameState.Rproteina === 5) {
    gameState.Rproteina = gameState.level > 6 ? "Salmon" : meat();
  } else if (gameState.Rproteina === 6) {
    gameState.Rproteina = gameState.level > 13 ? "Jamon Serrano" : meat();
  } else if (gameState.Rproteina === 7) {
    gameState.Rproteina = gameState.level > 15 ? "Pollo" : meat()
  } else {
    gameState.Rproteina = gameState.level > 16 ? "Frijoles" : meat()
  }
  return gameState.Rproteina
}

function Rmeat2() {
  gameState.Rproteina2 = Math.floor(Math.random() * 9);
  if (gameState.Rproteina2 === 0) {
    gameState.Rproteina2  = "Jamon";
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 1) {
    gameState.Rproteina2 = gameState.level > 0 ? "Salchicha" : meat();
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 2) {
    gameState.Rproteina2 = gameState.level > 2 ? "Pescado" : meat();
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 3) {
    gameState.Rproteina2 = gameState.level > 3 ? "Carne" : meat();
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 4) {
    gameState.Rproteina2 = gameState.level > 4 ? "Bacon" : meat();
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 5) {
    gameState.Rproteina2 = gameState.level > 6 ? "Salmon" : meat();
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 6) {
    gameState.Rproteina2 = gameState.level > 13 ? "Jamon Serrano" : meat();
    console.log(gameState.Rproteina2)
  } else if (gameState.Rproteina2 === 7) {
    gameState.Rproteina2 = gameState.level > 15 ? "Pollo" : meat()
    console.log(gameState.Rproteina2)
  } else {
    gameState.Rproteina2 = gameState.level > 16 ? "Frijoles" : meat()
    console.log(gameState.Rproteina2)
  }
  console.log(gameState.Rproteina2)
  return gameState.Rproteina2
}

function Rmeat3() {
  gameState.Rproteina3 = Math.floor(Math.random() * 9);
  if (gameState.Rproteina3 === 0) {
    gameState.Rproteina3  = "Jamon";
  } else if (gameState.Rproteina3 === 1) {
    gameState.Rproteina3 = gameState.level > 0 ? "Salchicha" : meat();
  } else if (gameState.Rproteina3 === 2) {
    gameState.Rproteina3 = gameState.level > 2 ? "Pescado" : meat();
  } else if (gameState.Rproteina3 === 3) {
    gameState.Rproteina3 = gameState.level > 3 ? "Carne" : meat();
  } else if (gameState.Rproteina3 === 4) {
    gameState.Rproteina3 = gameState.level > 4 ? "Bacon" : meat();
  } else if (gameState.Rproteina3 === 5) {
    gameState.Rproteina3 = gameState.level > 6 ? "Salmon" : meat();
  } else if (gameState.Rproteina3 === 6) {
    gameState.Rproteina3 = gameState.level > 13 ? "Jamon Serrano" : meat();
  } else if (gameState.Rproteina3 === 7) {
    gameState.Rproteina3 = gameState.level > 15 ? "Pollo" : meat()
  } else {
    gameState.Rproteina3 = gameState.level > 16 ? "Frijoles" : meat()
  }
  return gameState.Rproteina3
}

function RtortillaS() {
  gameState.Rtortilla = Math.floor(Math.random() * 5);
  if (gameState.Rtortilla === 0) {
    gameState.Rtortilla = "Tortilla de Maiz"
  } else if (gameState.Rtortilla === 1) {
    gameState.Rtortilla = "Tortilla de Harina"
  } else {
    gameState.Rtortilla = gameState.level > 8 ? "Omelette" : tortillaS()
  }
  return gameState.Rtortilla
}

function Rsauce() {
  if (gameState.Rtortilla === "Crepa") {
    gameState.Rcondimento = Math.floor(Math.random() * 3)
    if (gameState.Rcondimento === 0) {
      gameState.Rcondimento = "Sin Salsa"
    } else if (gameState.Rcondimento === 1) {
      gameState.Rcondimento = gameState.level > 19 ? "Chocolate" : sauce()
    } else {
      gameState.Rcondimento = gameState.level > 19 ? "Mermalada" : sauce()
    }
  } else if (gameState.Rtortilla === "Pan pita") {
    gameState.Rcondimento = "Salsa Marinara"
  } else {
    gameState.Rcondimento = Math.floor(Math.random() * 6)
    if (gameState.Rcondimento === 0) {
      gameState.Rcondimento = gameState.level > 1 ? "Chile" : sauce()
    } else if (gameState.Rcondimento === 1) {
      gameState.Rcondimento = gameState.level > 7 ? "Ketchup" : sauce()
    } else if (gameState.Rcondimento === 2) {
      gameState.Rcondimento = gameState.level > 11 ? "Sal" : "Sin Salsa"
    } else if (gameState.Rcondimento === 3) {
      gameState.Rcondimento = gameState.level > 11 ? "Crema" : "Sin Salsa"
    } else if (gameState.Rcondimento === 4) {
      gameState.Rcondimento = gameState.level > 22 ? "Salsa Verde" : sauce()
    } else if (gameState.Rcondimento === 5) {
      gameState.Rcondimento = gameState.level > 22 ? "Salsa Roja" : "Sin Salsa"
    } else {
      gameState.Rcondimento = gameState.level > 28 ? "Mole" : sauce()
    }
  }
  return gameState.Rcondimento
}

function Rsauce2() {
  if (gameState.Rtortilla === "Crepa") {
    gameState.Rcondimento2 = Math.floor(Math.random() * 3)
    if (gameState.Rcondimento2 === 0) {
      gameState.Rcondimento2 = "Sin Salsa"
    } else if (gameState.Rcondimento2 === 1) {
      gameState.Rcondimento2 = gameState.level > 19 ? "Chocolate" : sauce()
    } else {
      gameState.Rcondimento2 = gameState.level > 19 ? "Mermalada" : sauce()
    }
  } else if (gameState.Rtortilla === "Pan pita") {
    gameState.Rcondimento2 = "Salsa Marinara"
  } else {
    gameState.Rcondimento2 = Math.floor(Math.random() * 6)
    if (gameState.Rcondimento2 === 0) {
      gameState.Rcondimento2 = gameState.level > 1 ? "Chile" : sauce()
    } else if (gameState.Rcondimento2 === 1) {
      gameState.Rcondimento2 = gameState.level > 7 ? "Ketchup" : sauce()
    } else if (gameState.Rcondimento2 === 2) {
      gameState.Rcondimento2 = gameState.level > 11 ? "Sal" : "Sin Salsa"
    } else if (gameState.Rcondimento2 === 3) {
      gameState.Rcondimento2 = gameState.level > 11 ? "Crema" : "Sin Salsa"
    } else if (gameState.Rcondimento2 === 4) {
      gameState.Rcondimento2 = gameState.level > 22 ? "Salsa Verde" : sauce()
    } else if (gameState.Rcondimento2 === 5) {
      gameState.Rcondimento2 = gameState.level > 22 ? "Salsa Roja" : "Sin Salsa"
    } else {
      gameState.Rcondimento2 = gameState.level > 28 ? "Mole" : sauce()
    }
  }
  return gameState.Rcondimento2
}

function Rverdura() {
  if (gameState.level < 10) {
    gameState.Rverdura = ""
  } else {
    gameState.Rverdura = Math.floor(Math.random() * 6)
    if (gameState.Rverdura === 0 ) {
      gameState.Rverdura = "Lechuga"
    } else if (gameState.Rverdura === 1) {
      gameState.Rverdura = "Espinaca"
    } else if (gameState.Rverdura === 2) {
      gameState.Rverdura = gameState.level >= 11 ? "Espinaca" : verdura()
    } else if (gameState.Rverdura === 3) {
      gameState.Rverdura = gameState.level >= 22 ? "Cebolla" : verdura()
    } else if (gameState.Rverdura === 4) {
      gameState.Rverdura = gameState.level >= 29 ? "Aguacate" : verdura()
    } else if (gameState.Rverdura === 5) {
      gameState.Rverdura = gameState.level >= 29 ? "Pimientos" : verdura()
    }
  }
  return gameState.Rverdura
}

function Rverdura2() {
  if (gameState.level < 10) {
    gameState.Rverdura2 = ""
  } else {
    gameState.Rverdura2 = Math.floor(Math.random() * 6)
    if (gameState.Rverdura2 === 0 ) {
      gameState.Rverdura2 = "Lechuga"
    } else if (gameState.Rverdura2 === 1) {
      gameState.Rverdura2 = "Espinaca"
    } else if (gameState.Rverdura2 === 2) {
      gameState.Rverdura2 = gameState.level >= 11 ? "Espinaca" : verdura()
    } else if (gameState.Rverdura2 === 3) {
      gameState.Rverdura2 = gameState.level >= 22 ? "Cebolla" : verdura()
    } else if (gameState.Rverdura2 === 4) {
      gameState.Rverdura2 = gameState.level >= 29 ? "Aguacate" : verdura()
    } else if (gameState.Rverdura2 === 5) {
      gameState.Rverdura2 = gameState.level >= 29 ? "Pimientos" : verdura()
    }
  }
  return gameState.Rverdura2
}

const Rrecipe = () => {
  let receta = ""
  typeTR()
  if (gameState.Rtortilla === "Salada") {
    receta += "\n" + RtortillaS() + "\n";
  if (gameState.level > 0) {
    gameState.Rqueso = Math.floor(Math.random() * 2);
    if (gameState.Rqueso === 0) {
      gameState.Rqueso = "Queso Americano";
    } else if (gameState.Rqueso === 1) {
      gameState.Rqueso = "Queso Blanco";
    }
  } else {
    gameState.Rqueso = "Queso Americano";
  }
  receta += gameState.Rqueso + "\n";
  receta += Rmeat() + "\n";
  if (gameState.level !== 0 && Math.floor(Math.random() * 2) === 0) {
    receta += Rmeat2() + "\n"
  }
  if (gameState.level > 2 && Math.floor(Math.random() * 3) === 0 ) {
    receta += Rmeat3() + "\n"
  }
  receta += Rsauce() + "\n"
  if (gameState.level > 7 && Math.floor(Math.random() * 2) === 0 && gameState.Rcondimento !== "Sin Salsa") {
    receta += Rsauce2() + "\n"
  }
  receta += Rverdura() + "\n"
  if (gameState.level > 11 && Math.floor(Math.random() * 3)) {
    receta += Rverdura2() + "\n"
  }
  }
  else if (gameState.Rtortilla === "Pizza") {
    gameState.Rtortilla = "Pan pita"
    gameState.Rqueso = "Queso Mozzarella"
    gameState.Rproteina = "Pepperoni"
    gameState.Rcondimento = "Salsa Marinara"
    receta += "\n" + gameState.Rtortilla + "\n" + gameState.Rcondimento + "\n" + gameState.Rqueso + "\n" + gameState.Rproteina
  }
  else if (gameState.Rtortilla === "Dulce") {
    gameState.Rtortilla = "Crepa"
    gameState.Rcondimento = Math.floor(Math.random() * 2) === 0 ? "Chocolate" : "Mermelada roja"
    gameState.Rverdura = gameState.level >= 21 ? "Platano" : "Fresa"
    receta += "\n" + gameState.Rtortilla + "\n" + gameState.Rcondimento + "\n" + gameState.Rverdura
  }
  return receta;
};

class Juego extends Phaser.Scene {
  constructor() {
    super({ key: "juego" });
  }
  preload() {
    this.load.image("anterior", "./assets/botones/anterior.png");
    this.load.image("siguiente", "./assets/botones/siguiente.png");
    this.load.image("fold", "./assets/botones/fold.png");
    this.load.image("flip", "./assets/botones/flip.png");
    this.load.image("roll", "./assets/botones/roll.png");
    this.load.image("melt", "./assets/botones/melt.png");
    this.load.image("selec", "./assets/botones/mesa.png");
    this.load.image("fryer", "./assets/botones/fryer.png");
    this.load.image("send", "./assets/botones/finalizarR.png");
    this.load.image("sendL", "./assets/botones/finalizaL.png")
    this.load.image("selec2", "./assets/botones/seleccion2.png");
    this.load.image("change", "./assets/botones/cambiar.png")
    this.load.image("save", "./assets/botones/guardar.png")
    //Comidas
    this.load.image("queso", "./assets/queso.png");
    this.load.image("harina", "./assets/harina.png");
    this.load.image("maiz", "./assets/maiz.png");
    this.load.image("jamon", "./assets/jamon.png");
    this.load.image("salchicha", "./assets/salchicha.png");
    this.load.image("chile", "./assets/chile.png");
    this.load.image("pescado", "./assets/pescado.png");
    this.load.image("carne", "./assets/carne.png");
    this.load.image("bacon", "./assets/bacon.png");
    this.load.image("quesobl", "./assets/quesobl.png");
    this.load.image("salmon", "./assets/salmon.png");
    this.load.image("ketchup", "./assets/ketchup.png");
    //Comidas 2
    this.load.image("omelette", "./assets/omelette.png");
    this.load.image("lechuga", "./assets/lechuga.png");
    this.load.image("espinaca", "./assets/espinaca.png");
    this.load.image("champiñon", "./assets/champinon.png");
    this.load.image("sal", "./assets/sal.png");
    this.load.image("crema", "./assets/crema.png");
    this.load.image("quesoox", "./assets/quesoox.png");
    this.load.image("jamonser", "./assets/jamonser.png");
    this.load.image("gruesa", "./assets/pizza.png");
    this.load.image("marinara", "./assets/tomate.png");
    this.load.image("pepperoni", "./assets/pepperoni.png");
    //Comidas 3
    this.load.image("pollo", "./assets/pollo.png");
    this.load.image("frijoles", "./assets/frijoles.png");
    this.load.image("crepa", "./assets/crepa.png");
    this.load.image("mermelada", "./assets/mermeladar.png");
    this.load.image("chocolate", "./assets/chocolate.png");
    this.load.image("platano", "./assets/platano.png");
    this.load.image("salsar", "./assets/salsaroja.png");
    this.load.image("salsav", "./assets/salsaverde.png");
    this.load.image("cebolla", "./assets/cebolla.png");
    this.load.image("fresa", "./assets/fresa.png");
    this.load.image("chipotle","./assets/chipotlebot.png")
    this.load.image("mole", "./assets/mole.png")
    this.load.image("atun", "./assets/atun.png")
    //Comidas 4
    this.load.image("jamonbell", "./assets/jamonbell.png")
    this.load.image("camaron", "./assets/camaron.png")
    this.load.image("aguacate", "./assets/aguacate.png") 
    this.load.image("pimientos", "./assets/pimiento.png")
    this.load.image("wagyu", "./assets/wagyu.png")
    this.load.image("manchego", "./assets/manchego.png")
    //Tortillas
    //Tortillas de maiz
    this.load.image("tortilla", "./assets/tortillas/tortillademaiz.png");
    this.load.image("tortilla_b1", "./assets/tortillas/tortillab1.png");
    this.load.image("tortilla_b2", "./assets/tortillas/tortilla b2.png");
    this.load.image("tortilla_b3", "./assets/tortillas/tortillab3.png");
    //Tortillas de harina
    this.load.image("tortillah", "./assets/tortillas/tortilladeharina.png");
    this.load.image("tortillah_b1", "./assets/tortillas/tortillah_b1.png");
    this.load.image("tortillah_b2", "./assets/tortillas/tortillah_b2.png")
    this.load.image("tortillah_b3", "./assets/tortillas/tortillah_b3.png")
    //Omelettes
    this.load.image("Iomelette", "./assets/tortillas/omelet.png");
    this.load.image("omelette_b1", "./assets/tortillas/omelette_b1.png")
    this.load.image("omelette_b2", "./assets/tortillas/Omelette_b2.png")
    this.load.image("omelette_b3", "./assets/tortillas/Omelette_b3.png")
    //Crepas
    this.load.image("Icrepa", "./assets/tortillas/crepa.png");
    this.load.image("crepa_b1", "./assets/tortillas/crepa_b1.png")
    this.load.image("crepa_b2", "./assets/tortillas/crepa_b2.png")
    this.load.image("crepa_b3", "./assets/tortillas/crepa_b3.png")
    //Pan pita
    this.load.image("Ipampita", "./assets/tortillas/pampita.png");
    this.load.image("pampita_b1", "./assets/tortillas/panpita_b1.png")
    this.load.image("pampita_b2", "./assets/tortillas/panpita_b2.png")
    this.load.image("pampita_b3", "./assets/tortillas/panpita_b3.png")
    //Tortillas dobladas de maiz
    this.load.image("Ftortilla", "./assets/tortillas/tortillaflip.png")
    this.load.image("Ftortilla_b1", "./assets/tortillas/tortilla_b1flip.png")
    this.load.image("Ftortilla_b2", "./assets/tortillas/tortilla_b2fold.png")
    this.load.image("Ftortilla_b3", "./assets/tortillas/tortilla_b3fold.png")
    //Tortillas dobladas de harina
    this.load.image("Ftortillah", "./assets/tortillas/Ftortillah.png")
    this.load.image("Ftortillah_b1", "./assets/tortillas/Ftortillah_b1.png")
    this.load.image("Ftortillah_b2", "./assets/tortillas/Ftortillah_b2.png")
    this.load.image("Ftortillah_b3", "./assets/tortillas/Ftortillah_b3.png")
    //Tortillas dobladas de omelette
    this.load.image("Fomelette", "./assets/tortillas/Fomelette.png")
    this.load.image("Fomelette_b1", "./assets/tortillas/Fomelette_b1.png")
    this.load.image("Fomelette_b2", "./assets/tortillas/Fomelette_b2.png")
    this.load.image("Fomelette_b3", "./assets/tortillas/Fomelette_b3.png")
    //Crepas dobladas
    this.load.image("Fcrepa", "./assets/tortillas/Fcrepa.png")
    this.load.image("Fcrepa_b1", "./assets/tortillas/Fcrepa_b1.png")
    this.load.image("Fcrepa_b2", "./assets/tortillas/Fcrepa_b2.png")
    this.load.image("Fcrepa_b3", "./assets.tortillas/Fcrepa_b3.png")
    //Ingredientes
    this.load.image("Ijamon", "./assets/ingredientes/jamon.png");
    this.load.image("Iquesoam", "./assets/ingredientes/quesoam.png");
    this.load.image("Isalchicha", "./assets/ingredientes/salchicha.png");
    this.load.image("Ichile", "./assets/ingredientes/chile.png");
    this.load.image("Ilechuga", "./assets/ingredientes/lechuga.png");
    this.load.image("Ipes", "./assets/ingredientes/pescao.png");
    this.load.image("Ichamp", "./assets/ingredientes/champiñon.png")
    this.load.image("Iket", "./assets/ingredientes/kchu.png")
    this.load.image("Iquebl", "./assets/ingredientes/chesu.png")
    this.load.image("Icarne", "./assets/ingredientes/calnesita cosinada.png")
    this.load.image("Isalmon", "./assets/ingredientes/sal mon.png")
    this.load.image("Ibacon", "./assets/ingredientes/tochino.png")
    this.load.image("espinacas", "./assets/ingredientes/espinacas uwu.png")
    this.load.image("Icebolla", "./assets/ingredientes/cebolla.png")
    this.load.image("Ifrijoles", "./assets/ingredientes/frijoles.png")
    this.load.image("Ijamonser", "./assets/ingredientes/jamonser.png")
    this.load.image("Ipollo", "./assets/ingredientes/pollostrips.png")
    this.load.image("Isal", "./assets/ingredientes/sal.png")
    this.load.image("Icrema", "./assets/ingredientes/crema.png")
    this.load.image("Iquesoox", "./assets/ingredientes/quesoox.png")
    this.load.image("Ismarinara", "./assets/ingredientes/salsamarinara.png")
    this.load.image("Ifresas", "./assets/ingredientes/fresas.png")
    this.load.image("Ipepperoni", "./assets/ingredientes/pepperoni.png")
    this.load.image("Iquesomoz", "./assets/ingredientes/quesomoz.png")
    this.load.image("Isalsaro", "./assets/ingredientes/salsa-roja.png")
    this.load.image("Isalsave", "./assets/ingredientes/salsa-verde.png")
    this.load.image("Imole", "./assets/ingredientes/mole.png")
    this.load.image("Imermelada", "./assets/ingredientes/mermelada.png")
    this.load.image("Ichocolate", "./assets/ingredientes/chocolate.png")
    this.load.image("Ichipotle", "./assets/ingredientes/chipotle.png")
    this.load.image("Iatun", "./assets/ingredientes/atun.png")
    this.load.image("Iaguacate","./assets/ingredientes/aguacate.png")
    this.load.image("Iwagyu", "./assets/ingredientes/wagyu.png")
    this.load.image("Ijamonbell", "./assets/ingredientes/jamonbellots.png")
    this.load.image("Imanchego", "./assets/ingredientes/quesoma.png")
    this.load.image("Icamaron", "./assets/ingredientes/camaron.png")
    this.load.image("Ipimiento", "./assets/ingredientes/pimientos2.png")
    this.load.image("Iplatano", "./assets/ingredientes/platano.png")
    //Quesos derretidos
    this.load.image("Dquesoam", "./assets/ingredientes/quesoamderr.png")
    this.load.image("Dquesobl", "./assets/ingredientes/quesoblderr.png")
    this.load.image("Dquesoox", "./assets/ingredientes/quesooxderr.png")
    this.load.image("Dquesomoz", "./assets/ingredientes/quesopi.png")
    //Otros
    this.load.image("melter", "./assets/botones/melter.png");
    this.load.image("bg", "./assets/botones/fondo.png");
    this.load.image("bggold", "./assets/botones/fondodorado.png")
    this.load.audio("bgmusic", "./assets/bgmusic.wav")
    this.load.image("soundA", "./assets/botones/soud.png")
    this.load.image("soundD", "./assets/botones/soud 2.png")
    this.load.image("cursor", "assets/botones/pinss.png")
  }

  create() {
    if (localStorage.getItem("localscore") === null) {
      localStorage.setItem("localscore", gameState.score)
    } else {
      gameState.score = parseInt(localStorage.getItem("localscore"))
      leveling()
      gameState.recetaL = recipe()
      gameState.recetaR = Rrecipe()
    }
    gameState.save = this.add.sprite(1257, 700, "save").setDepth(10).setScale(0.8)
    gameState.save.setInteractive()
    gameState.recetaL = recipe()
    gameState.recetaR = Rrecipe()
    gameState.fondo = this.add.image(0, 0, "bg").setOrigin(0, 0);
    gameState.label = this.add.text(1235, 705, "Sin Objeto Seleccionado", {
      color: "#000000",
      font: "20px CustomFont",
    });
    gameState.label.setOrigin(1, 0.5);
    gameState.previous = this.add.rectangle(80, 43, 140, 65, 0xff2b2b);
    gameState.following = this.add.rectangle(80, 120, 140, 65, 0xff2b2b);
    gameState.meltL = this.add
      .sprite(340, 260, "melter")
      .setOrigin(0, 0)
      .setDepth(-2);
    gameState.meltR = this.add
      .sprite(810, 260, "melter")
      .setOrigin(0, 0)
      .setDepth(-2);
    gameState.switch = this.add.sprite(1255, 25, "soundA")
    let bgmus = this.sound.add("bgmusic", {loop: true})
    gameState.switch.setInteractive()
    gameState.switch.on("pointerdown", function(){
      if (gameState.music) {
        gameState.switch.setTexture("soundD")
        gameState.music = false
        bgmus.stop()
      } else if (!gameState.music) {
        gameState.switch.setTexture("soundA")
        bgmus.play()
        gameState.music = true
      }
    })
    this.add.sprite(80, 43, "anterior");
    this.add.sprite(80, 120, "siguiente");
    gameState.actions = this.add.rectangle(230, 110, 140, 200, 0xff2b2b);
    gameState.foldbut = this.add.sprite(230, 85, "fold");
    gameState.flipbut = this.add.sprite(230, 35, "flip");
    gameState.rollbut = this.add.sprite(230, 135, "roll");
    gameState.meltbut = this.add.sprite(230, 185, "melt");
    gameState.foldbut.setInteractive();
    gameState.flipbut.setInteractive();
    gameState.rollbut.setInteractive();
    gameState.meltbut.setInteractive();
    //gameState.selec = this.add.rectangle(785, 110, 900, 200, 0xaaff)
    gameState.table = this.add.sprite(785, 110, "selec");
    gameState.table.setInteractive();
    gameState.paged = this.add.text(370, 30, gameState.page, {
      font: "30px BoldFont",
      fillColor: 0xffffff,
    });
    gameState.paged.setDepth(1);
    gameState.fryer = this.add.rectangle(785, 465, 900, 450, 0x5c5c5c);

    gameState.indicator = this.add
      .rectangle(785, 465, 10, 400, 0xffffff)
      .setDepth(1);
    leftslot = this.add.rectangle(355, 260, 400, 400, 0xffffff, 0.7);
    leftslot.setOrigin(0, 0);
    leftslot.setDepth(2);
    leftslot.blendMode = Phaser.BlendModes.SCREEN;
    rightslot = this.add.rectangle(810, 260, 400, 400, 0xffffff, 0.7);
    rightslot.setOrigin(0, 0);
    rightslot.setDepth(2);
    rightslot.blendMode = Phaser.BlendModes.SCREEN;

    gameState.meltbut.setInteractive();
    gameState.meltbut.on("pointerdown", function () {
      if (gameState.derritiendo) {
        gameState.meltL.setDepth(-2);
        gameState.meltR.setDepth(-2);
        gameState.derritiendo = false;
        console.log("dsad");
        console.log(gameState.derritiendo);
      } else {
        gameState.meltL.setDepth(12);
        gameState.meltR.setDepth(12);
        gameState.derritiendo = true;
      }
    });
    gameState.tips = this.add.text(850, 705, "Bienvenido a la Cocina", {
      color: "#000000",
      font: " 20px CustomFont",
    });
    gameState.tips.setOrigin(1, 0.5);
    this.add.sprite(785, 465, "fryer");
    //gameState.send = this.add.rectangle(160, 680, 300, 50, 0xaaff);
    
    //gameState.selec2 = this.add.rectangle(265, 430, 75, 400, 0xaaff);
    gameState.selec2 = this.add.sprite(265, 430, "selec2").setDepth(0);
    gameState.selec2.setInteractive()
    gameState.selec2.on("pointerover", function(){
      gameState.tips.setText("Indicadores de Cocimiento: Superior izquierda, Inferior derecha")
    })
    gameState.selec2.on("pointerout", function(){
      gameState.tips.setText("Bienvenido a la Cocina")
    })
    gameState.ticket = this.add.rectangle(112, 430, 200, 400, 0xffffff);
    gameState.ticket.setInteractive()
    gameState.ticket.on("pointerover", function(){
      gameState.tips.setText("Aquí se muestra tu nivel, puntuación y pedido")
    })
    gameState.ticket.on("pointerout", function(){
      gameState.tips.setText("Bienvenido a la Cocina")
    })
    gameState.content = this.add.text(
      gameState.ticket.x - gameState.ticket.width / 2 + 10,
      gameState.ticket.y - gameState.ticket.height / 2 + 10,
      gameState.tutorial[0],
      { fillColor: "#ffffff", font: "20px CustomFont" }
    );
    gameState.content.setStyle({ color: "#000000", font: "20px CustomFont" });
    gameState.content.setInteractive();
    gameState.previous.setInteractive();
    gameState.following.setInteractive();

    for (let i = 0; i < gameState.page1.length; i++) {
      this.add.rectangle(400 + 150 * i, 70, 60, 60, 0xaca3ff, 0.7);
    }
    for (let i = 0; i < gameState.page1.length; i++) {
      this.add.rectangle(400 + 150 * i, 140, 60, 60, 0xaca3ff, 0.7);
    }

    gameState.content.on("pointerdown", itemtutorial);
    function itemtutorial() {
      if (gameState.level === 0) {  
      gameState.content.setText(gameState.tutorial[gameState.index])
      if (gameState.index === 13) {
        gameState.content.off("pointerdown", itemtutorial)
        gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
        gameState.cambiar = game.add.sprite(180, 600, "change")
        gameState.cambiar.setInteractive()
        gameState.cambiar.on("pointerdown", function(){
          gameState.inleft = !gameState.inleft
          if (gameState.inleft) {
            gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
          } else {
            gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Derecha-----` + gameState.recetaR)
          }
          console.log("holiholi")
        })
      }
      gameState.index += 1
      } else {
        gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
        gameState.cambiar = game.add.sprite(180, 600, "change")
        gameState.cambiar.setInteractive()
        gameState.cambiar.on("pointerdown", function(){
          gameState.inleft = !gameState.inleft
          if (gameState.inleft) {
            gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
          } else {
            gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Derecha-----` + gameState.recetaR)
          }
          console.log("holiholi")
        })
      }
       
    }
    //Indicadores de cocción
    gameState.marcoL = this.add.graphics()
    gameState.marcoL.lineStyle(4, 0xffffff, 1);
    gameState.marcoL.strokeRect(245, 260, 40, 150);
    gameState.marcoL.setDepth(2)
    gameState.indilL = this.add.rectangle(265.5, 360, 60, 5, 0x42f554).setDepth(3)
    gameState.indibL = this.add.rectangle(265.5, 325, 60, 5, 0xeef52a).setDepth(3)
    gameState.indiqL = this.add.rectangle(265.5, 290, 60, 5, 0xff1f1f).setDepth(3)
    gameState.burnessLL = this.add.rectangle(245, 408, 19, 0, 0x7733ff).setDepth(1).setOrigin(0,1)
    gameState.burnessLR = this.add.rectangle(264, 408, 19, 0, 0xde34eb).setDepth(1).setOrigin(0,1)

    gameState.marcoR = this.add.graphics()
    gameState.marcoR.lineStyle(4, 0xffffff, 1);
    gameState.marcoR.strokeRect(245, 450, 40, 150);
    gameState.marcoR.setDepth(2)
    gameState.indilL = this.add.rectangle(265.5, 550, 60, 5, 0x42f554).setDepth(3)
    gameState.indibL = this.add.rectangle(265.5, 515, 60, 5, 0xeef52a).setDepth(3)
    gameState.indiqL = this.add.rectangle(265.5, 480, 60, 5, 0xff1f1f).setDepth(3)
    gameState.burnessRL = this.add.rectangle(245, 598, 19, 0, 0x7733ff).setDepth(1).setOrigin(0,1)
    gameState.burnessRR = this.add.rectangle(264, 598, 19, 0, 0xde34eb).setDepth(1).setOrigin(0,1)
    //Sprites
    gameState.harina = this.add.sprite(400, 70, "harina");
    gameState.maiz = this.add.sprite(550, 70, "maiz");
    gameState.quesoa = this.add.sprite(700, 70, "queso");
    gameState.jamon = this.add.sprite(850, 70, "jamon");
    gameState.salchicha = this.add.sprite(1000, 70, "salchicha");
    gameState.chile = this.add.sprite(1150, 70, "chile");
    gameState.pescado = this.add.sprite(400, 140, "pescado");
    gameState.carne = this.add.sprite(550, 140, "carne");
    gameState.bacon = this.add.sprite(700, 140, "bacon");
    gameState.quesobl = this.add.sprite(850, 140, "quesobl");
    gameState.salmon = this.add.sprite(1000, 140, "salmon");
    gameState.ketchup = this.add.sprite(1150, 140, "ketchup");
    gameState.omelette = this.add.sprite(400, 70, "omelette");
    gameState.espinaca = this.add.sprite(550, 70, "espinaca");
    gameState.lechuga = this.add.sprite(700, 70, "lechuga");
    gameState.champinon = this.add.sprite(850, 70, "champiñon");
    gameState.sal = this.add.sprite(1000, 70, "sal");
    gameState.crema = this.add.sprite(1150, 70, "crema");
    gameState.quesoox = this.add.sprite(400, 140, "quesoox");
    gameState.jamonser = this.add.sprite(550, 140, "jamonser");
    gameState.panpita = this.add.sprite(700, 140, "gruesa");
    gameState.marinara = this.add.sprite(850, 140, "marinara");
    gameState.pepperoni = this.add.sprite(1000, 140, "pepperoni");
    //dsdasdas
    gameState.pollo = this.add.sprite(1150, 140, "pollo");
    gameState.frijoles = this.add.sprite(400, 70, "frijoles");
    gameState.crepa = this.add.sprite(550, 70, "crepa");
    gameState.fresa = this.add.sprite(700, 70, "fresa");
    gameState.choco = this.add.sprite(850, 70, "chocolate");
    gameState.mermelada = this.add.sprite(1000, 70, "mermelada");
    gameState.platano = this.add.sprite(1150, 70, "platano");
    gameState.cebolla = this.add.sprite(400, 140, "cebolla");
    gameState.salsar = this.add.sprite(550, 140, "salsar");
    gameState.salsav = this.add.sprite(700, 140, "salsav");
    gameState.chipotle = this.add.sprite(850,140,"chipotle")
    gameState.mole = this.add.sprite(1000, 140, "mole")
    gameState.atun = this.add.sprite(1150, 140, "atun")
    //Sprites p4
    gameState.jamonbell = this.add.sprite(400, 70, "jamonbell")
    gameState.quesoman = this.add.sprite(550, 70, "manchego")
    gameState.camaron = this.add.sprite(700, 70, "camaron")
    gameState.aguacate = this.add.sprite(850, 70, "aguacate").setScale(1.8)
    gameState.pimiento = this.add.sprite(1000, 70, "pimientos").setScale(1.8)
    gameState.wagyu = this.add.sprite(1150, 70, "wagyu")

    //Ocultarlos
    leftslot.setDepth(-1);
    rightslot.setDepth(-1);

    gameState.harina.setDepth(-1);
    gameState.maiz.setDepth(-1);
    gameState.quesoa.setDepth(-1);
    gameState.jamon.setDepth(-1);
    gameState.salchicha.setDepth(-1);
    gameState.chile.setDepth(-1);
    gameState.pescado.setDepth(-1);
    gameState.carne.setDepth(-1);
    gameState.bacon.setDepth(-1);
    gameState.quesobl.setDepth(-1);
    gameState.salmon.setDepth(-1);
    gameState.ketchup.setDepth(-1);
    gameState.omelette.setDepth(-1);
    gameState.espinaca.setDepth(-1);
    gameState.lechuga.setDepth(-1);
    gameState.champinon.setDepth(-1);
    gameState.sal.setDepth(-1);
    gameState.crema.setDepth(-1);
    gameState.quesoox.setDepth(-1);
    gameState.panpita.setDepth(-1);
    gameState.marinara.setDepth(-1);
    gameState.pepperoni.setDepth(-1);
    gameState.jamonser.setDepth(-1);
    gameState.pollo.setDepth(-1);
    gameState.frijoles.setDepth(-1);
    gameState.crepa.setDepth(-1);
    gameState.mermelada.setDepth(-1);
    gameState.platano.setDepth(-1);
    gameState.salsar.setDepth(-1);
    gameState.salsav.setDepth(-1);
    gameState.choco.setDepth(-1);
    gameState.cebolla.setDepth(-1);
    gameState.fresa.setDepth(-1);
    gameState.chipotle.setDepth(-1)
    gameState.mole.setDepth(-1)
    gameState.atun.setDepth(-1)
    gameState.jamonbell.setDepth(-1)
    gameState.camaron.setDepth(-1)
    gameState.aguacate.setDepth(-1)
    gameState.pimiento.setDepth(-1)
    gameState.wagyu.setDepth(-1)
    gameState.quesoman.setDepth(-1)
    //Etiquetas
    gameState.harina.setInteractive();
    gameState.maiz.setInteractive();
    gameState.quesoa.setInteractive();
    gameState.jamon.setInteractive();
    gameState.salchicha.setInteractive();
    gameState.chile.setInteractive();
    gameState.pescado.setInteractive();
    gameState.carne.setInteractive();
    gameState.bacon.setInteractive();
    gameState.quesobl.setInteractive();
    gameState.salmon.setInteractive();
    gameState.ketchup.setInteractive();
    gameState.omelette.setInteractive();
    gameState.espinaca.setInteractive();
    gameState.lechuga.setInteractive();
    gameState.champinon.setInteractive();
    gameState.sal.setInteractive();
    gameState.crema.setInteractive();
    gameState.quesoox.setInteractive();
    gameState.panpita.setInteractive();
    gameState.marinara.setInteractive();
    gameState.pepperoni.setInteractive();
    gameState.jamonser.setInteractive();
    gameState.fryer.setInteractive();
    gameState.crepa.setInteractive()
    gameState.pollo.setInteractive();
    gameState.frijoles.setInteractive()
    gameState.fresa.setInteractive()
    gameState.choco.setInteractive()
    gameState.mermelada.setInteractive()
    gameState.platano.setInteractive()
    gameState.cebolla.setInteractive()
    gameState.salsar.setInteractive()
    gameState.salsav.setInteractive()
    gameState.chipotle.setInteractive()
    gameState.mole.setInteractive()
    gameState.atun.setInteractive()
    gameState.jamonbell.setInteractive()
    gameState.camaron.setInteractive()
    gameState.aguacate.setInteractive()
    gameState.pimiento.setInteractive()
    gameState.wagyu.setInteractive()
    gameState.quesoman.setInteractive()
    //this.add.sprite(355, 260, "tortilla")
    //Colocar tortillas
    let game = this;
    gameState.maiz.on("pointerdown", function () {
      gameState.tips.setText("Selecciona un espacio para colocar una tortilla");
      if (!leftslotisO) {
        leftslot.setDepth(10);
      }
      if (!rightslotisO) {
        rightslot.setDepth(10);
      }

      // Add event listeners to both slots
      leftslot.setInteractive();
      leftslot.on("pointerdown", placeTortillaOnLeftSlot);

      rightslot.setInteractive();
      rightslot.on("pointerdown", placeTortillaOnRightSlot);
    });

    function placeTortillaOnLeftSlot() {
      if (!leftslotisO) {
        gameState.TSlotL = game.add.sprite(355, 260, "tortilla").setOrigin(0, 0);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL = new Quesadilla();
        gameState.quesadillaL.tortilla = "Tortilla de Maiz";
        leftslotisO = true;
        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeTortillaOnLeftSlot);
        rightslot.off("pointerdown", placeTortillaOnRightSlot);
        gameState.quesadillaL.burnessA = 0
        gameState.burnLT = game.time.addEvent({
          callback: burnL,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeTortillaOnRightSlot() {
      if (!rightslotisO) {
        gameState.TSlotR = game.add.sprite(810, 260, "tortilla").setOrigin(0, 0);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR = new Quesadilla();
        gameState.quesadillaR.tortilla = "Tortilla de Maiz";
        rightslotisO = true;
        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeTortillaOnLeftSlot);
        rightslot.off("pointerdown", placeTortillaOnRightSlot);
        gameState.quesadillaR.burnessA = 0
        gameState.burnRT = game.time.addEvent({
          callback: burnR,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar jamon
    gameState.jamon.on("pointerdown", function () {
      gameState.tips.setText("Selecciona una tortilla para ponerle jamon");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeHamL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeHamR)
      }
      })

    function placeHamL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ijamon").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Jamon";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ijamon").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Jamon";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ijamon").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Jamon";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeHamL);
        rightslot.off("pointerdown", placeHamR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeHamR() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
}
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Ijamon").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Jamon";
        } else if (typeof gameState.PSlot2R === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Ijamon").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Jamon";
        } else if (typeof gameState.PSlot3R === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Ijamon").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Jamon";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeHamL);
        rightslot.off("pointerdown", placeHamR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar queso
    gameState.quesoa.on("pointerdown", function () {
      gameState.tips.setText("Selecciona una tortilla para ponerle queso");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeCheeseL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeCheeseR)
      }
      
    });
    function placeCheeseL() {
      if (typeof gameState.QSlotL !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita" && leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(370, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Mozzarella";
        gameState.quesadillaL.isempty = false
        gameState.quesadillaL.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCheeseL);
        rightslot.off("pointerdown", placeCheeseR);
      }
      if (gameState.tortilla !== "Pan pita" && leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(440, 290, "Iquesoam").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Americano";
        gameState.quesadillaL.isempty = false
        gameState.quesadillaL.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCheeseL);
        rightslot.off("pointerdown", placeCheeseR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeCheeseR() {
      if (typeof gameState.QSlotR !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita" && rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(830, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Mozzarella";
        gameState.quesadillaR.isempty = false
        gameState.quesadillaR.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCheeseL);
        rightslot.off("pointerdown", placeCheeseR);
      }
      if (rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(855, 290, "Iquesoam").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Americano";
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCheeseL);
        rightslot.off("pointerdown", placeCheeseR);
        gameState.quesadillaR.isempty = false
        gameState.quesadillaR.hasCheese = true
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    //Colocar salchicha
    gameState.salchicha.on("pointerdown", function () {
      gameState.tips.setText("Selecciona una tortilla para ponerle salchicha");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeSauL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeSauR)
      }
    });
    function placeSauL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
      }  
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
          if (typeof gameState.PSlotL === "undefined") {
            gameState.PSlotL = game.add.sprite(440, 290, "Isalchicha").setOrigin(0, 0).setDepth(1);
            gameState.quesadillaL.carne = "Salchicha";
          } else if (typeof gameState.PSlot2L === "undefined") {
            gameState.PSlot2L = game.add.sprite(440, 290, "Isalchicha").setOrigin(0, 0).setDepth(2);
            gameState.quesadillaL.carne2 = "Salchicha";
          } else if (typeof gameState.PSlot3L === "undefined") {
            gameState.PSlot3L = game.add.sprite(440, 290, "Isalchicha").setOrigin(0, 0).setDepth(3);
            gameState.quesadillaL.carne3 = "Salchicha";
          }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSauL);
        rightslot.off("pointerdown", placeSauR);
        }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeSauR() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Isalchicha").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Salchicha";
        } else if (typeof gameState.PSlot2R === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Isalchicha").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Salchicha";
        } else if (typeof gameState.PSlot3R === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Isalchicha").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Salchicha";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSauL);
        rightslot.off("pointerdown", placeSauR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar chilito
    gameState.chile.on("pointerdown", function () {
      gameState.tips.setText("Selecciona una tortilla para ponerle chile");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeChiliL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeChiliR)
      }
    });
    function placeChiliL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de condimentos");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
}
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Ichile").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento = "Chile";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Ichile").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento2 = "Chile";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeChiliL);
        rightslot.off("pointerdown", placeChiliR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeChiliR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de condimentos");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
}
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Ichile").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento = "Chile";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(895, 290, "Ichile").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento2 = "Chile";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeChiliL);
        rightslot.off("pointerdown", placeChiliR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar lechuga
    gameState.lechuga.on("pointerdown", function () {
      gameState.tips.setText("Selecciona una tortilla para ponerle lechuga");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeLetL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeLetR)
      }
    });

    function placeLetL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState. VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Ilechuga").setOrigin(0,0).setDepth(3)
          gameState.quesadillaL.verdura = "Lechuga";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Ilechuga").setOrigin(0,0).setDepth(3)
          gameState.quesadillaL.verdura2 = "Lechuga";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeLetL);
        rightslot.off("pointerdown", placeLetR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeLetR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState.VSlotR === "undefined") {
          gameState.VSlotR = game.add.sprite(895, 290, "Ilechuga").setOrigin(0,0).setDepth(3)
          gameState.quesadillaR.verdura = "Lechuga";
        }
        else if (typeof gameState.VSlot2R === "undefined") {
          gameState.VSlot2R = game.add.sprite(895, 290, "Ilechuga").setOrigin(0,0).setDepth(3)
          gameState.quesadillaR.verdura2 = "Lechuga";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeLetL);
        rightslot.off("pointerdown", placeLetR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar pescao
    gameState.pescado.on("pointerdown", function () {
      gameState.tips.setText("Selecciona una tortilla para ponerle pescado");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placePesL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placePesR)
      }
    });
    function placePesL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
}
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ipes").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Pescado";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ipes").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Pescado";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ipes").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Pescado";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePesL);
        rightslot.off("pointerdown", placePesR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placePesR() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
}
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Ipes").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Pescado";
        } else if (typeof gameState.PSlot2R === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Ipes").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Pescado";
        } else if (typeof gameState.PSlot3R === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Ipes").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Pescado";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePesL);
        rightslot.off("pointerdown", placePesR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar omelette
    gameState.omelette.on("pointerdown", function () {
      gameState.tips.setText("Selecciona un espacio para colocar un omelette");
      if (!leftslotisO) {
        leftslot.setDepth(10);
      }
      if (!rightslotisO) {
        rightslot.setDepth(10);
      }
      leftslot.setInteractive();
      leftslot.on("pointerdown", placeOmL)
      rightslot.setInteractive();
      rightslot.on("pointerdown", placeOmR)
    });

    function placeOmL() {
      if (!leftslotisO) {
        gameState.TSlotL = game.add.sprite(355, 260, "Iomelette").setOrigin(0, 0);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL = new Quesadilla();
        gameState.quesadillaL.tortilla = "Omelette";
        leftslotisO = true;

        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeOmL);
        rightslot.off("pointerdown", placeOmR);
        gameState.burnLT = game.time.addEvent({
          callback: burnOL,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeOmR() {
      if (!rightslotisO) {
        gameState.TSlotR = game.add.sprite(810, 260, "Iomelette").setOrigin(0, 0);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR = new Quesadilla();
        gameState.quesadillaR.tortilla = "Omelette";
        rightslotisO = true;

        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeOmL);
        rightslot.off("pointerdown", placeOmR);
        gameState.burnRT = game.time.addEvent({
          callback: burnOR,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    //Colocar tortilla de harina
    gameState.harina.on("pointerdown", function () {
      gameState.tips.setText(
        "Selecciona un espacio para colocar una tortilla de harina"
      );
      if (!leftslotisO) {
        leftslot.setDepth(10);
      }
      if (!rightslotisO) {
        rightslot.setDepth(10);
      }
      leftslot.setInteractive();
      leftslot.on("pointerdown", placeTHL)
      rightslot.setInteractive();
      rightslot.on("pointerdown", placeTHR)
    });

    function placeTHL() {
      if (!leftslotisO) {
        gameState.TSlotL = game.add.sprite(355, 260, "tortillah").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL = new Quesadilla();
        gameState.quesadillaL.tortilla = "Tortilla de Harina";
        leftslotisO = true;

        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeTHL);
        rightslot.off("pointerdown", placeTHR);
        gameState.quesadillaL.burnessA = 0
        gameState.burnLT = game.time.addEvent({
          callback: burnML,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    } 

    function placeTHR() {
      if (!rightslotisO) {
        gameState.TSlotR = game.add.sprite(810, 260, "tortillah").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR = new Quesadilla();
        gameState.quesadillaR.tortilla = "Tortilla de Harina";
        rightslotisO = true;

        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeTHL);
        rightslot.off("pointerdown", placeTHR);
        gameState.quesadillaR.burnessA = 0
        gameState.burnRT = game.time.addEvent({
          callback: burnMR,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Pizzas
    //Colocar pampitas
    gameState.panpita.on("pointerdown", function(){
      gameState.tips.setText("Selecciona un espacio para colocar una tortilla gruesa");
      if (!leftslotisO) {
        leftslot.setDepth(10);
      }
      if (!rightslotisO) {
        rightslot.setDepth(10);
      }
      leftslot.setInteractive();
      leftslot.on("pointerdown", placePaL)
      rightslot.setInteractive();
      rightslot.on("pointerdown", placePaR)
    })

    function placePaL() {
      if (!leftslotisO) {
        gameState.TSlotL = game.add.sprite(355, 260, "Ipampita").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL = new Quesadilla();
        gameState.quesadillaL.tortilla = "Pan pita";
        leftslotisO = true;
        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePaL);
        rightslot.off("pointerdown", placePaR);
        gameState.quesadillaL.burnessA = 0
        gameState.burnLT =game.time.addEvent({
          callback: burnPL,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    
    function placePaR() {
      if (!rightslotisO) {
        gameState.TSlotR = game.add.sprite(810, 260, "Ipampita").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR = new Quesadilla();
        gameState.quesadillaR.tortilla = "Pan pita";
        rightslotisO = true;
        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePaL);
        rightslot.off("pointerdown", placePaR);
        gameState.quesadillaR.burnessA = 0
        gameState.burnRT = game.time.addEvent({
          callback: burnPR,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
      gameState.pepperoni.on("pointerdown", function(){
        if (leftslotisO) {
          leftslot.setDepth(10);
          leftslot.setInteractive();
          leftslot.on("pointerdown", placePeL)
        }
        if (rightslotisO) {
          rightslot.setDepth(10);
          rightslot.setInteractive();
          rightslot.on("pointerdown", placePeR)
        }
      })    

    function placePeL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita") {
        gameState.tips.setText("Solo puedes usar esto con pan pitas")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(380, 270, "Ipepperoni").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Pepperoni";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(380, 270, "Ipepperoni").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Pepperoni";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(380, 270, "Ipepperoni").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Pepperoni";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePeL);
        rightslot.off("pointerdown", placePeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placePeR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita") {
        gameState.tips.setText("Solo puedes usar esto con pan pitas")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(810, 270, "Ipepperoni").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne = "Pepperoni";
        } else if (typeof gameState.PSlot2R === "undefined") {
          gameState.PSlot2R = game.add.sprite(810, 270, "Ipepperoni").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne2 = "Pepperoni";
        } else if (typeof gameState.PSlot3R === "undefined") {
          gameState.PSlot3R = game.add.sprite(810, 270, "Ipepperoni").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Pepperoni";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePeL);
        rightslot.off("pointerdown", placePeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar salsa marinara
    gameState.marinara.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeMaL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeMaR)
      }
    })

    function placeMaL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita") {
        gameState.tips.setText("Solo puedes usar esto con pan pitas")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(385, 285, "Ismarinara").setOrigin(0, 0).setDepth(1).setScale(0.9)
          gameState.quesadillaL.condimento = "Salsa Marinara";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(385, 285, "Ismarinara").setOrigin(0, 0).setDepth(1).setScale(0.9)
          gameState.quesadillaL.condimento2 = "Salsa Marinara";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeMaL);
        rightslot.off("pointerdown", placeMaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeMaR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita") {
        gameState.tips.setText("Solo puedes usar esto con pan pitas")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(835, 285, "Ismarinara").setOrigin(0, 0).setDepth(1).setScale(0.9)
          gameState.quesadillaR.condimento = "Salsa Marinara";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(835, 285, "Ismarinara").setOrigin(0, 0).setDepth(1).setScale(0.9)
          gameState.quesadillaR.condimento2 = "Salsa Marinara";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeMaL);
        rightslot.off("pointerdown", placeMaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar crepa
    gameState.crepa.on("pointerdown", function () {
      gameState.tips.setText("Selecciona un espacio para colocar una crepa");
      if (!leftslotisO) {
        leftslot.setDepth(10);
      }
      if (!rightslotisO) {
        rightslot.setDepth(10);
      }
      leftslot.setInteractive();
      leftslot.on("pointerdown", placeCrL)
      rightslot.setInteractive();
      rightslot.on("pointerdown", placeCrR)
    });

    function placeCrL() {
      if (!leftslotisO) {
        gameState.TSlotL = game.add.sprite(355, 260, "Icrepa").setOrigin(0, 0);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL = new Quesadilla();
        gameState.quesadillaL.tortilla = "Crepa";
        leftslotisO = true;

        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCrL);
        rightslot.off("pointerdown", placeCrR);
        gameState.burnLT = game.time.addEvent({
          callback: burnCL,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    } 

    function placeCrR() {
      if (!rightslotisO) {
        gameState.TSlotR = game.add.sprite(810, 260, "Icrepa").setOrigin(0, 0);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR = new Quesadilla();
        gameState.quesadillaR.tortilla = "Crepa";
        rightslotisO = true;

        // Remove event listeners from both slots
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCrL);
        rightslot.off("pointerdown", placeCrR);
        gameState.burnRT = game.time.addEvent({
          callback: burnCR,
          delay: 500,
          callbackScope: this,
          loop: true
        })
      }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.champinon.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle champiñon");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeChaL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeChaR)
      }
    })
    function placeChaL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState. VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Ichamp").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Champiñon";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Ichamp").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Champiñon";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeChaL);
        rightslot.off("pointerdown", placeChaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeChaR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState. VSlotR === "undefined") {
          gameState.VSlotR = game.add.sprite(895, 290, "Ichamp").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaR.verdura = "Champiñon"
        }
        else if (typeof gameState.VSlot2R === "undefined") {
          gameState.VSlot2R = game.add.sprite(895, 290, "Ichamp").setOrigin(0,0).setDepth(4)
          gameState.quesadillaR.verdura2 = "Champiñon"
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeChaL);
        rightslot.off("pointerdown", placeChaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar ketchup
    gameState.ketchup.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle catsup");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeKtL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeKtR)
      }
    })
    function placeKtL() {
      console.log("debug")
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Iket").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento = "Ketchup";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Iket").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento2 = "Ketchup";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeKtL);
        rightslot.off("pointerdown", placeKtR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeKtR() {
      console.log("debug")
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Iket").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento = "Ketchup";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Iket").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento2 = "Ketchup";
        }
        gameState.quesadillaR.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina");
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeKtL);
        rightslot.off("pointerdown", placeKtR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    gameState.quesobl.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle queso blanco");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeQBL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeQBR)
      }
    })
    function placeQBL() {
      if (typeof gameState.QSlotL !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita" && leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(370, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Mozzarella";
        gameState.quesadillaL.isempty = false
        gameState.quesadillaL.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQBL);
        rightslot.off("pointerdown", placeQBR);
      }
      if (leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(440, 290, "Iquebl").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Blanco";
        gameState.quesadillaL.hasCheese = true
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQBL);
        rightslot.off("pointerdown", placeQBR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeQBR() {
      if (typeof gameState.QSlotR !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita" && rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(830, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Mozzarella";
        gameState.quesadillaR.isempty = false
        gameState.quesadillaR.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCheeseL);
        rightslot.off("pointerdown", placeCheeseR);
      }
      if (rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(895, 290, "Iquebl").setOrigin(0, 0).setDepth(1);
        gameState.quesadillaR.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Blanco";
        gameState.quesadillaR.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQBL);
        rightslot.off("pointerdown", placeQBR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar carne
    gameState.carne.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle carne");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeCaL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeCaR)
      }
    })

    function placeCaL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Icarne").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Carne";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Icarne").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Carne";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Icarne").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Carne";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCaL);
        rightslot.off("pointerdown", placeCaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
      function placeCaR () {
        if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
          gameState.tips.setText("Has alcanzado el máximo de proteinas");
        }
        if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
        }
        if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
          if (typeof gameState.PSlotR === "undefined") {
            gameState.PSlotR = game.add.sprite(895, 290, "Icarne").setOrigin(0, 0).setDepth(1);
            gameState.quesadillaR.carne = "Carne";
          } else if (typeof gameState.PSlot2R === "undefined") {
            gameState.PSlot2R = game.add.sprite(895, 290, "Icarne").setOrigin(0, 0).setDepth(2);
            gameState.quesadillaR.carne2 = "Carne";
          } else if (typeof gameState.PSlot3R === "undefined") {
            gameState.PSlot3R = game.add.sprite(895, 290, "Icarne").setOrigin(0, 0).setDepth(3);
            gameState.quesadillaR.carne3 = "Carne";
          }
          gameState.quesadillaR.isempty = false
          gameState.tips.setText("Bienvenido a la Cocina");
          leftslot.disableInteractive();
          rightslot.disableInteractive();
          leftslot.off("pointerdown", placeCaL);
          rightslot.off("pointerdown", placeCaR);
        }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar tocino
    gameState.bacon.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle tocino");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeBaL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeBaR)
      }
    })

    function placeBaL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ibacon").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Bacon";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ibacon").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Bacon";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ibacon").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Bacon";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeBaL);
        rightslot.off("pointerdown", placeBaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
      function placeBaR() {
        if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
          gameState.tips.setText("Has alcanzado el máximo de proteinas");
        }
        if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
        }
        if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
            if (typeof gameState.PSlotR === "undefined") {
              gameState.PSlotR = game.add.sprite(895, 290, "Ibacon").setOrigin(0, 0).setDepth(1);
              gameState.quesadillaR.carne = "Bacon";
            } else if (typeof gameState.PSlot2R === "undefined") {
              gameState.PSlot2R = game.add.sprite(895, 290, "Ibacon").setOrigin(0, 0).setDepth(2);
              gameState.quesadillaR.carne2 = "Bacon";
            } else if (typeof gameState.PSlot3R === "undefined") {
              gameState.PSlot3R = game.add.sprite(895, 290, "Ibacon").setOrigin(0, 0).setDepth(3);
              gameState.quesadillaR.carne3 = "Bacon";
            }
            gameState.quesadillaR.isempty = false
          gameState.tips.setText("Bienvenido a la Cocina");
          leftslot.disableInteractive();
          rightslot.disableInteractive();
          leftslot.off("pointerdown", placeBaL);
          rightslot.off("pointerdown", placeBaR);
        }

      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar salmon
    gameState.salmon.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle salmon");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeSaL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeSaR)
      }
    })
    function placeSaL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Isalmon").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Salmon";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Isalmon").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Salmon";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Isalmon").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Salmon";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSaL);
        rightslot.off("pointerdown", placeSaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
      function placeSaR() {
        if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
          gameState.tips.setText("Has alcanzado el máximo de proteinas");
        }
        if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
        }
        if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
          if (typeof gameState.PSlotR === "undefined") {
            gameState.PSlotR = game.add.sprite(895, 290, "Isalmon").setOrigin(0, 0).setDepth(1);
            gameState.quesadillaR.carne = "Bacon";
          } else if (typeof gameState.PSlot2R === "undefined") {
            gameState.PSlot2R = game.add.sprite(895, 290, "Isalmon").setOrigin(0, 0).setDepth(2);
            gameState.quesadillaR.carne2 = "Bacon";
          } else if (typeof gameState.PSlot3R === "undefined") {
            gameState.PSlot3R = game.add.sprite(895, 290, "Isalmon").setOrigin(0, 0).setDepth(3);
            gameState.quesadillaR.carne3 = "Bacon";
          }
          gameState.quesadillaR.isempty = false
          gameState.tips.setText("Bienvenido a la Cocina");
          leftslot.disableInteractive();
          rightslot.disableInteractive();
          leftslot.off("pointerdown", placeSaL);
          rightslot.off("pointerdown", placeSaR);
        }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Colocar espinaca
    gameState.espinaca.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para ponerle espinaca");
      if (leftslotisO) {
        leftslot.setDepth(10);
        leftslot.setInteractive();
        leftslot.on("pointerdown", placeEsL)
        //Mover aqui los handlers quizas solucione e bug
      }
      if (rightslotisO) {
        rightslot.setDepth(10);
        rightslot.setInteractive();
        rightslot.on("pointerdown", placeEsR)
      }
      
    })
    function placeEsL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState. VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "espinacas").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Espinaca";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "espinacas").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Espinaca";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeEsL);
        rightslot.off("pointerdown", placeEsR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
      function placeEsR() {
        if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
          gameState.tips.setText("Has alcanzado el máximo de vegetales");
        }
        if (gameState.quesadillaR.tortilla === "Pan pita") {
          gameState.tips.setText("No puedes usar esto en pan pitas")
        }
        if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
          if (typeof gameState.VSlotR === "undefined") {
            gameState.VSlotR = game.add.sprite(895, 290, "espinacas").setOrigin(0, 0).setDepth(4);
            gameState.quesadillaR.verdura = "Espinaca";
          }
          else if (typeof gameState.VSlot2R === "undefined") {
            gameState.VSlot2R = game.add.sprite(895, 290, "espinacas").setOrigin(0,0).setDepth(4)
            gameState.quesadillaR.verdura2 = "Espinaca";
          }
          gameState.quesadillaR.isempty = false
          gameState.tips.setText("Bienvenido a la Cocina");
          leftslot.disableInteractive();
          rightslot.disableInteractive();
          leftslot.off("pointerdown", placeEsL);
          rightslot.off("pointerdown", placeEsR);
        }
          console.log("asd")
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.sal.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para echarle sal")
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeSltL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeSltR)
      }
    })

    function placeSltL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Isal").setOrigin(0,0).setDepth(5)
          gameState.quesadillaL.condimento = "Sal"
        } else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Isal").setOrigin(0,0).setDepth(5)
          gameState.quesadillaL.condimento2 = "Sal"
        }
        gameState.quesadillaL.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina")
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSltL);
        rightslot.off("pointerdown", placeSltR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeSltR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Isal").setOrigin(0,0).setDepth(5)
          gameState.quesadillaR.condimento = "Sal"
        } else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Isal").setOrigin(0,0).setDepth(5)
          gameState.quesadillaR.condimento2 = "Sal"
        }
        gameState.quesadillaR.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina")
        
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSltL);
        rightslot.off("pointerdown", placeSltR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.crema.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeCeL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeCeR)
      }
    })

    function placeCeL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Icrema").setOrigin(0,0).setDepth(5)
          gameState.quesadillaL.condimento = "Crema"
        } else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Icrema").setOrigin(0,0).setDepth(5)
          gameState.quesadillaL.condimento2 = "Crema"
        }
        gameState.quesadillaL.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina")
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCeL);
        rightslot.off("pointerdown", placeCeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeCeR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Isal").setOrigin(0,0).setDepth(5)
          gameState.quesadillaR.condimento = "Crema"
        } else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Isal").setOrigin(0,0).setDepth(5)
          gameState.quesadillaR.condimento2 = "Crema"
        }
        gameState.quesadillaR.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina")
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSltL);
        rightslot.off("pointerdown", placeSltR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.jamonser.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeJSL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeJSR)
      }
    })

    function placeJSL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ijamonser").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Jamon Serrano";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ijamonser").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Jamon Serrano";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ijamonser").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Jamon Serrano";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeJSL);
        rightslot.off("pointerdown", placeJSR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeJSR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Ijamonser").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Jamon Serrano";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Ijamonser").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Jamon Serrano";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Ijamonser").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Jamon Serrano";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeJSL);
        rightslot.off("pointerdown", placeJSR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.quesoox.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeQoL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeQoR)
      }
    })

    function placeQoL() {
      if (typeof gameState.QSlotL !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita" && leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(370, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Mozzarella";
        gameState.quesadillaL.isempty = false
        gameState.quesadillaL.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQoL);
        rightslot.off("pointerdown", placeQoR);
      }
      if (leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(440, 270, "Iquesoox").setOrigin(0,0).setDepth(1).setScale(1.2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Oaxaca";
        gameState.quesadillaL.hasCheese = true
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQoL);
        rightslot.off("pointerdown", placeQoR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeQoR() {
      if (typeof gameState.QSlotR !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita" && rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(830, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Mozzarella";
        gameState.quesadillaR.isempty = false
        gameState.quesadillaR.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQoL);
        rightslot.off("pointerdown", placeQoR);
      }
      if (leftslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(895, 270, "Iquesoox").setOrigin(0,0).setDepth(1).setScale(1.2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Oaxaca";
        gameState.quesadillaR.hasCheese = true
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQoL);
        rightslot.off("pointerdown", placeQoR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.cebolla.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeOnL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeOnR)
      }
    })

    function placeOnL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState. VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Icebolla").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Cebolla";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Icebolla").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Cebolla";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeOnL);
        rightslot.off("pointerdown", placeOnR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeOnR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de vegetales");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState.VSlotR === "undefined") {
          gameState.VSlotR = game.add.sprite(895, 290, "Icebolla").setOrigin(0, 0).setDepth(4).setScale(1.4);
          gameState.quesadillaR.verdura = "Cebolla";
        }
        else if (typeof gameState.VSlot2R === "undefined") {
          gameState.VSlot2R = game.add.sprite(895, 290, "Icebolla").setOrigin(0,0).setDepth(4).setScale(1.4)
          gameState.quesadillaR.verdura = "Cebolla";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeOnL);
        rightslot.off("pointerdown", placeOnR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.frijoles.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeBeL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeBeR)
      }
    })

    function placeBeL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ifrijoles").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Frijoles";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ifrijoles").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Frijoles";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ifrijoles").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Frijoles";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeBeL);
        rightslot.off("pointerdown", placeBeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeBeR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Ifrijoles").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Frijoles";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Ifrijoles").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Frijoles";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Ifrijoles").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Frijoles";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeBeL);
        rightslot.off("pointerdown", placeBeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.pollo.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeCkL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeCkR)
      }
    })

    function placeCkL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ipollo").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Pollo";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ipollo").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Pollo";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ipollo").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Pollo";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCkL);
        rightslot.off("pointerdown", placeCkR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeCkR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Ipollo").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Pollo";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Ipollo").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Pollo";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Ipollo").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Pollo";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCkL);
        rightslot.off("pointerdown", placeCkR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.fresa.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeFrL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeFrR)
      }
    })

    function placeFrL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState.VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Ifresas").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Fresa";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Ifresas").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Fresa";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeFrL);
        rightslot.off("pointerdown", placeFrR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeFrR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState.VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(895, 290, "Ifresas").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Fresa";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(895, 290, "Ifresas").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Fresa";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeFrL);
        rightslot.off("pointerdown", placeFrR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.salsar.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeSRL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeSRR)
      }
    })

    function placeSRL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Isalsaro").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento = "Salsa Roja";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Isalsaro").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento2 = "Salsa Roja";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSRL);
        rightslot.off("pointerdown", placeSRR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeSRR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Isalsaro").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento = "Salsa Roja";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Isalsaro").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento2 = "Salsa Roja";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSRL);
        rightslot.off("pointerdown", placeSRR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.salsav.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeSVL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeSVR)
      }
    })

    function placeSVL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Isalsave").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento = "Salsa Verde";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Isalsave").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento2 = "Salsa Verde";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSVL);
        rightslot.off("pointerdown", placeSVR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeSVR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Isalsave").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento = "Salsa Verde";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Isalsave").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento2 = "Salsa Verde";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeSVL);
        rightslot.off("pointerdown", placeSVR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.choco.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeCoL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeCoR)
      }
    })

    function placeCoL() {
        if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
          gameState.tips.setText("Has alcanzado el limite de condimentos")
        }
        if (gameState.quesadillaL.tortilla !== "Crepa") {
          gameState.tips.setText("Solo puedes usar esto en crepas")
        }
        if (gameState.quesadillaL.tortilla === "Crepa" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
          if (typeof gameState.CSlotL === "undefined") {
            gameState.CSlotL = game.add.sprite(365, 275, "Ichocolate").setOrigin(0, 0).setDepth(1);
            gameState.quesadillaL.condimento = "Chocolate";
          }
          else if (typeof gameState.CSlot2L === "undefined") {
            gameState.CSlot2L = game.add.sprite(365, 275, "Ichocolate").setOrigin(0, 0).setDepth(1);
            gameState.quesadillaL.condimento2 = "Chocolate";
          }
          gameState.tips.setText("Bienvenido a la Cocina");
          gameState.quesadillaL.isempty = false
          leftslot.disableInteractive();
          rightslot.disableInteractive();
          leftslot.off("pointerdown", placeCoL);
          rightslot.off("pointerdown", placeCoR);
        }
        leftslot.setDepth(-1);
        rightslot.setDepth(-1);
    }
    function placeCoR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla !== "Crepa") {
        gameState.tips.setText("Solo puedes usar esto en crepas")
      }
      if (gameState.quesadillaR.tortilla === "Crepa" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(820, 275, "Ichocolate").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.condimento = "Chocolate";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(820, 275, "Ichocolate").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.condimento2 = "Chocolate";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCoL);
        rightslot.off("pointerdown", placeCoR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.mermelada.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeMeL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeMeR)
      }
    })

    function placeMeL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla !== "Crepa") {
        gameState.tips.setText("Solo puedes usar esto en crepas")
      }
      if (gameState.quesadillaL.tortilla === "Crepa" && leftslotisO && (typeof gameState.CSlotL === "undefined" || typeof gameState.CSlot2L === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(365, 275, "Imermelada").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.condimento = "Mermelada";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(365, 275, "Imermelada").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.condimento2 = "Mermelada";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeMeL);
        rightslot.off("pointerdown", placeMeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeMeR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla !== "Crepa") {
        gameState.tips.setText("Solo puedes usar esto en crepas")
      }
      if (gameState.quesadillaR.tortilla === "Crepa" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(820, 275, "Imermelada").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.condimento = "Mermelada";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(820, 275, "Imermelada").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.condimento2 = "Mermelada";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeMeL);
        rightslot.off("pointerdown", placeMeR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.atun.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeAtL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeAtR)
      }
    })

    function placeAtL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Iatun").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Atun";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Iatun").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Atun";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Iatun").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Atun";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeAtL);
        rightslot.off("pointerdown", placeAtR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeAtR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Iatun").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Atun";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Iatun").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Atun";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Iatun").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Atun";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeAtL);
        rightslot.off("pointerdown", placeAtR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.jamonbell.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeJBL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeJBR)
      }
    })

    function placeJBL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Ijamonbell").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Jamon de Bellota";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Ijamonbell").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Jamon de Bellota";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Ijamonbell").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Jamon de Bellota";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeAtL);
        rightslot.off("pointerdown", placeAtR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeJBR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Ijamonbell").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Jamon de Bellota";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Ijamonbell").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Jamon de Bellota";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Ijamonbell").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Jamon de Bellota";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeAtL);
        rightslot.off("pointerdown", placeAtR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.chipotle.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeCiL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeCiR)
      }
    })

    function placeCiL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Ichipotle").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento = "Chipotle";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Ichipotle").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento2 = "Chipotle";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCiL);
        rightslot.off("pointerdown", placeCiR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeCiR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Ichipotle").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento = "Chipotle";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Ichipotle").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento2 = "Chipotle";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeCiL);
        rightslot.off("pointerdown", placeCiR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.quesoman.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeQML)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeQMR)
      }
    })

    function placeQML() {
      if (typeof gameState.QSlotL !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita" && leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(370, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Manchego";
        gameState.quesadillaL.isempty = false
        gameState.quesadillaL.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQML);
        rightslot.off("pointerdown", placeQMR);
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && typeof gameState.QSlotL === "undefined") {
        gameState.QSlotL = game.add.sprite(440, 290, "Imanchego").setOrigin(0, 0).setDepth(1);
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.queso = "Queso Manchego";
        gameState.quesadillaL.hasCheese = true
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQML);
        rightslot.off("pointerdown", placeQMR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeQMR() {
      if (typeof gameState.QSlotR !== "undefined") {
        gameState.tips.setText("Ya has colocado queso")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita" && rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(830, 260, "Iquesomoz").setOrigin(0,0).setDepth(2)
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Manchego";
        gameState.quesadillaR.isempty = false
        gameState.quesadillaR.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQML);
        rightslot.off("pointerdown", placeQMR);
      }
      if (rightslotisO && typeof gameState.QSlotR === "undefined") {
        gameState.QSlotR = game.add.sprite(895, 290, "Imanchego").setOrigin(0, 0).setDepth(1);
        gameState.quesadillaR.isempty = false
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.queso = "Queso Manchego";
        gameState.quesadillaR.hasCheese = true
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeQML);
        rightslot.off("pointerdown", placeQMR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.camaron.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeShL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeShR)
      }
    })

    function placeShL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Icamaron").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Camaron";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Icamaron").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Camaron";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Icamaron").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Camaron";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeShL);
        rightslot.off("pointerdown", placeShR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placeShR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Icamaron").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Camaron";
        } else if (typeof gameState.PSlot2R === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Icamaron").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Camaron";
        } else if (typeof gameState.PSlot3R === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Icamaron").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Camaron";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeShL);
        rightslot.off("pointerdown", placeShR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.aguacate.on("pointerdown",function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeAgL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeAgR)
      }
    })

    function placeAgL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState.VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Iaguacate").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Aguacate";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Iaguacate").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Aguacate";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeAgL);
        rightslot.off("pointerdown", placeAgR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeAgR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState.VSlotR === "undefined") {
          gameState.VSlotR = game.add.sprite(895, 290, "Iaguacate").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaR.verdura = "Aguacate";
        }
        else if (typeof gameState.VSlot2R === "undefined") {
          gameState.VSlot2R = game.add.sprite(895, 290, "Iaguacate").setOrigin(0,0).setDepth(4)
          gameState.quesadillaR.verdura2 = "Aguacate";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeAgL);
        rightslot.off("pointerdown", placeAgR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.pimiento.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placePiL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placePiR)
      }
    })

    function placePiL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState.VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Ipimiento").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Pimientos";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Ipimiento").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Pimientos";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePiL);
        rightslot.off("pointerdown", placePiR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placePiR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState.VSlotR === "undefined") {
          gameState.VSlotR = game.add.sprite(895, 290, "Ipimiento").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaR.verdura = "Pimientos";
        }
        else if (typeof gameState.VSlot2R === "undefined") {
          gameState.VSlot2R = game.add.sprite(895, 290, "Ipimiento").setOrigin(0,0).setDepth(4)
          gameState.quesadillaR.verdura2 = "Pimientos";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePiL);
        rightslot.off("pointerdown", placePiR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.wagyu.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeWaL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeWaR)
      }
    })

    function placeWaL() {
      if ((typeof gameState.PSlotL !== "undefined" && typeof gameState.PSlot2L !== "undefined" && typeof gameState.PSlot3L !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.PSlotL === "undefined" || typeof gameState.PSlot2L === "undefined" || typeof gameState.PSlot3L === "undefined")) {
        if (typeof gameState.PSlotL === "undefined") {
          gameState.PSlotL = game.add.sprite(440, 290, "Iwagyu").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaL.carne = "Wagyu";
        } else if (typeof gameState.PSlot2L === "undefined") {
          gameState.PSlot2L = game.add.sprite(440, 290, "Iwagyu").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaL.carne2 = "Wagyu";
        } else if (typeof gameState.PSlot3L === "undefined") {
          gameState.PSlot3L = game.add.sprite(440, 290, "Iwagyu").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaL.carne3 = "Wagyu";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeWaL);
        rightslot.off("pointerdown", placeWaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeWaR() {
      if ((typeof gameState.PSlotR !== "undefined" && typeof gameState.PSlot2R !== "undefined" && typeof gameState.PSlot3R !== "undefined")) {
        gameState.tips.setText("Has alcanzado el máximo de proteinas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.PSlotR === "undefined" || typeof gameState.PSlot2R === "undefined" || typeof gameState.PSlot3R === "undefined")) {
        if (typeof gameState.PSlotR === "undefined") {
          gameState.PSlotR = game.add.sprite(895, 290, "Iwagyu").setOrigin(0, 0).setDepth(1);
          gameState.quesadillaR.carne = "Wagyu";
        } else if (typeof gameState.PSlot2R === "undefined") {
          gameState.PSlot2R = game.add.sprite(895, 290, "Iwagyu").setOrigin(0, 0).setDepth(2);
          gameState.quesadillaR.carne2 = "Wagyu";
        } else if (typeof gameState.PSlot3R === "undefined") {
          gameState.PSlot3R = game.add.sprite(895, 290, "Iwagyu").setOrigin(0, 0).setDepth(3);
          gameState.quesadillaR.carne3 = "Wagyu";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeWaL);
        rightslot.off("pointerdown", placeWaR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.mole.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placeMoL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placeMoR)
      }
    })

    function placeMoL() {
      if (typeof gameState.CSlotL !== "undefined" && typeof gameState.CSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotL === "undefined") {
          gameState.CSlotL = game.add.sprite(440, 290, "Imole").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento = "Mole";
        }
        else if (typeof gameState.CSlot2L === "undefined") {
          gameState.CSlot2L = game.add.sprite(440, 290, "Imole").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaL.condimento2 = "Mole";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeMoL);
        rightslot.off("pointerdown", placeMoR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    function placeMoR() {
      if (typeof gameState.CSlotR !== "undefined" && typeof gameState.CSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el limite de condimentos")
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.CSlotR === "undefined" || typeof gameState.CSlot2R === "undefined")) {
        if (typeof gameState.CSlotR === "undefined") {
          gameState.CSlotR = game.add.sprite(895, 290, "Imole").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento = "Mole";
        }
        else if (typeof gameState.CSlot2R === "undefined") {
          gameState.CSlot2R = game.add.sprite(895, 290, "Imole").setOrigin(0, 0).setDepth(5);
          gameState.quesadillaR.condimento2 = "Mole";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placeMoL);
        rightslot.off("pointerdown", placeMoR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    gameState.platano.on("pointerdown", function(){
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", placePlL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", placePlR)
      }
    })

    function placePlL() {
      if (typeof gameState.VSlotL !== "undefined" && typeof gameState.VSlot2L !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaL.tortilla !== "Pan pita" && leftslotisO && (typeof gameState.VSlotL === "undefined" || typeof gameState.VSlot2L === "undefined")) {
        if (typeof gameState.VSlotL === "undefined") {
          gameState.VSlotL = game.add.sprite(440, 290, "Iplatano").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaL.verdura = "Platano";
        }
        else if (typeof gameState.VSlot2L === "undefined") {
          gameState.VSlot2L = game.add.sprite(440, 290, "Iplatano").setOrigin(0,0).setDepth(4)
          gameState.quesadillaL.verdura2 = "Platano";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaL.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePlL);
        rightslot.off("pointerdown", placePlR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function placePlR() {
      if (typeof gameState.VSlotR !== "undefined" && typeof gameState.VSlot2R !== "undefined") {
        gameState.tips.setText("Has alcanzado el máximo de frutas");
      }
      if (gameState.quesadillaR.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes usar esto en pan pitas")
      }
      if (gameState.quesadillaR.tortilla !== "Pan pita" && rightslotisO && (typeof gameState.VSlotR === "undefined" || typeof gameState.VSlot2R === "undefined")) {
        if (typeof gameState.VSlotR === "undefined") {
          gameState.VSlotR = game.add.sprite(895, 290, "Iplatano").setOrigin(0, 0).setDepth(4);
          gameState.quesadillaR.verdura = "Platano";
        }
        else if (typeof gameState.VSlot2R === "undefined") {
          gameState.VSlot2R = game.add.sprite(895, 290, "Iplatano").setOrigin(0,0).setDepth(4)
          gameState.quesadillaR.verdura2 = "Platano";
        }
        gameState.tips.setText("Bienvenido a la Cocina");
        gameState.quesadillaR.isempty = false
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", placePiL);
        rightslot.off("pointerdown", placePiR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    //Funciones miscelaneas
    gameState.flipbut.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para voltearla")
      if (leftslotisO) {
        leftslot.setDepth(10)
        leftslot.setInteractive()
        leftslot.on("pointerdown", flipL)
      }
      if (rightslotisO) {
        rightslot.setDepth(10)
        rightslot.setInteractive()
        rightslot.on("pointerdown", flipR)
      }
      console.log("flip")
    })


    function flipL() {
      if (leftslotisO && (!gameState.quesadillaL.folded || !gameState.quesadillaL.isempty)) {
        gameState.tips.setText("No puedes voltear una pizza sin doblar o no vacia")
      }
      if (leftslotisO && (gameState.quesadillaL.folded || gameState.quesadillaL.isempty)) {
        if (gameState.quesadillaL.folded && gameState.quesadillaL.flipped && gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.flfofl = true
        }
        gameState.quesadillaL.flipped = !gameState.quesadillaL.flipped
        leftslot.disableInteractive()
        leftslot.off("pointerdown", flipL)
        rightslot.disableInteractive()
        rightslot.off("pointerdown", flipR)
      }
      leftslot.setDepth(-1)
      rightslot.setDepth(-1)
    }
    
    function flipR() {
      if (rightslotisO && (!gameState.quesadillaR.folded || !gameState.quesadillaR.isempty)) {
        gameState.tips.setText("No puedes voltear una pizza sin doblar o no vacia")
      }
      if (rightslotisO && (gameState.quesadillaR.folded || gameState.quesadillaR.isempty)) {
        if (gameState.quesadillaR.folded && gameState.quesadillaR.flipped && gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.flfofl = true
        }
        gameState.quesadillaR.flipped = !gameState.quesadillaR.flipped
        leftslot.disableInteractive()
        leftslot.off("pointerdown", flipL)
        rightslot.disableInteractive()
        rightslot.off("pointerdown", flipR)
      }
      leftslot.setDepth(-1)
      rightslot.setDepth(-1)
    }

    gameState.foldbut.on("pointerdown", function(){
      gameState.tips.setText("Selecciona una tortilla para doblarla");
      if (leftslotisO && !gameState.quesadillaL.folded) {
        leftslot.setDepth(10);
      }
      if (rightslotisO && !gameState.quesadillaR.folded) {
        rightslot.setDepth(10);
      }
      leftslot.setInteractive();
      leftslot.on("pointerdown", foldL)
      rightslot.setInteractive();
      rightslot.on("pointerdown", foldR)
    })

    function foldL() {
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes doblar una pan pita")
      }
      if (leftslotisO && !gameState.quesadillaL.folded  && gameState.quesadillaL.tortilla !== "Pan pita") {
        gameState.quesadillaL.folded = true
        if (gameState.quesadillaL.flipped) {
          gameState.quesadillaL.flitfold = true
          gameState.quesadillaL.burnessBA += gameState.quesadillaL.burnessB
          gameState.quesadillaL.burnessBB += gameState.quesadillaL.burnessB
        } else {
          gameState.quesadillaL.burnessAA += gameState.quesadillaL.burnessA
          gameState.quesadillaL.burnessAB += gameState.quesadillaL.burnessA
        }
        gameState.TSlotL.setDepth(2)
        if (typeof gameState.QSlotL !== "undefined") {gameState.QSlotL.setDepth(1)}
        if (typeof gameState.PSlotL !== "undefined") {gameState.PSlotL.setDepth(1)}
        if (typeof gameState.PSlot2L !== "undefined") {gameState.PSlot2L.setDepth(1)}
        if (typeof gameState.PSlot3L !== "undefined") {gameState.PSlot3L.setDepth(1)}
        if (typeof gameState.VSlotL !== "undefined") {gameState.VSlotL.setDepth(1)}
        if (typeof gameState.VSlot2L !== "undefined") {gameState.VSlot2L.setDepth(1)}
        if (typeof gameState.CSlotL !== "undefined") {gameState.CSlotL.setDepth(1)}
        if (typeof gameState.CSlot2L !== "undefined") {gameState.CSlot2L.setDepth(1)}
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", foldL);
        rightslot.off("pointerdown", foldR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }
    function foldR() {
      if (gameState.quesadillaL.tortilla === "Pan pita") {
        gameState.tips.setText("No puedes doblar una pan pita")
      }
      if (rightslotisO && !gameState.quesadillaR.folded && gameState.quesadillaL.tortilla !== "Pan pita") {
        gameState.quesadillaR.folded = true
        if (gameState.quesadillaR.flipped) {
          gameState.quesadillaR.litfold = true
          gameState.quesadillaR.burnessBA += gameState.quesadillaR.burnessB
          gameState.quesadillaR.burnessBB += gameState.quesadillaR.burnessB
        } else {
          gameState.quesadillaR.burnessAA += gameState.quesadillaR.burnessA
          gameState.quesadillaR.burnessAB += gameState.quesadillaR.burnessA
        }
        gameState.TSlotR.setDepth(2)
        if (typeof gameState.QSlotR !== "undefined") {gameState.QSlotR.setDepth(1)}
        if (typeof gameState.PSlotR !== "undefined") {gameState.PSlotR.setDepth(1)}
        if (typeof gameState.PSlot2R !== "undefined") {gameState.PSlot2R.setDepth(1)}
        if (typeof gameState.PSlot3R !== "undefined") {gameState.PSlot3R.setDepth(1)}
        if (typeof gameState.VSlotR !== "undefined") {gameState.VSlotR.setDepth(1)}
        if (typeof gameState.VSlot2R !== "undefined") {gameState.VSlot2R.setDepth(1)}
        if (typeof gameState.CSlotR !== "undefined") {gameState.CSlotR.setDepth(1)}
        if (typeof gameState.CSlot2R !== "undefined") {gameState.CSlot2R.setDepth(1)}
        leftslot.disableInteractive();
        rightslot.disableInteractive();
        leftslot.off("pointerdown", foldL);
        rightslot.off("pointerdown", foldR);
      }
      leftslot.setDepth(-1);
      rightslot.setDepth(-1);
    }

    
    if (2 > 1) {
      gameState.table.on("pointerover", function () {
        gameState.tips.setText("Barra de ingredientes: Toma de aquí");
      });
      gameState.table.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.foldbut.on("pointerover", function () {
        gameState.tips.setText("Fold (F) dobla por mitad la tortilla");
      });
      gameState.foldbut.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.flipbut.on("pointerover", function () {
        gameState.tips.setText("Flip (L) voltea la tortilla");
      });
      gameState.flipbut.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.rollbut.on("pointerover", function () {
        gameState.tips.setText(
          "Proximamente"
        );
      });
      gameState.rollbut.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.previous.on("pointerover", function () {
        gameState.tips.setText("Cambia a la pestaña de ingredientes anterior");
      });
      gameState.previous.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.fryer.on("pointerover", function () {
        gameState.tips.setText(
          "Aquí se calientan las tortillas, cuidado, caliente!"
        );
      });
      gameState.fryer.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.following.on("pointerover", function () {
        gameState.tips.setText(
          "Cambia a la pestaña de ingredientes siguientes"
        );
      });
      gameState.following.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.meltbut.on("pointerover", function () {
        gameState.tips.setText(
          "Melt (M) aplica una maquina que derrite el queso"
        );
      });
      gameState.meltbut.on("pointerout", function () {
        gameState.tips.setText("Bienvenido a la Cocina");
      });

      gameState.harina.on("pointerover", function () {
        gameState.label.setText("Tortilla de Harina");
      });
      gameState.harina.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.maiz.on("pointerover", function () {
        gameState.label.setText("Tortilla de Maiz");
      });
      gameState.maiz.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.quesoa.on("pointerover", function () {
        gameState.label.setText("Queso Americano");
      });
      gameState.quesoa.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.jamon.on("pointerover", function () {
        gameState.label.setText("Jamón");
      });
      gameState.jamon.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.salchicha.on("pointerover", function () {
        gameState.label.setText("Salchicha");
      });
      gameState.salchicha.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.chile.on("pointerover", function () {
        gameState.label.setText("Chile");
      });
      gameState.chile.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.pescado.on("pointerover", function () {
        gameState.label.setText("Pescado");
      });
      gameState.pescado.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.carne.on("pointerover", function () {
        gameState.label.setText("Carne");
      });
      gameState.carne.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.bacon.on("pointerover", function () {
        gameState.label.setText("Bacon");
      });
      gameState.bacon.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.quesobl.on("pointerover", function () {
        gameState.label.setText("Queso Blanco");
      });
      gameState.quesobl.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.salmon.on("pointerover", function () {
        gameState.label.setText("Salmon");
      });
      gameState.salmon.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.ketchup.on("pointerover", function () {
        gameState.label.setText("Ketchup");
      });
      gameState.ketchup.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.omelette.on("pointerover", function () {
        gameState.label.setText("Omelette Vacío");
      });
      gameState.omelette.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.espinaca.on("pointerover", function () {
        gameState.label.setText("Espinaca");
      });
      gameState.espinaca.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.lechuga.on("pointerover", function () {
        gameState.label.setText("Lechuga");
      });
      gameState.lechuga.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.champinon.on("pointerover", function () {
        gameState.label.setText("Champiñón");
      });
      gameState.champinon.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.sal.on("pointerover", function () {
        gameState.label.setText("Sal");
      });
      gameState.sal.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.crema.on("pointerover", function () {
        gameState.label.setText("Crema");
      });
      gameState.crema.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.quesoox.on("pointerover", function () {
        gameState.label.setText("Queso Oaxaca");
      });
      gameState.quesoox.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.jamonser.on("pointerover", function () {
        gameState.label.setText("Jamon Serrano");
      });
      gameState.jamonser.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.marinara.on("pointerover", function () {
        gameState.label.setText("Salsa Marinara");
      });
      gameState.marinara.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.panpita.on("pointerover", function () {
        gameState.label.setText("Tortilla Gruesa");
      });
      gameState.panpita.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.pepperoni.on("pointerover", function () {
        gameState.label.setText("Pepperoni");
      });
      gameState.pepperoni.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.pollo.on("pointerover", function () {
        gameState.label.setText("Pollo");
      });
      gameState.pollo.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.frijoles.on("pointerover", function () {
        gameState.label.setText("Frijoles");
      });
      gameState.frijoles.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.crepa.on("pointerover", function () {
        gameState.label.setText("Crepa vacía");
      });
      gameState.crepa.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.fresa.on("pointerover", function () {
        gameState.label.setText("Fresa");
      });
      gameState.fresa.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.choco.on("pointerover", function () {
        gameState.label.setText("Chocolate Derretido");
      });
      gameState.choco.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.mermelada.on("pointerover", function () {
        gameState.label.setText("Mermelada");
      });
      gameState.mermelada.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.platano.on("pointerover", function () {
        gameState.label.setText("Platano Rebanado");
      });
      gameState.platano.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.cebolla.on("pointerover", function () {
        gameState.label.setText("Cebolla en Tiras");
      });
      gameState.cebolla.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.salsar.on("pointerover", function () {
        gameState.label.setText("Salsa Roja");
      });
      gameState.salsar.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.salsav.on("pointerover", function () {
        gameState.label.setText("Salsa Verde");
      });
      gameState.salsav.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.chipotle.on("pointerover", function () {
        gameState.label.setText("Chipotle");
      });
      gameState.chipotle.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.mole.on("pointerover", function () {
        gameState.label.setText("Mole");
      });
      gameState.mole.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
      gameState.atun.on("pointerover", function () {
        gameState.label.setText("Atún");
      });
      gameState.atun.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.jamonser.on("pointerover", function () {
        gameState.label.setText("Jamon Serrano");
      });
      gameState.jamonser.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.quesoman.on("pointerover", function () {
        gameState.label.setText("Queso Manchego");
      });
      gameState.quesoman.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.camaron.on("pointerover", function () {
        gameState.label.setText("Camarón");
      });
      gameState.camaron.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.aguacate.on("pointerover", function () {
        gameState.label.setText("Aguacate");
      });
      gameState.aguacate.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.pimiento.on("pointerover", function () {
        gameState.label.setText("Pimientos");
      });
      gameState.pimiento.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });

      gameState.wagyu.on("pointerover", function () {
        gameState.label.setText("Wagyu");
      });
      gameState.wagyu.on("pointerout", function () {
        gameState.label.setText("Sin Objeto Seleccionado");
      });
    }
    gameState.previous.on("pointerdown", function () {
      if (gameState.page >= 2) {
        gameState.page -= 1;
      }
      gameState.paged.setText(gameState.page);
      //hide2nd();
    });
    gameState.following.on("pointerdown", function () {
      if (gameState.page <= 3) {
        gameState.page += 1;
      }

      gameState.paged.setText(gameState.page);
    });
    function burnL() {
        if (leftslotisO) {
          if (!gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.quesadillaL.burnessA += 12;
            if (gameState.burnessLL.height > -148) {
              gameState.burnessLL.height -= 1.05
            }
          } else if (gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.quesadillaL.burnessB += 12
            if (gameState.burnessLR.height > -148) {
              gameState.burnessLR.height -= 1.05
            }
          } else if (!gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flfofl) {
            gameState.quesadillaL.burnessAA += 12
            if (gameState.burnessLL.height > -148) {
              gameState.burnessLL.height -= 0.525
            }
          } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && gameState.quesadillaL.flitfold) {
            gameState.quesadillaL.burnessBA += 12
            if (gameState.burnessLR.height > -148) {
              gameState.burnessLR.height -= 0.525
            }
          } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flitfold) {
            gameState.quesadillaL.burnessAB += 12
            if (gameState.burnessLL.height > -148) {
              gameState.burnessLL.height -= 0.525
            }
          } else if (gameState.quesadillaL.flfofl) {
            gameState.quesadillaL.burnessBB += 12
            if (gameState.burnessLR.height > -148) {
              gameState.burnessLR.height -= 0.525
            }
          }
          if (gameState.quesadillaL.hasCheese) {gameState.derritiendo ? gameState.quesadillaL.cheesness += 1.4 : gameState.quesadillaL.cheesness += 0.7}
          if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Amarillo" ) {
            gameState.QSlotL.setTexture("Dquesoam")
          } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Blanco") {
            gameState.QSlotL.setTexture("Dquesobl")
          } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Oaxaca") {
            gameState.QSlotL.setTexture("Dquesoox")
          } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Mozzarella") {
            gameState.QSlotL.setTexture("Dquesomoz")
          }
          //Cambiar la tortilla del lado que inicia abajo
          if (gameState.quesadillaL.burnessA > 1332 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla_b3")
          } else
          if (gameState.quesadillaL.burnessA > 924 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla_b2")
          } else
          if (gameState.quesadillaL.burnessA > 528 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla_b1")
          } else
          if (gameState.quesadillaL.burnessA >= 0 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla")
          }
          //Cambiar la tortilla del lado que inicia arriba
          if (gameState.quesadillaL.burnessB > 1332 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla_b3")
          } else
          if (gameState.quesadillaL.burnessB > 924 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla_b2")
          } else
          if (gameState.quesadillaL.burnessB > 528 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla_b1")
          } else
          if (gameState.quesadillaL.burnessB >= 0 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("tortilla")
          }
          //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
          if (gameState.quesadillaL.burnessAA > 1332 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaL.burnessAA > 924 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaL.burnessAA > 528 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaL.burnessAA >= 0 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
            gameState.TSlotL.setTexture("Ftortilla")
            console.log("2")
          }
          //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
          if (gameState.quesadillaL.burnessAB > 1332 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
            gameState.TSlotL.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaL.burnessAB > 924 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
            gameState.TSlotL.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaL.burnessAB > 528 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
            gameState.TSlotL.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaL.burnessAB >= 0 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
            gameState.TSlotL.setTexture("Ftortilla")
            console.log("3")
          }
          //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
          if (gameState.quesadillaL.burnessBA > 1332 && gameState.quesadillaL.flfofl) {
            gameState.TSlotL.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaL.burnessBA > 924 && gameState.quesadillaL.flfofl) {
            gameState.TSlotL.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaL.burnessBA > 528 && gameState.quesadillaL.flfofl) {
            gameState.TSlotL.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaL.burnessBA >= 0 && gameState.quesadillaL.flfofl) {
            gameState.TSlotL.setTexture("Ftortilla")
            console.log("4")
          }
          //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
          if (gameState.quesadillaL.burnessBB > 1332 && gameState.quesadillaL.flitfold) {
            gameState.TSlotL.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaL.burnessBB > 924 && gameState.quesadillaL.flitfold) {
            gameState.TSlotL.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaL.burnessBB > 528 && gameState.quesadillaL.flitfold) {
            gameState.TSlotL.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaL.burnessBB >= 0 && gameState.quesadillaL.flitfold) {
            gameState.TSlotL.setTexture("Ftortilla")
            console.log("1")
          }
          }
        }
    
    function burnR() {
      if (rightslotisO) {
        if (!gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessA += 12;
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 1.05
          }
        } else if (gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 1.05
          }
        } else if (!gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessAA += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessBA += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessAB += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessBB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        }
        if (gameState.quesadillaR.hasCheese) {gameState.derritiendo ? gameState.quesadillaR.cheesness += 1.4 : gameState.quesadillaR.cheesness += 0.7}
          if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Amarillo" ) {
            gameState.QSlotL.setTexture("Dquesoam")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Blanco") {
            gameState.QSlotL.setTexture("Dquesobl")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Oaxaca") {
            gameState.QSlotL.setTexture("Dquesoox")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Mozzarella") {
            gameState.QSlotR.setTexture("Dquesomoz")
          }
          //Cambiar la tortilla del lado que inicia abajo
          if (gameState.quesadillaR.burnessA > 1332 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla_b3")
          } else
          if (gameState.quesadillaR.burnessA > 924 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla_b2")
          } else
          if (gameState.quesadillaR.burnessA > 528 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla_b1")
          } else
          if (gameState.quesadillaR.burnessA >= 0 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla")
          }
          //Cambiar la tortilla del lado que inicia arriba
          if (gameState.quesadillaR.burnessB > 1332 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla_b3")
          } else
          if (gameState.quesadillaR.burnessB > 924 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla_b2")
          } else
          if (gameState.quesadillaR.burnessB > 528 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla_b1")
          } else
          if (gameState.quesadillaR.burnessB >= 0 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortilla")
          }
          //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
          if (gameState.quesadillaR.burnessAA > 1332 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaR.burnessAA > 924 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaR.burnessAA > 528 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaR.burnessAA >= 0 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortilla")
            console.log("2")
          }
          //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
          if (gameState.quesadillaR.burnessAB > 1332 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaR.burnessAB > 924 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaR.burnessAB > 528 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaR.burnessAB >= 0 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortilla")
            console.log("3")
          }
          //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
          if (gameState.quesadillaR.burnessBA > 1332 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaR.burnessBA > 924 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaR.burnessBA > 528 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaR.burnessBA >= 0 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortilla")
            console.log("4")
          }
          //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
          if (gameState.quesadillaR.burnessBB > 1332 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortilla_b3")
          } else
          if (gameState.quesadillaR.burnessBB > 924 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortilla_b2")
          } else
          if (gameState.quesadillaR.burnessBB > 528 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortilla_b1")
          } else
          if (gameState.quesadillaR.burnessBB >= 0 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortilla")
            console.log("1")
          }
      }
  }
    function burnMR() {
      if (rightslotisO) {
        if (!gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessA += 12;
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 1.05
          }
        } else if (gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 1.05
          }
        } else if (!gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessAA += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessBA += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessAB += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessBB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        }
        if (gameState.quesadillaR.hasCheese) {gameState.derritiendo ? gameState.quesadillaR.cheesness += 1.4 : gameState.quesadillaR.cheesness += 0.7}
          if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Amarillo" ) {
            gameState.QSlotR.setTexture("Dquesoam")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Blanco") {
            gameState.QSlotR.setTexture("Dquesobl")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Oaxaca") {
            gameState.QSlotR.setTexture("Dquesoox")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Mozzarella") {
            gameState.QSlotR.setTexture("Dquesomoz")
          }
          //Cambiar la tortilla del lado que inicia abajo
          if (gameState.quesadillaR.burnessA > 1332 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah_b3")
          } else
          if (gameState.quesadillaR.burnessA > 924 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah_b2")
          } else
          if (gameState.quesadillaR.burnessA > 528 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah_b1")
          } else
          if (gameState.quesadillaR.burnessA >= 0 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah")
          }
          //Cambiar la tortilla del lado que inicia arriba
          if (gameState.quesadillaR.burnessB > 1332 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah_b3")
          } else
          if (gameState.quesadillaR.burnessB > 924 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah_b2")
          } else
          if (gameState.quesadillaR.burnessB > 528 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah_b1")
          } else
          if (gameState.quesadillaR.burnessB >= 0 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("tortillah")
          }
          //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
          if (gameState.quesadillaR.burnessAA > 1332 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortillah_b3")
          } else
          if (gameState.quesadillaR.burnessAA > 924 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortillah_b2")
          } else
          if (gameState.quesadillaR.burnessAA > 528 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortillah_b1")
          } else
          if (gameState.quesadillaR.burnessAA >= 0 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Ftortillah")
            console.log("2")
          }
          //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
          if (gameState.quesadillaR.burnessAB > 1332 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortillah_b3")
          } else
          if (gameState.quesadillaR.burnessAB > 924 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortillah_b2")
          } else
          if (gameState.quesadillaR.burnessAB > 528 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortillah_b1")
          } else
          if (gameState.quesadillaR.burnessAB >= 0 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Ftortillah")
            console.log("3")
          }
          //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
          if (gameState.quesadillaR.burnessBA > 1332 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortillah_b3")
          } else
          if (gameState.quesadillaR.burnessBA > 924 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortillah_b2")
          } else
          if (gameState.quesadillaR.burnessBA > 528 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortillah_b1")
          } else
          if (gameState.quesadillaR.burnessBA >= 0 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Ftortillah")
            console.log("4")
          }
          //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
          if (gameState.quesadillaR.burnessBB > 1332 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortillah_b3")
          } else
          if (gameState.quesadillaR.burnessBB > 924 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortillah_b2")
          } else
          if (gameState.quesadillaR.burnessBB > 528 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortillah_b1")
          } else
          if (gameState.quesadillaR.burnessBB >= 0 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Ftortillah")
            console.log("1")
          }
      }
    }

    function burnML() {
      if (leftslotisO) {
        if (!gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.quesadillaL.burnessA += 12;
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 1.05
          }
        } else if (gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.quesadillaL.burnessB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 1.05
          }
        } else if (!gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flfofl) {
          gameState.quesadillaL.burnessAA += 12
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 0.525
          }
        } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.burnessBA += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 0.525
          }
        } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.burnessAB += 12
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 0.525
          }
        } else if (gameState.quesadillaL.flfofl) {
          gameState.quesadillaL.burnessBB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 0.525
          }
        }
        if (gameState.quesadillaL.hasCheese) {gameState.derritiendo ? gameState.quesadillaL.cheesness += 1.4 : gameState.quesadillaL.cheesness += 0.7}
          if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Amarillo" ) {
            gameState.QSlotL.setTexture("Dquesoam")
          } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Blanco") {
            gameState.QSlotL.setTexture("Dquesobl")
          } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Oaxaca") {
            gameState.QSlotL.setTexture("Dquesoox")
          } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Mozzarella") {
            gameState.QSlotL.setTexture("Dquesomoz")
          }
        //Cambiar la tortilla del lado que inicia abajo
        if (gameState.quesadillaL.burnessA > 1332 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah_b3")
        } else
        if (gameState.quesadillaL.burnessA > 924 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah_b2")
        } else
        if (gameState.quesadillaL.burnessA > 528 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah_b1")
        } else
        if (gameState.quesadillaL.burnessA >= 0 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah")
        }
        //Cambiar la tortilla del lado que inicia arriba
        if (gameState.quesadillaL.burnessB > 1332 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah_b3")
        } else
        if (gameState.quesadillaL.burnessB > 924 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah_b2")
        } else
        if (gameState.quesadillaL.burnessB > 528 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah_b1")
        } else
        if (gameState.quesadillaL.burnessB >= 0 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("tortillah")
        }
        //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
        if (gameState.quesadillaL.burnessAA > 1332 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Ftortillah_b3")
        } else
        if (gameState.quesadillaL.burnessAA > 924 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Ftortillah_b2")
        } else
        if (gameState.quesadillaL.burnessAA > 528 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Ftortillah_b1")
        } else
        if (gameState.quesadillaL.burnessAA >= 0 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Ftortillah")
          console.log("2")
        }
        //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
        if (gameState.quesadillaL.burnessAB > 1332 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Ftortillah_b3")
        } else
        if (gameState.quesadillaL.burnessAB > 924 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Ftortillah_b2")
        } else
        if (gameState.quesadillaL.burnessAB > 528 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Ftortillah_b1")
        } else
        if (gameState.quesadillaL.burnessAB >= 0 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Ftortillah")
          console.log("3")
        }
        //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
        if (gameState.quesadillaL.burnessBA > 1332 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Ftortillah_b3")
        } else
        if (gameState.quesadillaL.burnessBA > 924 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Ftortillah_b2")
        } else
        if (gameState.quesadillaL.burnessBA > 528 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Ftortillah_b1")
        } else
        if (gameState.quesadillaL.burnessBA >= 0 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Ftortillah")
          console.log("4")
        }
        //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
        if (gameState.quesadillaL.burnessBB > 1332 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Ftortillah_b3")
        } else
        if (gameState.quesadillaL.burnessBB > 924 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Ftortillah_b2")
        } else
        if (gameState.quesadillaL.burnessBB > 528 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Ftortillah_b1")
        } else
        if (gameState.quesadillaL.burnessBB >= 0 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Ftortillah")
          console.log("1")
        }
      }
    }

    function burnOL() {
      if (leftslotisO) {
        if (!gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.quesadillaL.burnessA += 12;
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 1.05
          }
        } else if (gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.quesadillaL.burnessB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 1.05
          }
        } else if (!gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flfofl) {
          gameState.quesadillaL.burnessAA += 12
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 0.525
          }
        } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.burnessBA += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 0.525
          }
        } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.burnessAB += 12
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 0.525
          }
        } else if (gameState.quesadillaL.flfofl) {
          gameState.quesadillaL.burnessBB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 0.525
          }
        }
        if (gameState.quesadillaL.hasCheese) {gameState.derritiendo ? gameState.quesadillaL.cheesness += 1.4 : gameState.quesadillaL.cheesness += 0.7}
        if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Amarillo" ) {
          gameState.QSlotL.setTexture("Dquesoam")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Blanco") {
          gameState.QSlotL.setTexture("Dquesobl")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Oaxaca") {
          gameState.QSlotL.setTexture("Dquesoox")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Mozzarella") {
          gameState.QSlotL.setTexture("Dquesomoz")
        }
        //Cambiar la tortilla del lado que inicia abajo
        if (gameState.quesadillaL.burnessA > 1332 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("omelette_b3")
        } else
        if (gameState.quesadillaL.burnessA > 924 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("omelette_b2")
        } else
        if (gameState.quesadillaL.burnessA > 528 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("omelette_b1")
        } else
        if (gameState.quesadillaL.burnessA >= 0 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Iomelette")
        }
        //Cambiar la tortilla del lado que inicia arriba
        if (gameState.quesadillaL.burnessB > 1332 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("omelette_b3")
        } else
        if (gameState.quesadillaL.burnessB > 924 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("omelette_b2")
        } else
        if (gameState.quesadillaL.burnessB > 528 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("omelette_b1")
        } else
        if (gameState.quesadillaL.burnessB >= 0 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Iomelette")
        }
        //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
        if (gameState.quesadillaL.burnessAA > 1332 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fomelette_b3")
        } else
        if (gameState.quesadillaL.burnessAA > 924 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fomelette_b2")
        } else
        if (gameState.quesadillaL.burnessAA > 528 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fomelette_b1")
        } else
        if (gameState.quesadillaL.burnessAA >= 0 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fomelette")
          console.log("2")
        }
        //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
        if (gameState.quesadillaL.burnessAB > 1332 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fomelette_b3")
        } else
        if (gameState.quesadillaL.burnessAB > 924 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fomelette_b2")
        } else
        if (gameState.quesadillaL.burnessAB > 528 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fomelette_b1")
        } else
        if (gameState.quesadillaL.burnessAB >= 0 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fomelette")
          console.log("3")
        }
        //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
        if (gameState.quesadillaL.burnessBA > 1332 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fomelette_b3")
        } else
        if (gameState.quesadillaL.burnessBA > 924 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fomelette_b2")
        } else
        if (gameState.quesadillaL.burnessBA > 528 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fomelette_b1")
        } else
        if (gameState.quesadillaL.burnessBA >= 0 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fomelette")
          console.log("4")
        }
        //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
        if (gameState.quesadillaL.burnessBB > 1332 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fomelette_b3")
        } else
        if (gameState.quesadillaL.burnessBB > 924 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fomelette_b2")
        } else
        if (gameState.quesadillaL.burnessBB > 528 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fomelette_b1")
        } else
        if (gameState.quesadillaL.burnessBB >= 0 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fomelette")
          console.log("1")
        }
        }
    }

    function burnOR() {
      if (rightslotisO) {
        if (!gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessA += 12;
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 1.05
          }
        } else if (gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 1.05
          }
        } else if (!gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessAA += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessBA += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessAB += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessBB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        }
        if (gameState.quesadillaR.hasCheese) {gameState.derritiendo ? gameState.quesadillaR.cheesness += 1.4 : gameState.quesadillaR.cheesness += 0.7}
          if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Amarillo" ) {
            gameState.QSlotR.setTexture("Dquesoam")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Blanco") {
            gameState.QSlotR.setTexture("Dquesobl")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Oaxaca") {
            gameState.QSlotR.setTexture("Dquesoox")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Mozzarella") {
            gameState.QSlotR.setTexture("Dquesomoz")
          }
          //Cambiar la tortilla del lado que inicia abajo
          if (gameState.quesadillaR.burnessA > 1332 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("omelette_b3")
          } else
          if (gameState.quesadillaR.burnessA > 924 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("omelette_b2")
          } else
          if (gameState.quesadillaR.burnessA > 528 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("omelette_b1")
          } else
          if (gameState.quesadillaR.burnessA >= 0 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Iomelette")
          }
          //Cambiar la tortilla del lado que inicia arriba
          if (gameState.quesadillaR.burnessB > 1332 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("omelette_b3")
          } else
          if (gameState.quesadillaR.burnessB > 924 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("omelette_b2")
          } else
          if (gameState.quesadillaR.burnessB > 528 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("omelette_b1")
          } else
          if (gameState.quesadillaR.burnessB >= 0 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Iomelette")
          }
          //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
          if (gameState.quesadillaR.burnessAA > 1332 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fomelette_b3")
          } else
          if (gameState.quesadillaR.burnessAA > 924 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fomelette_b2")
          } else
          if (gameState.quesadillaR.burnessAA > 528 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fomelette_b1")
          } else
          if (gameState.quesadillaR.burnessAA >= 0 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fomelette")
            console.log("2")
          }
          //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
          if (gameState.quesadillaR.burnessAB > 1332 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fomelette_b3")
          } else
          if (gameState.quesadillaR.burnessAB > 924 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fomelette_b2")
          } else
          if (gameState.quesadillaR.burnessAB > 528 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fomelette_b1")
          } else
          if (gameState.quesadillaR.burnessAB >= 0 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fomelette")
            console.log("3")
          }
          //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
          if (gameState.quesadillaR.burnessBA > 1332 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fomelette_b3")
          } else
          if (gameState.quesadillaR.burnessBA > 924 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fomelette_b2")
          } else
          if (gameState.quesadillaR.burnessBA > 528 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fomelette_b1")
          } else
          if (gameState.quesadillaR.burnessBA >= 0 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fomelette")
            console.log("4")
          }
          //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
          if (gameState.quesadillaR.burnessBB > 1332 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fomelette_b3")
          } else
          if (gameState.quesadillaR.burnessBB > 924 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fomelette_b2")
          } else
          if (gameState.quesadillaR.burnessBB > 528 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fomelette_b1")
          } else
          if (gameState.quesadillaR.burnessBB >= 0 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fomelette")
            console.log("1")
          }
      }
    }


    function burnPL() {
      if (leftslotisO) {
        if (!gameState.quesadillaL.flipped) {
          gameState.quesadillaL.burnessA += 12;
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 1.05
          }
        } else if (gameState.quesadillaL.flipped) {
          gameState.quesadillaL.burnessB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 1.05
          }
        }
        if (gameState.quesadillaL.hasCheese) {gameState.derritiendo ? gameState.quesadillaL.cheesness += 1.4 : gameState.quesadillaL.cheesness += 0.7}
        if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Amarillo" ) {
          gameState.QSlotL.setTexture("Dquesoam")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Blanco") {
          gameState.QSlotL.setTexture("Dquesobl")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Oaxaca") {
          gameState.QSlotL.setTexture("Dquesoox")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Mozzarella") {
          gameState.QSlotL.setTexture("Dquesomoz")
        }
        //Cambiar la tortilla del lado que inicia abajo
        if (gameState.quesadillaL.burnessA > 1332 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("pampita_b3")
        } else
        if (gameState.quesadillaL.burnessA > 924 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("pampita_b2")
        } else
        if (gameState.quesadillaL.burnessA > 528 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("pampita_b1")
        } else
        if (gameState.quesadillaL.burnessA >= 0 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Ipampita")
        }
        //Cambiar la tortilla del lado que inicia arriba
        if (gameState.quesadillaL.burnessB > 1332 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("pampita_b3")
        } else
        if (gameState.quesadillaL.burnessB > 924 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("pampita_b2")
        } else
        if (gameState.quesadillaL.burnessB > 528 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("pampita_b1")
        } else
        if (gameState.quesadillaL.burnessB >= 0 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Ipampita")
        }
        }
    }
    
    function burnPR() {
      if (rightslotisO) {
        if (!gameState.quesadillaR.flipped) {
          gameState.quesadillaR.burnessA += 12;
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 1.05
          }
        } else if (gameState.quesadillaR.flipped) {
          gameState.quesadillaR.burnessB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 1.05
          }
        }
        if (gameState.quesadillaR.hasCheese) {gameState.derritiendo ? gameState.quesadillaR.cheesness += 1.4 : gameState.quesadillaR.cheesness += 0.7}
        if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Amarillo" ) {
          gameState.QSlotR.setTexture("Dquesoam")
        } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Blanco") {
          gameState.QSlotR.setTexture("Dquesobl")
        } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Oaxaca") {
          gameState.QSlotR.setTexture("Dquesoox")
        } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Mozzarella") {
          gameState.QSlotR.setTexture("Dquesomoz")
        }
        //Cambiar la tortilla del lado que inicia abajo
        if (gameState.quesadillaR.burnessA > 1332 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("pampita_b3")
        } else
        if (gameState.quesadillaR.burnessA > 924 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("pampita_b2")
        } else
        if (gameState.quesadillaR.burnessA > 528 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("pampita_b1")
        } else
        if (gameState.quesadillaR.burnessA >= 0 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("Ipampita")
        }
        //Cambiar la tortilla del lado que inicia arriba
        if (gameState.quesadillaR.burnessB > 1332 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("pampita_b3")
        } else
        if (gameState.quesadillaR.burnessB > 924 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("pampita_b2")
        } else
        if (gameState.quesadillaR.burnessB > 528 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("pampita_b1")
        } else
        if (gameState.quesadillaR.burnessB >= 0 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.TSlotL.setTexture("Ipampita")
        }
        }
    }

    function burnCL() {
      if (leftslotisO) {
        if (!gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.quesadillaL.burnessA += 12;
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 1.05
          }
        } else if (gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.quesadillaL.burnessB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 1.05
          }
        } else if (!gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flfofl) {
          gameState.quesadillaL.burnessAA += 12
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 0.525
          }
        } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.burnessBA += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 0.525
          }
        } else if (gameState.quesadillaL.flipped && gameState.quesadillaL.folded && !gameState.quesadillaL.flitfold) {
          gameState.quesadillaL.burnessAB += 12
          if (gameState.burnessLL.height > -148) {
            gameState.burnessLL.height -= 0.525
          }
        } else if (gameState.quesadillaL.flfofl) {
          gameState.quesadillaL.burnessBB += 12
          if (gameState.burnessLR.height > -148) {
            gameState.burnessLR.height -= 0.525
          }
        }
        if (gameState.quesadillaL.hasCheese) {gameState.derritiendo ? gameState.quesadillaL.cheesness += 1.4 : gameState.quesadillaL.cheesness += 0.7}
        if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Amarillo" ) {
          gameState.QSlotL.setTexture("Dquesoam")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Blanco") {
          gameState.QSlotL.setTexture("Dquesobl")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Oaxaca") {
          gameState.QSlotL.setTexture("Dquesoox")
        } else if (gameState.quesadillaL.cheesness >= 70 && gameState.quesadillaL.queso === "Queso Mozzarella") {
          gameState.QSlotL.setTexture("Dquesomoz")
        }
        //Cambiar la tortilla del lado que inicia abajo
        if (gameState.quesadillaL.burnessA > 1332 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("crepa_b3")
        } else
        if (gameState.quesadillaL.burnessA > 924 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("crepa_b2")
        } else
        if (gameState.quesadillaL.burnessA > 528 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("crepa_b1")
        } else
        if (gameState.quesadillaL.burnessA >= 0 && gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Icrepa")
        }
        //Cambiar la tortilla del lado que inicia arriba
        if (gameState.quesadillaL.burnessB > 1332 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("crepa_b3")
        } else
        if (gameState.quesadillaL.burnessB > 924 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("crepa_b2")
        } else
        if (gameState.quesadillaL.burnessB > 528 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("crepa_b1")
        } else
        if (gameState.quesadillaL.burnessB >= 0 && !gameState.quesadillaL.flipped && !gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Icrepa")
        }
        //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
        if (gameState.quesadillaL.burnessAA > 1332 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fcrepa_b3")
        } else
        if (gameState.quesadillaL.burnessAA > 924 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fcrepa_b2")
        } else
        if (gameState.quesadillaL.burnessAA > 528 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fcrepa_b1")
        } else
        if (gameState.quesadillaL.burnessAA >= 0 && !gameState.quesadillaL.flitfold && gameState.quesadillaL.flipped && gameState.quesadillaL.folded) {
          gameState.TSlotL.setTexture("Fcrepa")
          console.log("2")
        }
        //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
        if (gameState.quesadillaL.burnessAB > 1332 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fcrepa_b3")
        } else
        if (gameState.quesadillaL.burnessAB > 924 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fcrepa_b2")
        } else
        if (gameState.quesadillaL.burnessAB > 528 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fcrepa_b1")
        } else
        if (gameState.quesadillaL.burnessAB >= 0 && gameState.quesadillaL.folded && !gameState.quesadillaL.flipped) {
          gameState.TSlotL.setTexture("Fcrepa")
          console.log("3")
        }
        //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
        if (gameState.quesadillaL.burnessBA > 1332 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fcrepa_b3")
        } else
        if (gameState.quesadillaL.burnessBA > 924 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fcrepa_b2")
        } else
        if (gameState.quesadillaL.burnessBA > 528 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fcrepa_b1")
        } else
        if (gameState.quesadillaL.burnessBA >= 0 && gameState.quesadillaL.flfofl) {
          gameState.TSlotL.setTexture("Fcrepa")
          console.log("4")
        }
        //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
        if (gameState.quesadillaL.burnessBB > 1332 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fcrepa_b3")
        } else
        if (gameState.quesadillaL.burnessBB > 924 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fcrepa_b2")
        } else
        if (gameState.quesadillaL.burnessBB > 528 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fcrepa_b1")
        } else
        if (gameState.quesadillaL.burnessBB >= 0 && gameState.quesadillaL.flitfold) {
          gameState.TSlotL.setTexture("Fcrepa")
          console.log("1")
        }
        }
    }

    function burnCR() {
      if (rightslotisO) {
        if (!gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessA += 12;
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 1.05
          }
        } else if (gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
          gameState.quesadillaR.burnessB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 1.05
          }
        } else if (!gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessAA += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessBA += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        } else if (gameState.quesadillaR.flipped && gameState.quesadillaR.folded && !gameState.quesadillaR.flitfold) {
          gameState.quesadillaR.burnessAB += 12
          if (gameState.burnessRL.height > -148) {
            gameState.burnessRL.height -= 0.525
          }
        } else if (gameState.quesadillaR.flfofl) {
          gameState.quesadillaR.burnessBB += 12
          if (gameState.burnessRR.height > -148) {
            gameState.burnessRR.height -= 0.525
          }
        }
        if (gameState.quesadillaR.hasCheese) {gameState.derritiendo ? gameState.quesadillaR.cheesness += 1.4 : gameState.quesadillaR.cheesness += 0.7}
          if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Amarillo" ) {
            gameState.QSlotR.setTexture("Dquesoam")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Blanco") {
            gameState.QSlotR.setTexture("Dquesobl")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Oaxaca") {
            gameState.QSlotR.setTexture("Dquesoox")
          } else if (gameState.quesadillaR.cheesness >= 70 && gameState.quesadillaR.queso === "Queso Mozzarella") {
            gameState.QSlotR.setTexture("Dquesomoz")
          }
          //Cambiar la tortilla del lado que inicia abajo
          if (gameState.quesadillaR.burnessA > 1332 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("crepa_b3")
          } else
          if (gameState.quesadillaR.burnessA > 924 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("crepa_b2")
          } else
          if (gameState.quesadillaR.burnessA > 528 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("crepa_b1")
          } else
          if (gameState.quesadillaR.burnessA >= 0 && gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Icrepa")
          }
          //Cambiar la tortilla del lado que inicia arriba
          if (gameState.quesadillaR.burnessB > 1332 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("crepa_b3")
          } else
          if (gameState.quesadillaR.burnessB > 924 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("crepa_b2")
          } else
          if (gameState.quesadillaR.burnessB > 528 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("crepa_b1")
          } else
          if (gameState.quesadillaR.burnessB >= 0 && !gameState.quesadillaR.flipped && !gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Icrepa")
          }
          //Cambiar la tortilla del lado que inicia hacia abajo cerca del jugador
          if (gameState.quesadillaR.burnessAA > 1332 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fcrepa_b3")
          } else
          if (gameState.quesadillaR.burnessAA > 924 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fcrepa_b2")
          } else
          if (gameState.quesadillaR.burnessAA > 528 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fcrepa_b1")
          } else
          if (gameState.quesadillaR.burnessAA >= 0 && !gameState.quesadillaR.flitfold && gameState.quesadillaR.flipped && gameState.quesadillaR.folded) {
            gameState.TSlotR.setTexture("Fcrepa")
            console.log("2")
          }
          //Cambiar la tortilla de lado que inicia hacia abajo lejos del jugador
          if (gameState.quesadillaR.burnessAB > 1332 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fcrepa_b3")
          } else
          if (gameState.quesadillaR.burnessAB > 924 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fcrepa_b2")
          } else
          if (gameState.quesadillaR.burnessAB > 528 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fcrepa_b1")
          } else
          if (gameState.quesadillaR.burnessAB >= 0 && gameState.quesadillaR.folded && !gameState.quesadillaR.flipped) {
            gameState.TSlotR.setTexture("Fcrepa")
            console.log("3")
          }
          //Cambiar la tortilla de lado que inicia hacia arriba cerca del jugador
          if (gameState.quesadillaR.burnessBA > 1332 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fcrepa_b3")
          } else
          if (gameState.quesadillaR.burnessBA > 924 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fcrepa_b2")
          } else
          if (gameState.quesadillaR.burnessBA > 528 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fcrepa_b1")
          } else
          if (gameState.quesadillaR.burnessBA >= 0 && gameState.quesadillaR.flfofl) {
            gameState.TSlotR.setTexture("Fcrepa")
            console.log("4")
          }
          //Cambiar la tortilla del lado que inicia hacia arriba lejos del jugador
          if (gameState.quesadillaR.burnessBB > 1332 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fcrepa_b3")
          } else
          if (gameState.quesadillaR.burnessBB > 924 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fcrepa_b2")
          } else
          if (gameState.quesadillaR.burnessBB > 528 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fcrepa_b1")
          } else
          if (gameState.quesadillaR.burnessBB >= 0 && gameState.quesadillaR.flitfold) {
            gameState.TSlotR.setTexture("Fcrepa")
            console.log("1")
          }
      }
    }
    gameState.send = this.add.sprite(238, 680, "send");
    gameState.sendL = this.add.sprite(88, 680, "sendL")
    gameState.send.setInteractive()
    gameState.sendL.setInteractive()
    gameState.send.on("pointerdown", function(){
      if (rightslotisO) {
        gameState.burnRT.remove()
        gameState.score += getScoreR()
        if (gameState.score - localStorage.getItem("localscore") >= 115) {
          gameState.score = 0
        } 
        localStorage.setItem("localscore", gameState.score)
        gameState.TSlotR.destroy()
        if (typeof gameState.QSlotR !== "undefined") {gameState.QSlotR.destroy(); gameState.QSlotR = undefined}
        if (typeof gameState.PSlotR !== "undefined") {gameState.PSlotR.destroy(); gameState.PSlotR = undefined}
        if (typeof gameState.PSlot2R !== "undefined") {gameState.PSlot2R.destroy(); gameState.PSlot2R = undefined}
        if (typeof gameState.PSlot3R !== "undefined") {gameState.PSlot3R.destroy(); gameState.PSlot3R = undefined}
        if (typeof gameState.VSlotR !== "undefined") {gameState.VSlotR.destroy(); gameState.VSlotR = undefined}
        if (typeof gameState.VSlot2R !== "undefined") {gameState.VSlot2R.destroy(); gameState.VSlot2R = undefined}
        if (typeof gameState.CSlotR !== "undefined") {gameState.CSlotR.destroy(); gameState.CSlotR = undefined}
        if (typeof gameState.CSlot2R !== "undefined") {gameState.CSlot2R.destroy(); gameState.CSlot2R = undefined}
        gameState.quesadillaR = undefined
        rightslotisO = false
        gameState.burnessRL.height = 0
        gameState.burnessRR.height = 0
        leveling()
        gameState.recetaR = recipe()
        if (gameState.inleft) {
          gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
        } else {
          gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Derecha-----` + gameState.recetaR)
        }
        if (gameState.index < 13) {
          gameState.cambiar = game.add.sprite(180, 600, "change")
          gameState.cambiar.setInteractive()
          gameState.cambiar.on("pointerdown", function(){
            gameState.inleft = !gameState.inleft
            if (gameState.inleft) {
              gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
            } else {
              gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Derecha-----` + gameState.recetaR)
            }
            console.log("holiholi")
          })
        }
      }
    })
    gameState.sendL.on("pointerdown", function(){
      if (leftslotisO) {
        gameState.burnLT.remove()
        gameState.score += getScoreL()
        if (gameState.score - localStorage.getItem("localscore") >= 115) {
          gameState.score = 0
        } 
        localStorage.setItem("localscore", gameState.score)
        gameState.TSlotL.destroy()
        if (typeof gameState.QSlotL !== "undefined") {gameState.QSlotL.destroy(); gameState.QSlotL = undefined}
        if (typeof gameState.PSlotL !== "undefined") {gameState.PSlotL.destroy(); gameState.PSlotL = undefined}
        if (typeof gameState.PSlot2L !== "undefined") {gameState.PSlot2L.destroy(); gameState.PSlot2L = undefined}
        if (typeof gameState.PSlot3L !== "undefined") {gameState.PSlot3L.destroy(); gameState.PSlot3L = undefined}
        if (typeof gameState.VSlotL !== "undefined") {gameState.VSlotL.destroy(); gameState.VSlotL = undefined}
        if (typeof gameState.VSlot2L !== "undefined") {gameState.VSlot2L.destroy(); gameState.VSlot2L = undefined}
        if (typeof gameState.CSlotL !== "undefined") {gameState.CSlotL.destroy(); gameState.CSlotL = undefined}
        if (typeof gameState.CSlot2L !== "undefined") {gameState.CSlot2L.destroy(); gameState.CSlot2L = undefined}
        gameState.quesadillaL = undefined
        leftslotisO = false
        gameState.burnessLL.height = 0
        gameState.burnessLR.height = 0
        leveling()
        gameState.recetaL = recipe()
        if (gameState.inleft) {
          gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
        } else {
          gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Derecha-----` + gameState.recetaR)
        }
        if (gameState.index < 13) {
          gameState.cambiar = game.add.sprite(180, 600, "change")
          gameState.cambiar.setInteractive()
          gameState.cambiar.on("pointerdown", function(){
            gameState.inleft = !gameState.inleft
            if (gameState.inleft) {
              gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Izquierda-----` + gameState.recetaL)
            } else {
              gameState.content.setText(`Nivel: ${gameState.level}\nPuntos: ${gameState.score}\n-----Derecha-----` + gameState.recetaR)
            }
            console.log("holiholi")
          })
        }

      }
    })
    function tipsloop() {
      if (gameState.tips.text === "Bienvenido a la Cocina" || gameState.consejos.includes(gameState.tips.text)) {
          gameState.tips.setText(gameState.consejos[Math.floor(Math.random() * 17)])
      }
    }
    game.time.addEvent({
      callback: tipsloop,
      delay: 6000,
      callbackScope: true,
      loop: true
    })
  }

  update() {
    
    if (gameState.page === 1) {
      gameState.pollo.setDepth(-1);
      gameState.omelette.setDepth(-1);
      gameState.espinaca.setDepth(-1);
      gameState.lechuga.setDepth(-1);
      gameState.champinon.setDepth(-1);
      gameState.sal.setDepth(-1);
      gameState.crema.setDepth(-1);
      gameState.quesoox.setDepth(-1);
      gameState.jamonser.setDepth(-1);
      gameState.panpita.setDepth(-1);
      gameState.marinara.setDepth(-1);
      gameState.pepperoni.setDepth(-1);
      if (gameState.level >= 0) {
        gameState.harina.setDepth(1);
        gameState.maiz.setDepth(1);
        gameState.quesoa.setDepth(1);
        gameState.jamon.setDepth(1);
      }
      if (gameState.level >= 1) {
        gameState.salchicha.setDepth(1);
      }
      if (gameState.level >= 2) {
        gameState.chile.setDepth(1);
      }
      if (gameState.level >= 3) {
        gameState.pescado.setDepth(1);
      }
      if (gameState.level >= 4) {
        gameState.carne.setDepth(1);
      }
      if (gameState.level >= 5) {
        gameState.bacon.setDepth(1);
      }
      if (gameState.level >= 6) {
        gameState.quesobl.setDepth(1);
      }
      if (gameState.level >= 7) {
        gameState.salmon.setDepth(1);
      }
      if (gameState.level >= 8) {
        gameState.ketchup.setDepth(1);
      }
    }
    if (gameState.page === 2) {
      gameState.harina.setDepth(-1);
      gameState.maiz.setDepth(-1);
      gameState.quesoa.setDepth(-1);
      gameState.jamon.setDepth(-1);
      gameState.salchicha.setDepth(-1);
      gameState.chile.setDepth(-1);
      gameState.pescado.setDepth(-1);
      gameState.carne.setDepth(-1);
      gameState.bacon.setDepth(-1);
      gameState.quesobl.setDepth(-1);
      gameState.salmon.setDepth(-1);
      gameState.ketchup.setDepth(-1);
      gameState.pollo.setDepth(-1);
      gameState.frijoles.setDepth(-1);
      gameState.crepa.setDepth(-1);
      gameState.mermelada.setDepth(-1);
      gameState.platano.setDepth(-1);
      gameState.salsar.setDepth(-1);
      gameState.salsav.setDepth(-1);
      gameState.choco.setDepth(-1);
      gameState.cebolla.setDepth(-1);
      gameState.fresa.setDepth(-1);
      gameState.chipotle.setDepth(-1)
      gameState.mole.setDepth(-1)
      gameState.atun.setDepth(-1)
      if (gameState.level >= 9) {
        gameState.omelette.setDepth(1);
      }
      if (gameState.level >= 10) {
        gameState.espinaca.setDepth(1);
        gameState.lechuga.setDepth(1);
      }
      if (gameState.level >= 11) {
        gameState.champinon.setDepth(1);
      }
      if (gameState.level >= 12) {
        gameState.sal.setDepth(1);
        gameState.crema.setDepth(1);
      }
      if (gameState.level >= 13) {
        gameState.quesoox.setDepth(1);
      }
      if (gameState.level >= 14) {
        gameState.jamonser.setDepth(1);
      }
      if (gameState.level >= 15) {
        gameState.panpita.setDepth(1);
        gameState.marinara.setDepth(1);
        gameState.pepperoni.setDepth(1);
      }
      if (gameState.level >= 16) {
        gameState.pollo.setDepth(1);
      }
    }
    if (gameState.page === 3) {
      gameState.omelette.setDepth(-1);
      gameState.espinaca.setDepth(-1);
      gameState.lechuga.setDepth(-1);
      gameState.champinon.setDepth(-1);
      gameState.sal.setDepth(-1);
      gameState.crema.setDepth(-1);
      gameState.quesoox.setDepth(-1);
      gameState.jamonser.setDepth(-1);
      gameState.panpita.setDepth(-1);
      gameState.marinara.setDepth(-1);
      gameState.pepperoni.setDepth(-1);
      gameState.pollo.setDepth(-1);
      gameState.jamonbell.setDepth(-1)
      gameState.camaron.setDepth(-1)
      gameState.aguacate.setDepth(-1)
      gameState.pimiento.setDepth(-1)
      gameState.wagyu.setDepth(-1)
      gameState.quesoman.setDepth(-1)
      if (gameState.level >= 17) {
        gameState.frijoles.setDepth(1);
      }
      if (gameState.level >= 18) {
        gameState.crepa.setDepth(1);
      }
      if (gameState.level >= 19) {
        gameState.fresa.setDepth(1);
      }
      if (gameState.level >= 20) {
        gameState.choco.setDepth(1);
        gameState.mermelada.setDepth(1);
      }
      if (gameState.level >= 21) {
        gameState.platano.setDepth(1);
      }
      if (gameState.level >= 22) {
        gameState.cebolla.setDepth(1);
      }
      if (gameState.level >= 23) {
        gameState.salsar.setDepth(1);
        gameState.salsav.setDepth(1);
      }
      if (gameState.level >= 24) {
        gameState.chipotle.setDepth(1)
      }
      if (gameState.level >= 25) {
        gameState.mole.setDepth(1)
        gameState.atun.setDepth(1)
      }
    }
    if (gameState.page === 4) {
      gameState.pollo.setDepth(-1);
      gameState.frijoles.setDepth(-1);
      gameState.crepa.setDepth(-1);
      gameState.mermelada.setDepth(-1);
      gameState.platano.setDepth(-1);
      gameState.salsar.setDepth(-1);
      gameState.salsav.setDepth(-1);
      gameState.choco.setDepth(-1);
      gameState.cebolla.setDepth(-1);
      gameState.fresa.setDepth(-1);
      gameState.chipotle.setDepth(-1)
      gameState.mole.setDepth(-1)
      gameState.atun.setDepth(-1)
      if (gameState.level >= 26) {
        gameState.jamonbell.setDepth(1);
      }
      if (gameState.level >= 27) {
       gameState.quesoman.setDepth(1) 
      }
      if (gameState.level >= 28) {
        gameState.camaron.setDepth(1)
      }
      if (gameState.level >= 29) {
        gameState.aguacate.setDepth(1)
        gameState.pimiento.setDepth(1)
      }
      if (gameState.level >= 30) {
        gameState.wagyu.setDepth(1)
      }
    }
  }
}

const config = {
  width: 1280,
  height: 720,
  backgroundColor: "#f59b42",
  scene: [Titulo,Juego],
};

const game = new Phaser.Game(config);
