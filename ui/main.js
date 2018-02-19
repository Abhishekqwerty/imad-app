 var button = document.getElementById('counter');
 
 button.onclick = function () {
    
    //create a request 
    var request = new XMLHttpRequest();
    
    //capture the counter and replace it
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                var counter = request.responseText;               
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://gaikwadabhishek978.imad.hasura-app.io/counter',true);
    request.send(null);
    
 };