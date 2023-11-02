
export const durationUnit = (duration_unit = 4) => {
    if (duration_unit === 0) return "sec";
    else if (duration_unit === 1) return "min";
    else if (duration_unit === 2) return "hour";
    else if (duration_unit === 3) return "days";
    else if (duration_unit === 4) return "weeks";
    else if (duration_unit === 5) return "months";
    else if (duration_unit === 6) return "Year";
  };

export const numDecider = ( number ) =>{
  number = parseFloat(number).toFixed(2)
    if (number - Number(number) === 0) return Number(number)
    number =  parseFloat(number).toFixed(2)
    return number
}

export const handlefilterQuery = (filter) => {
  let postfix = "";
  Object.keys(filter).map((x) => {
    if (Array.isArray(filter[x]) && x !== "min_price" && x !== "max_price") {
      if (filter[x].length) {
        for (let i = 0; i < filter[x].length; i++) {
          postfix += `${x}=${filter[x][i]}&`;
        }
      }
    } else if (x === "min_price" || x === "max_price") {
      if (filter[x].length && filter[x][0])
        postfix += `${x}=${filter[x][0]}&`;
    } else {
      if (filter[x]) {
        if (x==='searchKeyword'){
          postfix += `search=${filter[x]}&`;
        }
        else{
          postfix += `${x}=${filter[x]}&`;
        }
      }
    }
    return 0
  });
  return postfix;
};