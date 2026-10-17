let responseCode=404;

switch(responseCode){
    
        case 1:
            console.log("Response Code: 200 - OK");
            break;

        case 2:
            console.log("Response Code: 400 - Bad Request");
            break;
        case 3:
            console.log("Response Code: 401 - Unauthorized");
            break;   
            
        default:
            console.log("Response Code: 404 - Not Found");    
    }

