// Optional JS to equalize row heights (not necessary with this updated layout)
window.addEventListener("load", function() {
    var rows = document.querySelectorAll("#responsiveTable tbody tr");

    // Get the max height of all rows
    var maxHeight = 0;
    rows.forEach(function(row) {
        maxHeight = Math.max(maxHeight, row.clientHeight);
    });

    // Apply max height to all rows
    rows.forEach(function(row) {
        row.style.height = maxHeight + "px";
    });
});
