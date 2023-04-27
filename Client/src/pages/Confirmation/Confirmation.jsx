import React from 'react';
import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {

    const navigate = useNavigate();

    return (
        <><Box m="280px auto" width="60%" marginBottom="80px">
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                You have successfully made an Order —{" "}
                <strong>Congrats on Making your Purchase</strong>
            </Alert>
        </Box><Box marginLeft="1200px">
                <Button
                    sx={{
                        backgroundColor: "#00c853",
                        color: "#fff",
                        borderRadius: 0,
                        padding: "10px 40px",
                    }}
                    onClick={() => navigate("/")}
                >Return To Home</Button>
            </Box></>
        
    );
};

export default Confirmation;