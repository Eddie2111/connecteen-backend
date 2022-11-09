# Connecteen [Building using Node.JS + Express.JS + MongoDB + Postgres + Redis + PM2 on Container]

This future platform will bring in all the advanced skilled teens into a single community.

## Will be deployed on vercel + heroku
- update: Will be uploaded on Amazon ECS

- Node deployed on Heroku
 → https://server42223.herokuapp.com
- SSR on development on Vercel
 → https://connecteen-frontend-eddie2111.vercel.app

# Works done:
- express set up with routing and error controls
- atlas connected through mongoose
- redis connected through ioredis [Redis Enterprise]
- postgres connected through free postgresDB [Heroku]
- secure cors policy applied
- backlogger removed due to deployment complicacy of CJS
- nodemailer removed, sendgrid implemented
- Error handling implemented
- every single input throughly validated using custom validator + JOI
- Two factor authentication signup completed
- JWT httponly, secure cookies implemented on login and signup.
- Dashboard security and auth support
- single image handling added
- auth handled by postgres container
- user data handled by mongodb container


# Works left
- Forgot password.
- Contact Us.
- deploy with docker compose of 4 sub processes [Mongo, Postgres, Redis, NodeJs]
- NodeJS controlled by PM2
- Reverse proxy using nginx
- Container deployment on ECS using Docker Image.
- Session storage using redis

# Routes implemented
- welcome
- courses
- [course]
- signup
- verify
- 404
- cookie [test] [REMOVED]
- dashboard
