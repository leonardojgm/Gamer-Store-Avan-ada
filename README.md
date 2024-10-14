# Gamer Store Avançada
Desenvolvido durante o evento Formação DEV - Trilha Profissional de Mercado

![image](https://github.com/user-attachments/assets/2f240738-a896-4c3e-b946-a7e002dc6d89)

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Configurando deploy AWS (https://www.youtube.com/watch?v=Mlclee1fjpA):

"instalar o PuTTY"

"criar um Pares de chaves por ppk"
https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#KeyPairs:

"criar Instancia ec2 usando Security groups default e a chave ppk criada"
https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#Instances:

"abrir porta ssh no ec2 Security groups default"
https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#SecurityGroups:

"criar o banco de dados postgree, não aurora por custo grátis"
https://sa-east-1.console.aws.amazon.com/rds/home?region=sa-east-1#databases:

"conectar usando o PuTTY, com o endereço gerado para o ec2 e a chave"
https://www.wikihow.com/Use-Putty-in-Windows

![image](https://github.com/user-attachments/assets/e47827ac-a15f-49eb-a585-3eaf2a72a8d5)

![image](https://github.com/user-attachments/assets/21503b8e-7659-4a25-88d3-2010aa51e160)

![image](https://github.com/user-attachments/assets/65a6c962-b325-4791-a11d-fe7824a40b06)

![image](https://github.com/user-attachments/assets/d253b015-b349-4547-a488-333629cc6520)

ec2-user

sudo yum update

sudo yum install git

sudo yum install nodejs

node --version

cd .ssh

ssh-keygen -t ed25519 -C "cookie.maia@gmail.com"

ls

"configurar a chave publica no github"

vi config

a

Host github.com
 IgnoreUnknown UseKeychain
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/github
 
ESC

:wq

cat config
 
ssh -T git@github.com

yes

cd ~

git clone git@github.com:leonardojgm/Gamer-Store-Avancada

sudo npm i -g yarn

cd Gamer-Store-Avancada

yarn

yarn build

cd apps/backend

vi .env

a

DATABASE_URL=postgres://postgres:xxx@gam3rstore-db.xxxx.sa-east-1.rds.amazonaws.com/gam3rstore-db

ESC

:wq

cat .env

cat src/main.ts

pwd

npx prisma migrate dev

cd ..

cd ..

sudo npm install pm2 -g

cd apps/backend

pm2 start build/src/main.js --name backend

pm2 status

"abrir porta 3005 no ec2 Security groups default"

cd ..

cd frontend

yarn build

pm2 start yarn -- start --name frontend

"abrir porta 3000 no ec2 Security groups default"

vi .env

a

NEXT_PUBLIC_API_URL=http://xxxx.sa-east-1.compute.amazonaws.com:3005

ESC

:wq

cat .env

pm2 restart 1

pm2 startup systemd

pm2 save

sudo su

exit

AWS: http://ec2-18-228-118-212.sa-east-1.compute.amazonaws.com:3000/
Vercel: https://gamer-store-avancada.vercel.app/
API: http://ec2-18-228-118-212.sa-east-1.compute.amazonaws.com:3005/produtos

