const player = {
    Name : 'Sunbum',
    Dead : false,
    Age : 26
};

if (!player.Dead) {
    console.log('player is dead TWT')
    player.Dead = "Sunbum is dead.."
    player.Age = player.Age + 400
    console.log(player)
}
else{
    player.lastName = "kwon"
    player.Dead = "Sunbum is alive!"
    console.log(player)
}
