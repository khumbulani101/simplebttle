function showResult() {
    var character1 = document.getElementById('character1').value;
    var character2 = document.getElementById('character2').value;
    var result = determineWinner(character1, character2);
    document.getElementById('result').innerHTML = result;
}
function determineWinner(character1, character2) {
    // Define attributes and scores for each character
    // This is a simplified example, and you can customize the scores based on your preferences

    var attributes = ['intelligence', 'speed', 'strength', 'stamina'];

    var characterScores = {
        'superman': [80, 90, 95, 90],
        'batman': [95, 60, 75, 70],
        'spiderman': [80, 85, 70, 86],
        'wonderwoman': [85, 60, 70, 80],
        'ironman': [90, 70, 75, 75],
        'goku': [71, 95, 92, 90],
        'naruto': [71, 80, 90, 90],
        'saitama': [50, 100, 100, 80],
        'luffy': [59, 50, 100, 75],
        'captainamerica': [75, 70, 85, 80],
        'thor': [80, 85, 95, 90],
        'hulk': [65, 70, 100, 80],
        'narutosasuke': [90, 85, 88, 85],
        'vegeta': [85, 90, 92, 70],
        'ichigo': [75, 80, 85, 75],
        // Add more characters and their attribute scores as needed
    };

    // Get the attribute scores of each character
    var scores1 = characterScores[character1] || Array(attributes.length).fill(0);
    var scores2 = characterScores[character2] || Array(attributes.length).fill(0);

    // Calculate the total scores for each character
    var totalScore1 = scores1.reduce((total, score) => total + score, 0);
    var totalScore2 = scores2.reduce((total, score) => total + score, 0);

    // Compare total scores
    if (totalScore1 > totalScore2) {
        return character1 + ' is stronger overall and has a higher chance of winning!';
    } else if (totalScore1 < totalScore2) {
        return character2 + ' is stronger overall and has a higher chance of winning!';
    } else {
        return 'It\'s a tie! Both characters have similar overall strength.';
    }
}
