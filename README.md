# Gamer Store Avançada
Desenvolvido durante o evento Formação DEV - Trilha Profissional de Mercado

## React

![image](https://github.com/user-attachments/assets/2f240738-a896-4c3e-b946-a7e002dc6d89)

![image](https://github.com/user-attachments/assets/400d0e68-13f7-48b0-b1fc-5b015b50fbf9)

![image](https://github.com/user-attachments/assets/b95ae4e7-1235-4de5-86ab-73ecaac06f01)

![image](https://github.com/user-attachments/assets/aff55cbb-a25d-48c2-9431-ab0352a25c90)

![image](https://github.com/user-attachments/assets/3576668d-9d5c-4ec4-ae0c-655f2bd837ee)

![image](https://github.com/user-attachments/assets/8cf7d76f-2b35-469f-b3a7-a7f4fd1989c8)

![image](https://github.com/user-attachments/assets/bada99da-c7f7-4f6d-b90e-2d174f2db15e)

![image](https://github.com/user-attachments/assets/8f178995-269f-4be4-a16e-d2c51961fbaa)

![image](https://github.com/user-attachments/assets/0a73ca17-e460-447a-aa98-bc5c09cbe07d)

## React Native

![image](https://github.com/user-attachments/assets/0c249c26-d6cd-45ea-be70-dece046f7c8f)

![image](https://github.com/user-attachments/assets/73792485-5a23-40ef-aeb7-21e27196cd84)

![image](https://github.com/user-attachments/assets/4e6e23e3-e485-45dd-af14-7fc6b90b6dd6)

![image](https://github.com/user-attachments/assets/7c1bb9d0-38c9-418d-8295-4f9d5aef4b5c)

![image](https://github.com/user-attachments/assets/119186d5-1bf5-46ac-93c3-6196b21c90e4)

![image](https://github.com/user-attachments/assets/a17f7378-613d-4d95-adbc-17da906110cc)

![image](https://github.com/user-attachments/assets/3032fda3-ba3d-43ee-92d0-2b9697f55f41)

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

## Configurando deploy AWS (https://www.youtube.com/watch?v=Mlclee1fjpA):

1. Instalar o PuTTY

2. Criar um Pares de chaves por ppk (https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#KeyPairs:)

3. Criar Instancia ec2 usando Security groups default e a chave ppk criada (https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#Instances:)
 
4. Abrir porta ssh no ec2 Security groups default (https://sa-east-1.console.aws.amazon.com/ec2/home?region=sa-east-1#SecurityGroups:)

5. Criar o banco de dados postgree, não aurora por custo grátis (https://sa-east-1.console.aws.amazon.com/rds/home?region=sa-east-1#databases:)

6. conectar usando o PuTTY, com o endereço gerado para o ec2 e a chave (https://www.wikihow.com/Use-Putty-in-Windows)

![image](https://github.com/user-attachments/assets/e47827ac-a15f-49eb-a585-3eaf2a72a8d5)

![image](https://github.com/user-attachments/assets/21503b8e-7659-4a25-88d3-2010aa51e160)

![image](https://github.com/user-attachments/assets/65a6c962-b325-4791-a11d-fe7824a40b06)

![image](https://github.com/user-attachments/assets/d253b015-b349-4547-a488-333629cc6520)

7. ec2-user

8. sudo yum update

9. sudo yum install git

10. sudo yum install nodejs

11. node --version

12. cd .ssh

13. ssh-keygen -t ed25519 -C "cookie.maia@gmail.com"

14. ls

15. Configurar a chave publica no github

vi config

16. a

17. Conteudo da configuração do github
```
Host github.com
 IgnoreUnknown UseKeychain
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/github
```
 
18. ESC

19. :wq

20. cat config
 
21. ssh -T git@github.com

22. yes

23. cd ~

24. git clone git@github.com:leonardojgm/Gamer-Store-Avancada

25. sudo npm i -g yarn

26. cd Gamer-Store-Avancada

27. yarn

28. yarn build

29. cd apps/backend

30. vi .env

31. a

32. DATABASE_URL=postgres://postgres:xxx@gam3rstore-db.xxxx.sa-east-1.rds.amazonaws.com/gam3rstore-db

33. ESC

34. :wq

35. cat .env

36. cat src/main.ts

37. pwd

38. npx prisma migrate dev
 
39. cd ..

40. cd ..

41. sudo npm install pm2 -g

42. cd apps/backend

43. pm2 start build/src/main.js --name backend

44. pm2 status

45. Abrir porta 3005 no ec2 Security groups default

46. cd ..

47. cd frontend

48. yarn build

49. pm2 start yarn -- start --name frontend

50. Abrir porta 3000 no ec2 Security groups default

51. vi .env

52. a

53. NEXT_PUBLIC_API_URL=http://xxxx.sa-east-1.compute.amazonaws.com:3005

54. ESC

55. :wq

56. cat .env

57. pm2 restart 1

58. pm2 startup systemd

59. pm2 save

60. sudo su

61. exit

AWS: http://ec2-18-228-118-212.sa-east-1.compute.amazonaws.com:3000

Vercel: https://gamer-store-avancada.vercel.app

API: http://ec2-18-228-118-212.sa-east-1.compute.amazonaws.com:3005/produtos

