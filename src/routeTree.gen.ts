/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RockPaperScissorsImport } from './routes/rock-paper-scissors'
import { Route as IndexImport } from './routes/index'
import { Route as PathlessLayoutNestedLayoutImport } from './routes/_pathlessLayout/_nested-layout'
import { Route as PathlessLayoutNestedLayoutRouteBImport } from './routes/_pathlessLayout/_nested-layout/route-b'
import { Route as PathlessLayoutNestedLayoutRouteAImport } from './routes/_pathlessLayout/_nested-layout/route-a'

// Create/Update Routes

const RockPaperScissorsRoute = RockPaperScissorsImport.update({
  id: '/rock-paper-scissors',
  path: '/rock-paper-scissors',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PathlessLayoutNestedLayoutRoute = PathlessLayoutNestedLayoutImport.update(
  {
    id: '/_pathlessLayout/_nested-layout',
    getParentRoute: () => rootRoute,
  } as any,
)

const PathlessLayoutNestedLayoutRouteBRoute =
  PathlessLayoutNestedLayoutRouteBImport.update({
    id: '/route-b',
    path: '/route-b',
    getParentRoute: () => PathlessLayoutNestedLayoutRoute,
  } as any)

const PathlessLayoutNestedLayoutRouteARoute =
  PathlessLayoutNestedLayoutRouteAImport.update({
    id: '/route-a',
    path: '/route-a',
    getParentRoute: () => PathlessLayoutNestedLayoutRoute,
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
    '/rock-paper-scissors': {
      id: '/rock-paper-scissors'
      path: '/rock-paper-scissors'
      fullPath: '/rock-paper-scissors'
      preLoaderRoute: typeof RockPaperScissorsImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout/_nested-layout': {
      id: '/_pathlessLayout/_nested-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PathlessLayoutNestedLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout/_nested-layout/route-a': {
      id: '/_pathlessLayout/_nested-layout/route-a'
      path: '/route-a'
      fullPath: '/route-a'
      preLoaderRoute: typeof PathlessLayoutNestedLayoutRouteAImport
      parentRoute: typeof PathlessLayoutNestedLayoutImport
    }
    '/_pathlessLayout/_nested-layout/route-b': {
      id: '/_pathlessLayout/_nested-layout/route-b'
      path: '/route-b'
      fullPath: '/route-b'
      preLoaderRoute: typeof PathlessLayoutNestedLayoutRouteBImport
      parentRoute: typeof PathlessLayoutNestedLayoutImport
    }
  }
}

// Create and export the route tree

interface PathlessLayoutNestedLayoutRouteChildren {
  PathlessLayoutNestedLayoutRouteARoute: typeof PathlessLayoutNestedLayoutRouteARoute
  PathlessLayoutNestedLayoutRouteBRoute: typeof PathlessLayoutNestedLayoutRouteBRoute
}

const PathlessLayoutNestedLayoutRouteChildren: PathlessLayoutNestedLayoutRouteChildren =
  {
    PathlessLayoutNestedLayoutRouteARoute:
      PathlessLayoutNestedLayoutRouteARoute,
    PathlessLayoutNestedLayoutRouteBRoute:
      PathlessLayoutNestedLayoutRouteBRoute,
  }

const PathlessLayoutNestedLayoutRouteWithChildren =
  PathlessLayoutNestedLayoutRoute._addFileChildren(
    PathlessLayoutNestedLayoutRouteChildren,
  )

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '': typeof PathlessLayoutNestedLayoutRouteWithChildren
  '/route-a': typeof PathlessLayoutNestedLayoutRouteARoute
  '/route-b': typeof PathlessLayoutNestedLayoutRouteBRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '': typeof PathlessLayoutNestedLayoutRouteWithChildren
  '/route-a': typeof PathlessLayoutNestedLayoutRouteARoute
  '/route-b': typeof PathlessLayoutNestedLayoutRouteBRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/_pathlessLayout/_nested-layout': typeof PathlessLayoutNestedLayoutRouteWithChildren
  '/_pathlessLayout/_nested-layout/route-a': typeof PathlessLayoutNestedLayoutRouteARoute
  '/_pathlessLayout/_nested-layout/route-b': typeof PathlessLayoutNestedLayoutRouteBRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/rock-paper-scissors' | '' | '/route-a' | '/route-b'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/rock-paper-scissors' | '' | '/route-a' | '/route-b'
  id:
    | '__root__'
    | '/'
    | '/rock-paper-scissors'
    | '/_pathlessLayout/_nested-layout'
    | '/_pathlessLayout/_nested-layout/route-a'
    | '/_pathlessLayout/_nested-layout/route-b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RockPaperScissorsRoute: typeof RockPaperScissorsRoute
  PathlessLayoutNestedLayoutRoute: typeof PathlessLayoutNestedLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RockPaperScissorsRoute: RockPaperScissorsRoute,
  PathlessLayoutNestedLayoutRoute: PathlessLayoutNestedLayoutRouteWithChildren,
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
        "/rock-paper-scissors",
        "/_pathlessLayout/_nested-layout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/rock-paper-scissors": {
      "filePath": "rock-paper-scissors.tsx"
    },
    "/_pathlessLayout/_nested-layout": {
      "filePath": "_pathlessLayout/_nested-layout.tsx",
      "children": [
        "/_pathlessLayout/_nested-layout/route-a",
        "/_pathlessLayout/_nested-layout/route-b"
      ]
    },
    "/_pathlessLayout/_nested-layout/route-a": {
      "filePath": "_pathlessLayout/_nested-layout/route-a.tsx",
      "parent": "/_pathlessLayout/_nested-layout"
    },
    "/_pathlessLayout/_nested-layout/route-b": {
      "filePath": "_pathlessLayout/_nested-layout/route-b.tsx",
      "parent": "/_pathlessLayout/_nested-layout"
    }
  }
}
ROUTE_MANIFEST_END */
