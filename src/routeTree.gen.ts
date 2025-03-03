/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SignupIndexImport } from './routes/signup/index'
import { Route as PricingIndexImport } from './routes/pricing/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as FeaturesIndexImport } from './routes/features/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as ContactIndexImport } from './routes/contact/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SignupIndexRoute = SignupIndexImport.update({
  id: '/signup/',
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any)

const PricingIndexRoute = PricingIndexImport.update({
  id: '/pricing/',
  path: '/pricing/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const FeaturesIndexRoute = FeaturesIndexImport.update({
  id: '/features/',
  path: '/features/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const ContactIndexRoute = ContactIndexImport.update({
  id: '/contact/',
  path: '/contact/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/contact/': {
      id: '/contact/'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/features/': {
      id: '/features/'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof FeaturesIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/pricing/': {
      id: '/pricing/'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingIndexImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      id: '/signup/'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/contact': typeof ContactIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/features': typeof FeaturesIndexRoute
  '/login': typeof LoginIndexRoute
  '/pricing': typeof PricingIndexRoute
  '/signup': typeof SignupIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contact': typeof ContactIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/features': typeof FeaturesIndexRoute
  '/login': typeof LoginIndexRoute
  '/pricing': typeof PricingIndexRoute
  '/signup': typeof SignupIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/contact/': typeof ContactIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/features/': typeof FeaturesIndexRoute
  '/login/': typeof LoginIndexRoute
  '/pricing/': typeof PricingIndexRoute
  '/signup/': typeof SignupIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/contact'
    | '/dashboard'
    | '/features'
    | '/login'
    | '/pricing'
    | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/contact'
    | '/dashboard'
    | '/features'
    | '/login'
    | '/pricing'
    | '/signup'
  id:
    | '__root__'
    | '/'
    | '/contact/'
    | '/dashboard/'
    | '/features/'
    | '/login/'
    | '/pricing/'
    | '/signup/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContactIndexRoute: typeof ContactIndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  FeaturesIndexRoute: typeof FeaturesIndexRoute
  LoginIndexRoute: typeof LoginIndexRoute
  PricingIndexRoute: typeof PricingIndexRoute
  SignupIndexRoute: typeof SignupIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContactIndexRoute: ContactIndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  FeaturesIndexRoute: FeaturesIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  PricingIndexRoute: PricingIndexRoute,
  SignupIndexRoute: SignupIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/contact/",
        "/dashboard/",
        "/features/",
        "/login/",
        "/pricing/",
        "/signup/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/contact/": {
      "filePath": "contact/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/features/": {
      "filePath": "features/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/pricing/": {
      "filePath": "pricing/index.tsx"
    },
    "/signup/": {
      "filePath": "signup/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
