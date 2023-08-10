import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import PropTypes from "prop-types"
import { MonthItem } from "./MonthItem"

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component="nav"
            sx={{
                width: { sm: drawerWidth }, flexShrink: { sm: 0 },
            }}
        >

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth
                    }
                }}
            >

                <Toolbar>
                    <Typography variant="h6" noWrap component="div">Marco</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"].map(month => (
                            <MonthItem key={month} month={month} />
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}