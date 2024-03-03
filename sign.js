window.onload = function() {
    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = 500;
    canvas.height = 400;
    
    
    

    var signaturePad = new SignaturePad(canvas);
    var wrapper = document.getElementById('signature-pad');
    wrapper.appendChild(canvas);

    var clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener( 'click', function(){
        signaturePad.clear();
    });

    var save = document.getElementById('download-btn');
    save.addEventListener('click', function(){
        if (signaturePad.isEmpty()) {
            alert("Please Provide a Signature.");
        } else {
            var dataURL = signaturePad.toDataURL();
            download(dataURL, 'signature.png');
        }
    });

    function download(dataURL, location) {
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = location;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
