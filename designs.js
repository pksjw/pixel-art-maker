// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("input[type='submit']").on('click', function makeGrid(event) {
    // prevent page refreshing when clicking submit
    event.preventDefault();

    let grid = $('#pixelCanvas');
    let rows = $("#inputHeight").val();
    let columns = $("#inputWidth").val();
    grid.children().remove(); // clean up any previous table rows that exsit

//Build the grid row by row
    for (let r=1; r <= rows; r++) {
        let tableRow = '<tr>';
        for (let c=1; c <= columns; c++) {
            tableRow += '<td></td>';
        }
        tableRow += '</tr>';
        $(grid).append(tableRow); // add grid to DOM
    }
// Listen for click and double click on the grid

    grid.on("dblclick", "td", function(event) {
        $(this).css("background-color", "transparent");
    });
    grid.on("click", "td", function() {
        $(this).css("background-color", $("#colorPicker").val());
    });
});
