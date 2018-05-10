var footer = document.getElementsByClassName('footer')[0];
var dlLen = footer.children;

function change() {
    for (var i = 0; i < dlLen.length; i++) {
        dlLen[i].className = '';
    }
    dlLen[index].className = 'show';
}

for (var i = 0; i < dlLen.length; i++) {
    dlLen[i].index = i;

    dlLen[i].onclick = function() {
        index = this.index;
        change()
    }
}