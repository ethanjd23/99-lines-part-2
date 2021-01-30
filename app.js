
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

        for (let j = 99; j > 0; j--) {
            if (j > 1) {
                let songP = document.createElement('p');
                let songPText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] +' strikes one out, clears it all out, ' + j + " lines of code in the file.");
                songP.appendChild(songPText);
                songP.className = j;
                songP.id = [i] + j;

                let lyricColor = "rgb(155, 102, " + j + ")";
                
                songP.style.color = lyricColor;
                document.body.appendChild(songP);
            } else {
                let songP = document.createElement('p');
                let songPText = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] +' strikes one out, clears it all out, ' + j + " line of code in the file.");
                songP.appendChild(songPText);
                songP.className = [i];
                songP.id = [i] + j;

                let lyricColor = "rgb(155, 102, " + j + ")";

                songP.style.color = lyricColor;
                document.body.appendChild(songP);
            };
        };
    };
};