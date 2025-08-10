import React from "react";
import { Button, Box, Typography, Stack, Link, Paper } from "@mui/material";
import { motion } from "framer-motion";

const links = [
    { name: "Instagram", url: "https://instagram.com", color: "#E1306C" },
    { name: "TikTok", url: "https://tiktok.com", color: "#000000" },
    { name: "E-mail", url: "mailto:palomabarbosa367@gmail.com", color: "#b3483f" }
];

const MotionPaper = motion(Paper);

const SinglePage = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
                py: 5,
                px: 2,
            }}
        >
            <MotionPaper
                elevation={10}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                sx={{
                    p: 4,
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 3,
                    boxShadow: "0 0 30px rgba(0,0,0,0.3)",
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                {/* Foto de perfil */}
                <Box>
                    <img
                        src="/img/logo_converted.png"
                        alt="Logo"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            border: "3px solid white",
                            boxShadow: "0px 0px 20px rgba(255,255,255,0.4)",
                            objectFit: "cover",
                        }}
                    />
                </Box>

                {/* Nome e descrição */}
                <Typography variant="h5" fontWeight="bold" color="white">
                    @poppsique
                </Typography>
                <Typography variant="body2" color="gray">
                    Análises psicológicas de livros, filmes, séries e animes
                </Typography>

                {/* Botões em coluna iguais */}
                <Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
                    {links.map((link, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            href={link.url}
                            target="_blank"
                            sx={{
                                bgcolor: link.color,
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    opacity: 0.9,
                                    bgcolor: link.color,
                                },
                                transition: "all 0.2s ease-in-out",
                                fontWeight: "bold",
                                py: 1.5,
                                borderRadius: "30px",
                                width: "250px",
                                maxWidth: "90%",
                                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                            }}
                        >
                            {link.name}
                        </Button>
                    ))}
                </Stack>

                {/* Rodapé com link para GitHub */}
                <Typography variant="caption" color="gray" sx={{ mt: 3 }}>
                    Feito por{" "}
                    <Link
                        href="https://github.com/victorrmendes"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="inherit"
                        sx={{ fontWeight: "bold" }}
                    >
                        @victorrmendes
                    </Link>
                </Typography>
            </MotionPaper>
        </Box>
    );
};

export default SinglePage;
