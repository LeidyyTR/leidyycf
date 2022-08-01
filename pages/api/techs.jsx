export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/static/techs/html.svg"
        },
        {
            "name": "CSS",
            "src": "/static/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/static/techs/javascript.svg"
        },
        {
            "name": "Node.js",
            "src": "/static/techs/nodejs.svg"
        },
        {
            "name": "C#",
            "src": "/static/techs/csharp.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/static/techs/mongodb.svg"
        },
        {
            "name": "PHP",
            "src": "/static/techs/php.svg"
        },
        {
            "name": "TailwindCSS",
            "src": "/static/techs/tailwindcss.svg"
        },
        {
            "name": "Next.js",
            "src": "/static/techs/nextjs.svg"
        },
        {
            "name": "MySQL",
            "src": "/static/techs/mysql.svg"
        },
        {
            "name": "Express",
            "src": "/static/techs/expressjs.svg"
        },
        {
            "name": "React",
            "src": "/static/techs/react.svg"
        },
        {
            "name": "Photoshop CC",
            "src": "/static/techs/photoshop.svg"
        },
        {
            "name": "Github",
            "src": "/static/techs/github.svg"
        },
        {
            "name": "pnpm",
            "src": "/static/techs/pnpm.svg"
        },
        {
            "name": "Typescript",
            "src": "/static/techs/typescript.svg"
        },

    ]
    res.status(200).json(techs)
}
