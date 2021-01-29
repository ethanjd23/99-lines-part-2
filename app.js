
let friends = ["Abbie", 'Emily', 'Mordecai', 'Bethaney', 'Lindsey']


window.addEventListener('DOMContentLoaded', domLoad);

function domLoad() {
    let button = document.getElementById('btn');
    button.addEventListener('click', sing);
}

function sing() {
    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement('h3');
        let h3Text = document.createTextNode(friends[i]);
        friendDiv.appendChild(h3Text);
        friendDiv.className = 'friend';
        document.body.appendChild(friendDiv);

        for (let lineNumber = 99; lineNumber > 0; lineNumber--) {
            if (lineNumber > 1) {
                let songP = document.createElement('p');
                let songPText = document.createTextNode(lineNumber + " lines of code in the file, " + lineNumber + " lines of code; " + friends[i] +' strikes one out, clears it all out, ' + lineNumber + " lines of code in the file.");
                songP.appendChild(songPText);
                songP.className = [i];
                songP.id = lineNumber
                document.body.appendChild(songP);
            } else {
                let songP = document.createElement('p');
                let songPText = document.createTextNode(lineNumber + " line of code in the file, " + lineNumber + " line of code; " + friends[i] +' strikes one out, clears it all out, ' + lineNumber + " line of code in the file.");
                songP.appendChild(songPText);
                songP.className = "lyrics"
                songP.id = [i] + ' ' + lineNumber
                document.body.appendChild(songP);
            };
        };
    };
};