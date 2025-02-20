export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/assets/techs/html.svg"
        },
        {
            "name": "CSS",
            "src": "/assets/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/assets/techs/javascript.svg"
        },
        {
            "name": "Node.js",
            "src": "/assets/techs/nodejs.svg"
        },
        {
            "name": "C#",
            "src": "/assets/techs/csharp.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/assets/techs/mongodb.svg"
        },
        {
            "name": "PHP",
            "src": "/assets/techs/php.svg"
        },
        {
            "name": "Next.js",
            "src": "/assets/techs/nextjs.svg"
        },
        {
            "name": "React",
            "src": "/assets/techs/react.svg"
        },

        {
            "name": "Git",
            "src": "/assets/techs/git.svg"
        },
        {
            "name": "Yarn",
            "src": "/assets/techs/yarn.svg"
        },
        {
            "name": "Github",
            "src": "/assets/techs/github.svg"
        },
        {
            "name": "pnpm",
            "src": "/assets/techs/pnpm.svg"
        },

    ]
    res.status(200).json(techs)
}
