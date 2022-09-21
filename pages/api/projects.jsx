export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/936320390899318846/caa6c5d184598e2d44b4cfb85e46ca46.png?size=1024",
      name: "Alive",
      description:
        "Manage your server, do giveaways, listen to songs and greet people with Alive.",
      link: "https://bit.ly/alivedavet",
    },
     {
      id: 2,
      image: "https://cdn.discordapp.com/avatars/1007722947315773450/4d3b9fbfb7c2027d52c96115061f062e.png?size=1024",
      name: "Company",
      description:
        "Create/manage companys.",
      link: "https://discord.com/api/oauth2/authorize?client_id=1007722947315773450&permissions=8&scope=bot",
    }
  ];
  res.status(200).json(data);
};
