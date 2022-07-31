export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/936320390899318846/979feca1d275f5b9fb596d8332fdeb8f.png?size=1024",
      name: "Alive",
      description:
        "Manage your server, do sweepstakes, listen to songs and greet people with Alive.",
      link: "https://bit.ly/alivedavet",
    }
  ];
  res.status(200).json(data);
};
