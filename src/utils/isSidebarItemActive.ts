"use client"

import { routesPath } from "@/data/routesPath";
import { TRoutesPath } from "@/types/types";
import { usePathname } from "next/navigation";

export const isSidebarItemActive = (routeName: TRoutesPath) => {
    const pathname = usePathname();

    const selectedRoutePath = routesPath[routeName];
    const isRoutePathMatched = pathname === selectedRoutePath;

    if(isRoutePathMatched){
        return true
    }

    return false
}