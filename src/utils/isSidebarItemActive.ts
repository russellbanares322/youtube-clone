"use client"

import { routesPath } from "@/data/routesPath";
import { TRoutesPath } from "@/types/types";

export const isSidebarItemActive = (routeName: TRoutesPath) => {
    const pathname = window.location.pathname;

    const selectedRoutePath = routesPath[routeName];
    const isRoutePathMatched = pathname === selectedRoutePath;

    if(isRoutePathMatched){
        return true
    }

    return false
}