import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

export const MonthItem = ({ month, description = "Lorem ipsum dolor sit amet eyep" }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={month} />
                    <ListItemText secondary={description} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

MonthItem.propTypes = {
    month: PropTypes.string.isRequired,
    description: PropTypes.string
}

