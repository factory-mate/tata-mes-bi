/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../../routes/__root'
import { Route as BaseDoorLeafWorkshopImport } from './../../routes/_base.door-leaf_.workshop'

// Create Virtual Routes

const BaseLazyImport = createFileRoute('/_base')()
const SplatLazyImport = createFileRoute('/$')()
const BaseIndexLazyImport = createFileRoute('/_base/')()

// Create/Update Routes

const BaseLazyRoute = BaseLazyImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../../routes/_base.lazy').then((d) => d.Route))

const SplatLazyRoute = SplatLazyImport.update({
  path: '/$',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../../routes/$.lazy').then((d) => d.Route))

const BaseIndexLazyRoute = BaseIndexLazyImport.update({
  path: '/',
  getParentRoute: () => BaseLazyRoute,
} as any).lazy(() =>
  import('./../../routes/_base.index.lazy').then((d) => d.Route),
)

const BaseDoorLeafWorkshopRoute = BaseDoorLeafWorkshopImport.update({
  path: '/door-leaf/workshop',
  getParentRoute: () => BaseLazyRoute,
} as any).lazy(() =>
  import('./../../routes/_base.door-leaf_.workshop.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$': {
      id: '/$'
      path: '/$'
      fullPath: '/$'
      preLoaderRoute: typeof SplatLazyImport
      parentRoute: typeof rootRoute
    }
    '/_base': {
      id: '/_base'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BaseLazyImport
      parentRoute: typeof rootRoute
    }
    '/_base/': {
      id: '/_base/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof BaseIndexLazyImport
      parentRoute: typeof BaseLazyImport
    }
    '/_base/door-leaf/workshop': {
      id: '/_base/door-leaf/workshop'
      path: '/door-leaf/workshop'
      fullPath: '/door-leaf/workshop'
      preLoaderRoute: typeof BaseDoorLeafWorkshopImport
      parentRoute: typeof BaseLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  SplatLazyRoute,
  BaseLazyRoute: BaseLazyRoute.addChildren({
    BaseIndexLazyRoute,
    BaseDoorLeafWorkshopRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$",
        "/_base"
      ]
    },
    "/$": {
      "filePath": "$.lazy.tsx"
    },
    "/_base": {
      "filePath": "_base.lazy.tsx",
      "children": [
        "/_base/",
        "/_base/door-leaf/workshop"
      ]
    },
    "/_base/": {
      "filePath": "_base.index.lazy.tsx",
      "parent": "/_base"
    },
    "/_base/door-leaf/workshop": {
      "filePath": "_base.door-leaf_.workshop.tsx",
      "parent": "/_base"
    }
  }
}
ROUTE_MANIFEST_END */
