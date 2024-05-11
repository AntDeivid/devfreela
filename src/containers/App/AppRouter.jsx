import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import routes from "../../routes";

const AppRouter = () => {
    return (
        <AppLayout>
            <Routes>
                <>
                    {
                        routes.map(({ path, component, exact }) => {
                            const Component = component;

                            return (
                                <Route 
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    element={
                                        <React.Suspense fallback={<>Loading...</>}>
                                            <Component />
                                        </React.Suspense>
                                    }
                                />
                            )
                        })
                    }
                </>
            </Routes>
        </AppLayout>
    )
}

export default AppRouter;