function speedDetector(speed){
    if (speed <=70){
        return console.log('OK');
    }else{
        let points= math.floor((speed-70)/5);
        if (points >=12){
            return console.log ('license suspended');
        }else{
            return console.log ('points: ' + points);
        }
    }
}

console.log(speedDetector())