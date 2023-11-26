var bot = document.getElementById("bot");
var text = document.getElementById("narrator");
function play(pc) {
    var bc = Math.round(Math.random() * 2) + 1;
    console.log(bc)
    switch(bc) {
        case 1:
            var emoji = '✊';
            switch(pc) {
                case 1:
                    bot.innerHTML = 'ughh';
                    text.innerHTML = 'Its a tie!';
                    break;
                case 2: 
                    bot.innerHTML = 'Oh no';
                    text.innerHTML = 'You won!';
                    break;
                case 3:
                    bot.innerHTML = "yeah";
                    text.innerHTML = 'you lost';
                    break;
            };
            break;
        case 2:
            var emoji = '🖐️';
            switch(pc) {
                case 1:
                    bot.innerHTML = 'yess';
                    text.innerHTML = 'you lost';
                    break;
                case 2: 
                    bot.innerHTML = 'lol';
                    text.innerHTML = 'Its a tie!';
                    break;
                case 3:
                    bot.innerHTML = "oh no..";
                    text.innerHTML = 'You won!';
                    break;
            };
            break;
        case 3:
            var emoji = '✌️';
            switch(pc) {
                case 1:
                    bot.innerHTML = 'Yeahs!';
                    text.innerHTML = 'you lost';
                    break;
                case 2: 
                    bot.innerHTML = 'oh god';
                    text.innerHTML = 'You won!';
                    break;
                case 3:
                    bot.innerHTML = "*yawns*";
                    text.innerHTML = 'Its a tie!';
                    break;
            };
            break;
    };
    bot.innerHTML = `🤖${emoji}: ${bot.innerHTML}`;
};