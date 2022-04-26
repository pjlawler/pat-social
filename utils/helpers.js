
function timeSince(date) {
    now = new Date();
    const minute = 60000
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const year = week * 52

    const timeDelta = now - date;

    switch (true) {
        case timeDelta < minute:
            return "less than a minute ago";
        case timeDelta < hour:
            const minutesSince = Math.floor(timeDelta/minute);
            if(minutesSince === 1) {
                return "1 minute ago";
            }
            return `${minutesSince} minutes ago`;
        case timeDelta < day:
            const hoursSince = Math.floor(timeDelta/hour);
            if(hoursSince === 1) {
                return "1 hour ago";
            }
            return `${hoursSince} hours ago`;
        case timeDelta < week:
            const daysSince = Math.floor(timeDelta/day);
            if(daysSince === 1) {
                return "1 day ago";
            }
            return `${daysSince} days ago`
        case timeDelta < year:
            const weeksSince = Math.floor(timeDelta/week);
            if(weeksSince === 1) {
                return "1 week ago";
            }
            return `${weeksSince} weeks ago`
        default:
            const yearsSince = Math.floor(timeDelta/year);
            if(yearsSince ===1) {
                return "1 year ago";
            }
            return `${yearsSince} years ago`
    }   
};

function format_date(date) {
    const year = date.getFullYear() || 2022;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hour_string = hours < 10 ? `0${hours}`: `${hours}`
    const min_string = minutes < 10 ? `0${minutes}`:`${minutes}`
    return `${month}/${day}/${year} ${hour_string}:${min_string}`
}

module.exports = {timeSince, format_date }