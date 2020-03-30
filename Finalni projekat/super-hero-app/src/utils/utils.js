const checkOption = (data)=>{
    return (!data || data === "-")?"other":data;
}


export {checkOption}