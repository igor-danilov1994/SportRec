import {ReactNode} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {Competitions, Feed, Live, MarketPlace, Organisations, Rating} from "pages";

interface Page {
    path: string;
    element: ReactNode;
}

const pages: Page[] = [
    { path: "/:lang/feed", element: <Feed /> },
    { path: "/:lang/marketplace", element: <MarketPlace /> },
    { path: "/:lang/rating", element: <Rating /> },
    { path: "/:lang/competitions", element: <Competitions /> },
    { path: "/:lang/organisations", element: <Organisations /> },
    { path: "/:lang/live", element: <Live /> },
];

export const AppRouter = () => {
    return (
        <Routes>
            {pages.map((page, index) => (
                <Route key={index} path={page.path} element={page.element} />
            ))}

            <Route path="/" element={<Navigate to="/ru/feed" />} />
            <Route path="*" element={<Navigate to="/ru/feed" />} />
        </Routes>
    );
};
