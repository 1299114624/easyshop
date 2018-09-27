function sendAjax(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/shop.json', true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            // for(var i = 0; i < result.length; i++) {
            //     result[i].age += 1;
            // }
            console.log(result)
            if (typeof callback === 'function') {
                callback(result);
            }
        }
    }
}