function superbowlWin(record){
    
    const result = record.find(win => (win.result === 'W'));
    console.log(result);
    
        if (result)
        return result.year;
    }  
    


    

    
