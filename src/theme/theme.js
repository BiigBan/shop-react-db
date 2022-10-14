import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import React from 'react'

export default function Theme({ children }) {

    const newTheme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
                dark: '#EDEDF0',
                contrastText: '#19191D',
            },
            secondary: {
                light: '#EBF2FF',
                main: '#2264D1',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#5A5B6A',
            }
        },
        typography: {
            fontFamily: 'Inter, Quicksand, Roboto',
            fontSize: 16
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        }
    })

    return (
        <ThemeProvider theme={newTheme}>
            {children}
        </ThemeProvider>
    )
}
