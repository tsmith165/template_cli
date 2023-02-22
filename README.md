# Full Stack NextJS Template CLI with built in Navbar and Clerk Auth / PostgresQL / Prisma

**Quickly deploy new NextJS sites with this Template CLI that modifies given templates based off your specifications.  Drastically reduces project setup time past what create-react-app or create-next-app does for you.**
  - My video on setting this up: https://www.youtube.com/watch?v=GgdWxoU01M4
  - Powerpoint slides from video: https://www.beautiful.ai/player/-NOsGFC0mu3JPEfbBHvQ

**Based on template-cli from Leo Roese:**
  - Leo Roese project github: https://github.com/leoroese/template-cli
  - Leo Roese project video: https://www.youtube.com/watch?v=xYko2bHNgVA&t=442s
  
**My changes to the template cli:**
  - Added template for NextJS / Clerk Auth / Prisma DB with Navbar and Page Menu Overlay
  - Added Inquirer questions for 'project_class' and 'project_description' to go along with the already present 'project_name'
  - Added modify_file() function to setup project files with constants gathered from Inquirer questions
  
**1.) Download / Install template-cli**
```
git clone https://github.com/tsmith165/template_cli
cd template_cli

# Install commands:
yarn install
npm install -g

# Uninstall command:
npm uninstall -g template-cli
```

**2.) Create new project with template-cli**
```
cd 'folder wheren you want to create new project'
template-cli

# Questions:
# What project template would you like to generate?
generic_navbar_template-nextjs-prisma-clerk
# Project name:
Authenticated Template Tutorial
# Project class:
authenticated_template_tutorial
# Project description:
Generic site with authenticated navbar and page menu
```
**3.) Update constants file**
```
edit /lib/constants.js
set SITE_URL with site domain name if you have already (else leave blank)
set AWS_BUCKET_URL with URL to AWS S3 Bucket if already setup (else blank)
set CONTACT_FULL_NAME / CONTACT_EMAIL with site owner details
Create Heroku DB and update .env with DB connection URL
```

**4.) Sign up for Heroku account here: https://signup.heroku.com/login**
```
Create new project "authenticated-template-tutorial"
Create Heroku postgresql mini instance ($5)
Copy postgresql connection URL from instance settings into .env
Create Clerk Project and update .env with API keys
```

**5.) Sign up for Clerk account here: https://dashboard.clerk.dev/sign-up**
```
Create new project "authenticated-template-tutorial"
Copy API keys from project settings into .env
Create vercel project and set env vars
```

**6.) Sign up for vercel account here: https://vercel.com/signup**
```
Import project from github
Set environment variables based off .env
```
