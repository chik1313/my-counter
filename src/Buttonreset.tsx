import React from "react";
import {Button, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const Reset = () => {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button size='large' color="error" variant="contained" startIcon={<DeleteIcon/>}>RESET</Button>
            </Stack>
        </div>

    );
}
