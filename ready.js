module.exports = async(client) =>{

    client.user.setPresence({
        activity: {
            name: "Honkai Impact 3"
        }
    })
}