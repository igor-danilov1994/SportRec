import {Badge} from "@mui/material"
import {BellIcon} from "assets/icons";

export const Notification = () => {
    return (
        <Badge badgeContent={4} color="primary" >
            <BellIcon />
        </Badge>
    )
}
