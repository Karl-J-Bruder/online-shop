import brewery from "../assets/brewery.jpg";
const Tours = [
    {
        title: "Tokyo Tour",
        imgSrc: brewery,
        imgAlt: "Tokyo Brewery Tour",
        frequency: "Daily",
        startTimes: ["10:00", "12:00", "14:00"],
        duration: "3 hours",
        price: 50
    },
    {
        title: "Saijo Tour",
        imgSrc: brewery,
        imgAlt: "Saijo Sake Town Tour",
        frequency: "Daily",
        startTimes: ["9:00", "13:00"],
        duration: "4 hours",
        price: 75
    },
    {
        title: "Niigata Tour",
        imgSrc: brewery,
        imgAlt: "Niigata Brewery Tour",
        frequency: "Weekly",
        startTimes: ["Saturdays from 9:00"],
        duration: "2 days",
        price: 250
    }
]

export default Tours;