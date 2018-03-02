// Create a grid that a user can color with clicks
//   - allows grid size entry and color selection

// When size is submitted by the user, call makeGrid()

$("input[type='submit']").on('click', function makeGrid(event) {
    // prevent page refreshing when clicking submit
    event.preventDefault();

    let grid = $('#pixelCanvas');
    let rows = $("#inputHeight").val();
    let columns = $("#inputWidth").val();
    grid.children().remove(); // delete any previous table rows

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
