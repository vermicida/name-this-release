
// Requires.
const Random = require("random-js");
const random = new Random(Random.engines.browserCrypto);

// The adjectives collection.
const adjectives = [
    "aburrido",
    "acido",
    "alegre",
    "alto",
    "amargo",
    "ancho",
    "atrevido",
    "azul",
    "bajo",
    "blanco",
    "blando",
    "bonito",
    "buen",
    "bueno",
    "caliente",
    "capaz",
    "central",
    "chungo",
    "comun",
    "conocido",
    "contento",
    "corto",
    "debil",
    "delgado",
    "derecho",
    "diferente",
    "dificil",
    "divertido",
    "dulce",
    "duro",
    "enfermo",
    "estrecho",
    "exterior",
    "facil",
    "falso",
    "famoso",
    "feo",
    "final",
    "fresco",
    "frio",
    "fuerte",
    "gordo",
    "grande",
    "guapo",
    "guay",
    "humedo",
    "igual",
    "imposible",
    "interesante",
    "interior",
    "inutil",
    "izquierdo",
    "joven",
    "largo",
    "lento",
    "listo",
    "malo",
    "masivo",
    "mayor",
    "mejor",
    "menor",
    "muerto",
    "musical",
    "nacional",
    "natural",
    "negro",
    "nuevo",
    "peor",
    "pequeno",
    "perfecto",
    "pobre",
    "poco",
    "popular",
    "posible",
    "primero",
    "principal",
    "proximo",
    "rapido",
    "raro",
    "real",
    "recto",
    "rico",
    "rojo",
    "salado",
    "sano",
    "seco",
    "segundo",
    "simple",
    "sinverguenza",
    "social",
    "solo",
    "soso",
    "timido",
    "tonto",
    "triste",
    "util",
    "verdadero",
    "verde",
    "viejo",
    "vivo"
];

// The abstract substantives collection.
const substantives = [
    "abnegacion",
    "abuso",
    "afecto",
    "aficion",
    "alegria",
    "amabilidad",
    "ambicion",
    "amistad",
    "amor",
    "anhelo",
    "ansia",
    "apatia",
    "astucia",
    "avaricia",
    "banalidad",
    "belleza",
    "bondad",
    "carino",
    "carisma",
    "certeza",
    "codicia",
    "congoja",
    "conjetura",
    "contento",
    "coraje",
    "cortesia",
    "creatividad",
    "creencia",
    "culpa",
    "depravacion",
    "deseo",
    "deseo",
    "desgano",
    "dogma",
    "dolo",
    "duelo",
    "educacion",
    "ego",
    "ente",
    "envidia",
    "escepticismo",
    "esperanza",
    "espiritualidad",
    "etica",
    "felicidad",
    "fortaleza",
    "fraternidad",
    "gula",
    "hambre",
    "hermandad",
    "honor",
    "honradez",
    "idea",
    "imaginacion",
    "ingenio",
    "inherencia",
    "injusticia",
    "inteligencia",
    "intuicion",
    "ira",
    "justicia",
    "karma",
    "libertad",
    "limpieza",
    "lujuria",
    "maldad",
    "miedo",
    "moral",
    "necedad",
    "nocion",
    "obsesion",
    "odio",
    "pasion",
    "paz",
    "pensamiento",
    "pereza",
    "piedad",
    "placer",
    "pobreza",
    "poder",
    "pureza",
    "rencor",
    "resignacion",
    "respeto",
    "sabiduria",
    "salud",
    "soledad",
    "solidaridad",
    "sueno",
    "suerte",
    "telepatia",
    "temor",
    "templanza",
    "ternura",
    "terquedad",
    "terror",
    "tiempo",
    "vanidad",
    "verdad",
    "verguenza",
    "virtud",
    "vitalidad"
];

module.exports = {
    // Generate a random substantive / adjective pair.
    generateRandomName: () => {
        return (random.pick(substantives) + "-" + random.pick(adjectives));
    }
};
