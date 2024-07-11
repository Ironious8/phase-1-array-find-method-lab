function superbowlWin(record) {
    for(let entry of record) {
        if(entry.result==="W") {
          return  entry.year==="2015";
        
        }
        else {
            return undefined;
        }
    }
}

