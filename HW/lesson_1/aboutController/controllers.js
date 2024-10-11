const homeController = {};
homeController.getHomeData = (req, res) => {
    // TODO - данные из DB
    res.send("Моё первое GET API");
}

homeController.updateHomeData = (req, res) => {
    // TODO - обновление данных DB
    res.send("Моё первое PUT API");
}

homeController.addHomeData = (req, res)  => {
    // TODO - добавление данных в DB
    res.send("Моё первое POST API");
}

homeController.deleteHomeData = (req, res) => {
    // TODO - удаление данных в DB
    res.send("Моё первое DELETE API");
}

export  {homeController};



