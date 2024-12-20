import {createRootRoute, Outlet} from '@tanstack/react-router'
import {Layout} from "../templates/Layout.tsx";

export const Route = createRootRoute({
    component: () => (
            <Layout><Outlet/></Layout>
    ),
})
