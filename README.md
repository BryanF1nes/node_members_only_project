## Members Only Project

This project was put together using the information I had learned up until now such as,

- MVC Pattern to separate logic into readable and organized code
- PassportJS for authentication
- Password security using bcrypt to salt and hash sensitive information
- CORS

I had planned on launching the site using Fly.io so anyone could access it without having to clone the repo however I do not have the funds available to do that at the moment.

## Running the App

If you wish to run the app go ahead and follow these steps.

Clone the repo
```bash
git clone https://github.com/BryanF1nes/node_members_only_project.git
```

Install any dependicies
```bash
npm install
```

Create an .env file from .env-sample file
```bash
cp .env.example .env
```

Finally run the app
```bash
npm run serverstart
```

Go to <http://localhost:3000>


