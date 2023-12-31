import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta" >
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Jhon Doe"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@correo.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
