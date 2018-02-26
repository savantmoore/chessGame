function generateBoardHTML() {
    var chessBoard = document.getElementById('chessBoard');

    for (var row = 0; row < 8; row++) {
        var boardRow = chessBoard.insertRow(row);

        for (var col = 0; col < 8; col++) {
            var boardSquare = boardRow.insertCell(col);

            boardSquare.id = '(' + row + ',' + col + ')';
            //Changed here
            boardSquare.classList.add((row + col) % 2 == 0 ? 'whiteSquare' : 'blackSquare');
            //boardSquare.innerHTML = boardSquare.class;
        }
    }
}

generateBoardHTML();
