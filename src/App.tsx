import {Box, Container} from "@mui/material";

import {Navigation} from "./components";
import {AppRouter} from "AppRouter";


export const App = () => {
    return (
    <Box>
        <Navigation />
        <Container>
            <AppRouter/>
        </Container>
    </Box>
    );
};
