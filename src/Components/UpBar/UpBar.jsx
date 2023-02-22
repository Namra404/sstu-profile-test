import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

const UpBar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Опрос студентов СГТУ
                        </Typography>
                        <Button color="inherit">SSTU</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default UpBar;