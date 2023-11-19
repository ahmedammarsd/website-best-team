
const CalcDays = ({date}) => {
    const day = Math.floor( (new Date() - new Date(date)) / (1000 * 60 * 60 * 24))
    return `${day} day${day > 1 ? "s" : null} ago`
}

export default CalcDays