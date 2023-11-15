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
            return "#33B469";
        case "/company-singup-details":
            return "#33B469";
        case "/company-email-confirmation":
            return "#33B469";
        case "/company-email-confirm":
            return "#33B469";
        case "/company-adress":
            return "#33B469";
        case "/company-img-upload":
            return "#33B469";
        default:
            return "#1073C0"
    }

}