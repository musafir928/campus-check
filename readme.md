# CampusCheck

CampusCheck is a secure student event attendance system built with
NestJS, React, and MongoDB.

## Features
- Role-based authentication/ authorization
- Location & IP-verified attendance
- Selfie-based identity verification -- todo
- Admin scoring & (approval - optional)
- Academic credit calculation - reduce api call

## Tech Stack
- Backend: NestJS, MongoDB
- Frontend: React + TypeScript
- Auth: JWT
- Deployment: Docker - next step

## Running Locally
```
npm install
npm run build
admin: npm run admin -> localhost:3002
student: npm run student -> localhost:3001
server: npm run server -> localhost:3000
```

for local api testing and debugging you might need to generate role based token:
change the `role` field accordingly

```
generate admin keys: npm run generate:keys
generate token: 
- cd scripts
- node token.js
```

## Credit Rules
- ≥ 10 events
- Total score > 60
- Credit ranges from 1.25 to 2.0


## Todos:

- add swagger
- add file upload and faceId like verification for attendance
- integrate with Azure Entra ID
- cloud native development
- Docker
- Kubernets
- Postman collection for testing and demonstration
- playwright API & E2E automated test
- unit tests
- Migrate to NextJS
- Extract Guards to a separate npm module
- Add check-in/out retention system
- Add in event assessment score system - Kahoot, Q&A and work shops
- Priority rules - students with less score/graduation students/major related/research related
- lector Spot - 3-5 for eg. preserved for speaker/organizer