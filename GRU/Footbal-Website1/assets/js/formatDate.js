const formatDate = (matchDateTime) => {
    const dateObj = new Date(matchDateTime);

    const months = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    const formattedDate = day + ' ' + months[month] + ' ' + year;
    return formattedDate;
}

const formatTime = (matchDateTime) => {
    const dateObj = new Date(matchDateTime);

    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes();

    const formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    return formattedTime;
}

const headerDateFormat = (matchDateTime) => {
    const dateObj = new Date(matchDateTime);

    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    let formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    return formattedDate;
}