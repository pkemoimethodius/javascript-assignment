const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradeGenerator(marks){
    if (marks<40){
        return 'E';
    }else if(marks>40 && marks<50){
        return 'D';
    }else if (marks>=50 && marks<60){
        return 'C';
    }else if(marks>=60 && marks <79){
        return 'B';
    }else {
        return 'A';
    }

    }

rl.question("Enter the  score?: ", function(score) {
    score = parseInt(score);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log('Invalid');
    } else {

        const grade = studentGradeGenerator(score);
        console.log(`Your grade is: ${grade}`);
    }

    // Close the readline interface;
    rl.close();
})