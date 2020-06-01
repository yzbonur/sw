
(function(global) {
    var our_tag = document.getElementById('salahtimes');

    // Create our style, you can override it using !important on your site
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.salah_footer,.salah_header{display:block;position:relative}.salah_widget{width:100%;font-size:16px;display:block;background-color:#fff;-webkit-box-shadow:#aaa 0 0 5px;-moz-box-shadow:#aaa 0 0 5px;box-shadow:#aaa 0 0 5px;margin:0 0 2em}.salah_widget a{color:#777}.salah_header{margin:0;min-height:36px;padding:10px;background-color:#d9edf7;color:#000;font-size:1em;font-style:italic;text-align: center;}.salah_table{width:100%;border-spacing:0;font-size:1em;color:#000}.salah_table tr{height:30px;background-color:#fff}.salah_table tr:nth-child(2n){background-color:#dff0d8}.salah_table td{text-align:right;padding:4px 8px 4px 4px}.salah_table td:nth-child(2){font-weight:700;text-align:left;padding:4px 4px 4px 8px}.daterow{width:100%;text-align:center;padding:4px}.salah_footer{margin:0 0 1em;font-size:.8em;padding:5px 10px;background-color:#d9edf7;color:#000;text-align:center}.salah_footer,.salah_header,.salah_widget{-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;border-radius:4px}';
    // Add rules to head
    document.getElementsByTagName('head')[0].appendChild(style);

    var widget = document.createElement('div');
    widget.className = 'salah_widget';

    var header = document.createElement('div');
    header.className = 'salah_header';
    header.innerHTML = 'Prayer Times For Elâzığ, Elazığ';

    var table = document.createElement('table');
    table.className = 'salah_table';

    var body = document.createElement('tbody');
    var tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="2"><div class="daterow">Mon Jun 1st, 2020</div></td>';
    body.appendChild(tr);

    
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Fajr</td><td>3:29 AM</td>';
    body.appendChild(tr);
    
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Duha</td><td>5:00 AM</td>';
    body.appendChild(tr);
    
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Dhuhr</td><td>12:21 PM</td>';
    body.appendChild(tr);
    
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Asr</td><td>4:16 PM</td>';
    body.appendChild(tr);
    
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Maghrib</td><td>7:42 PM</td>';
    body.appendChild(tr);
    
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>Isha</td><td>9:13 PM</td>';
    body.appendChild(tr);
    
    table.appendChild(body);
    widget.appendChild(header);
    widget.appendChild(table);

        var footer = document.createElement('div');
    footer.className = 'salah_footer';
    footer.innerHTML = 'Powered by <a href="http://www.SalahHour.com" target="_blank">SalahHour.com</a>';
    widget.appendChild(footer);
    
    our_tag.parentNode.insertBefore(widget, our_tag);
}(this));
