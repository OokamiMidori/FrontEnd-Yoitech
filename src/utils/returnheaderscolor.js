export const getColors = (path) => {
    switch (path) {
        case "/":
            return "#1073C0";
        case "/company":
            return "#33B469";
        case "/about":
            return "#484B4D";
        case "/contact":
            return "#FAAD3A";
        case "/company-singup":
            return "#33B469"    
         default:
            return "#1073C0"   
    }

}