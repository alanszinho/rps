var bot = document.getElementById("bot");
var text = document.getElementById("narrator");
var result = document.getElementById("result");
var wins = 0;
var counter = document.getElementById("counter");

function play(user) {
    var computer = Math.round(Math.random() * 2) + 1;

    document.getElementById("bot").classList.add("animate-bot");

    setTimeout(function() {
        document.getElementById("bot").classList.remove("animate-bot");
        switch(computer) {
            case 1:
                var emoji = '✊';
                switch(user) {
                    case 1:
                        bot.innerHTML = 'ughh';
                        texto.innerHTML = 'Its a tie!';
                        break;
                    case 2: 
                        bot.innerHTML = 'Oh no..';
                        texto.innerHTML = 'You won!';
                        break;
                    case 3:
                        bot.innerHTML = 'yeah';
                        texto.innerHTML = 'you lost';
                        break;
                };
                break;
            case 2:
                var emoji = '🖐️';
                switch(user) {
                    case 1:
                        bot.innerHTML = 'yess';
                        texto.innerHTML = 'you lost';
                        break;
                    case 2: 
                        bot.innerHTML = 'lol';
                        texto.innerHTML = 'Its a tie!';
                        break;
                    case 3:
                        bot.innerHTML = "oh no..";
                        texto.innerHTML = 'You won!';
                        break;
                };
                break;
            case 3:
                var emoji = '✌️';
                switch(user) {
                    case 1:
                        bot.innerHTML = 'Yeahs!';
                        texto.innerHTML = 'you lost';
                        break;
                    case 2: 
                        bot.innerHTML = 'oh god';
                        texto.innerHTML = 'you won!';
                        break;
                    case 3:
                        bot.innerHTML = "*yawns*";
                        texto.innerHTML = 'Its a tie!';
                        break;
                };
                break;
        };
        bot.innerHTML = `🤖${emoji}: ${bot.innerHTML}`;

        result.innerHTML = `You choose ${getchoice(user)}, the bot choose ${getchoice(computer)}. ${getResult(user, computer)}`;

        if (getResult(user, computer) === true) {
            wins++;
            counter.textContent = wins;
        }
    }, 300);
}

function getchoice(option) {
    switch(option) {
        case 1:
            return '✊ Rock';
        case 2:
            return '🖐️ Paper';
        case 3:
            return '✌️ Scissors';
        default:
            return '';
    }
}

function getResult(user, computer) {
    switch(usuario) {
        case 1:
            return computer === 1 ? false : (computador === 2 ? 'false' : 'true');
        case 2:
            return computer === 1 ? true : (computador === 2 ? false : false);
        case 3:
            return computer === 1 ? false : (computador === 2 ? true : false);
        default:
            return '';
    }
}
