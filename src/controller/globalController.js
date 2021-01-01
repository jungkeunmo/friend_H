import Friend from "../model/Friend";

const homeController = (req, res) => {
    res.render("screens/home");
};

const friendController = async (req, res) => {
    const friendList = await Friend.find({}, {});

    console.log(friendList);

    res.render("screens/friend", { friendList });
};

const globalController = {
    homeController,
    friendController,
};

export default globalController;