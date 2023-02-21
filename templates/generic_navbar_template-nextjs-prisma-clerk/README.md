# Generic Navbar Auth Template
Template for a gneric site with Clerk Auth setup to handle admin page routes, and the navbar setup with a generic logo and menu overlay.  

Default packages pre-setup: 
- SASS
- Material UI Icons: https://mui.com/material-ui/material-icons/

Default packages needing some setup:
- Clerk Auth (Create Clerk project and put NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY, CLERK_API_KEY, CLERK_JWT_KEY in .env)
- Prisma (Create database and put DATABASE_URL in .env)
