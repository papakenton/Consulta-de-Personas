// <script src="C: > Users > juanm > OneDrive > Documents > Programacion > PapaParse-5.0.2"></script>
var excelFilePath = 'ruta/al/archivo.csv';

var config = {
    delimeter: ',',
    header: true,
    complete: function(results) {
        var table = document.getElementById('data-table');
        var data = results.data;

        var thead = document.createElement('thead');
        var headers = Object.keys(data[0]);
        var headerRow = document.createElement('tr');
        
        headers.forEach(function(header) {
            var th = document.createElement_('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.aapendChild(thead);
        
        var tbody = document.createElement('tbody');
        data.forEach(function(row) {
            var tr = document.createElement('tr');
            
            headers.forEach(function(hrader) {
                var td = document.createElement('td');
                td.textContent = row[header];
                tr.appendChild(td);
            });

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    }
};
Papa.parse(exelFilePath, config);