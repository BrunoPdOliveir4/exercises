const rooms = [
    {name: "room1", status: "available", beds: 3},
    {name: "room2", status: "available", beds: 2},
    {name: "room3", status: "unavailable", beds: 3},
];

// Função pura
function verifyAvailableRooms(array = rooms){
    return array.filter((room) => room.status === "available");
}

// Currying: função que retorna outra função
function verifyQuantityOfBeds(quantity) {
    return function(array = rooms) {
        return array.filter((room) => room.beds >= quantity);
    };
}

// Função impura
function reserve(room){
    const index = rooms.findIndex(r => r.name === room.name);
    if(index !== -1){
        rooms[index].status = "unavailable";
        console.log(`${room.name} foi reservado.`);
    }
}

// Aplicação
const availableRooms = verifyAvailableRooms();
const withBeds = verifyQuantityOfBeds(3)(availableRooms); //aplicando currying
reserve(withBeds[0]);
