function luckySeven(){
    var bet = document.getElementById("bet").value
    bet = Math.floor(bet)
    if(bet <= 0){
        document.getElementById("err").innerHTML = "Bet must be greater than $0"
        document.getElementById("results").className = "d-none"
    }
    else{
        var dict = {
            'start': bet,
            'max': bet,
            'rolls': 0,
            'total_rolls': 0
        }
        while(bet > 0){
            var roll1 = rollDice();
            var roll2 = rollDice();
            dict['total_rolls']++;
            if(roll1+roll2 == 7){
                bet += 4
                if(bet >= dict['max']){
                    dict['max'] = bet;
                    dict['rolls'] = dict['total_rolls'];
                }
            }
            else{
                bet -= 1
            }
        }
        document.getElementById("err").innerHTML = ""
        document.getElementById("results").className = ""
        document.getElementById("start").innerHTML = "$" + dict['start'] +".00"
        document.getElementById("total_rolls").innerHTML = dict['total_rolls']
        document.getElementById("max").innerHTML = "$" + dict['max'] + ".00"
        document.getElementById("max_rolls").innerHTML = dict['rolls']
    }
}

function rollDice(){
    return Math.floor(Math.random()*6) + 1
}