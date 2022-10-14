import React from "react";
import {Button, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const MyButton = () => {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button size='large' color='success' variant="contained">
                    123
                </Button>
            </Stack>
        </div>
    )
}
