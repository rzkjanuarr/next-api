export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([
        {
            name: "Pak Febri",
            website: "https://www.pak-febrianto.id"
        },
        {
            name: "Pak Ricky",
            website: "https://www.pak-ricky.id"
        },

        {
            name: "Mas Raka",
            website: "https://www.mas-raka.id"
        },
        {
            name: "Mas Falah",
            website: "https://www.mas-falah.id"
        },
        {
            name: "Cak Oni",
            website: "https://www.cak-oni.id"
        },
        {
            name: "Mas Iqbal",
            website: "https://www.mas-iqbal.id"
        },
        {
            name: "Mas Fatik",
            website: "https://www.mas-fatik.id"
        },
        {
            name: "Kiki",
            website: "https://www.rizki.id"
        },
        {
            name: "Bro Messi",
            website: "https://www.messi.id"
        },
    ]))
} 