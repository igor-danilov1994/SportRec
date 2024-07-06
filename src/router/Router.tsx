import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Competitions, Feed, Live, MarketPlace, Organisations, Rating} from "../pages";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/rating" element={<Rating />} />
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route path="/live" element={<Live />} />
                <Route path="/feed" element={<Feed /> } />
                <Route path="/feed" element={<Feed /> } />
                <Route path="/organisation" element={<Organisations /> } />
                <Route path="/competitions" element={<Competitions />} />
            </Routes>
        </BrowserRouter>
    )
}
