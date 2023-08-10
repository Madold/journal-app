import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"
import { useMemo } from "react"

export const LoginPage = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm({
        email: "",
        password: ""
    })

    const isAuthenticating = useMemo(() => status === "checking-credentials", [status])

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(checkingAuthentication(email, password))
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title="Login" >
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            onChange={onInputChange}
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                            name="password"
                            onChange={onInputChange}
                            value={password}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
