import {Box} from "@mui/material";

//@ts-ignore
let webApp = window?.Telegram?.WebApp;

export const App = () => {
    return (
    <Box>
        {webApp && <span>webApp: {JSON.stringify(webApp)}</span>}
        {/*<Navigation />*/}
        {/*<Container>*/}
        {/*    <AppRouter/>*/}
        {/*</Container>*/}
    </Box>
    );
};

