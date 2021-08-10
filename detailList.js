$.ajax({
    url: 'archive.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr data-style="' + data[i].styleclass + '" class="inactive ' + data[i].category + '"id="'+ i +'"><td class="date">' + data[i].date + '</td><td class="category">' + data[i].category + '</td><td class="title"><a>' + data[i].title + '<a/><img src="' + data[i].detailimg + '" class="' + data[i].detailimgclass + '"></td><td class="colab">' + data[i].colab + '</td></tr>');
            $('#archiveTable').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});



