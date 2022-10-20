let titleBox = document.getElementById('title')
let dateBox = document.getElementById('date')
let contentBox = document.getElementById('content')

const infos = [
    {
        id: "first",
        title: "Microsoft",
        date: "Janvier 2020 - Novembre 2020",
        content: "Software Engineer chez Microsoft France. Développement de différentes outils pour Windows 11"
    },
    {
        id: "second",
        title: "Apple",
        date: "Décembre 2020 - Juillet 2021",
        content: "Software Engineer chez Apple France. Développement de différentes outils pour Mac OS"
    },
    {
        id: "third",
        title: "Spotify",
        date: "Depuis Juillet 2021",
        content: "Software Engineer chez Spotify France. Développement de différentes outils pour la plateforme d'écoute"
    },
];

titleBox.innerHTML = infos[0].title
dateBox.innerHTML = infos[0].date
contentBox.innerHTML = infos[0].content

function displayInfo(data) {
    let link = document.getElementById(data.id)

    link.onclick = () => {
        titleBox.innerHTML = data.title
        dateBox.innerHTML = data.date
        contentBox.innerHTML = data.content
    }
}


for(info of infos) {
    displayInfo(info)
}