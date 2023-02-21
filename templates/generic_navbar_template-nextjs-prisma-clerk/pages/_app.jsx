import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import Layout from '@/components/layout/Layout'

import '@/styles/globals/globals.scss'

const ADMIN_PAGES = new Set(['/admin'])

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const { pathname } = useRouter();
  const isPrivatePath = ADMIN_PAGES.has(pathname)

  console.log(`Router pathname: ${pathname}`)

  useEffect(() => {
    const handleRouteChange = (url) => {
      app_set_state({...app_state, pathname: url})
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const [app_state, app_set_state] = useState({
    pathname: pathname,
    menu_open: false,
    filter_menu_open: false,
    theme: 'None', 
  });

  // console.log(`Using Page Props (Next Line)`)
  // console.log(pageProps)
  
  // console.log(`Rendering APP with app_state URL Path: ${app_state.url_path} | Theme: ${app_state.theme} | Filter Menu Open: ${app_state.filter_menu_open}`)

  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      {!isPrivatePath && (
        <Layout app_state={app_state} app_set_state={app_set_state}>
          <Component {...pageProps} app_state={app_state} app_set_state={app_set_state}/>
        </Layout>
      )}
      {isPrivatePath && (
        <>
          <SignedIn>
            <Layout app_state={app_state} app_set_state={app_set_state}>
              <Component {...pageProps} app_state={app_state} app_set_state={app_set_state}/>
            </Layout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn/>
          </SignedOut>
        </>
      )}

    </ClerkProvider>
  );
}

export default App;
