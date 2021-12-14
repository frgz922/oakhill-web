export const state = () => ({
    infoHeading:
        "For more information about our courses, get in touch with MaxCoach via contacts",
    address: {
        title: "Address",
        location: "161 Bay Street, Suite 2460 \n Toronto, Ontario M5j 2S1",
        locationNumber: "647.479.5803",
        email: "info@oakhillfinancial.ca",
        lat: 52.482900,
        lng: -1.893460,
    },
    contact: {
        title: "Contact",
        mobileNo: "0123456789",
        hotline: "0123456",
        email: "demo@example.com",
    },
    workingHour: {
        title: "Hour of operation",
        dayOne: "Monday – Friday : 09:00 – 20:00",
        dayTwo: "Sunday & Saturday: 10:30 – 22:00",
    },
    contactFormHeader:
        "Fill out this form for booking a consultant advising session.",
});


export const getters = {
    getContactData(state) {
        return state;
    }
}

