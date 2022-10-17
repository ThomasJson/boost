import "./loginScreen.scss";
import React from "react";
import { SiBitcoinsv } from "react-icons/si";
import { Button, Container } from "react-bootstrap";

const LoginScreen = () => {
  return (
    <>
      <Container fluid className="loginScreen-bloc">
        <Container className="logo-form-bloc">
            
          <Container>
            <SiBitcoinsv />
          </Container>

          <Container fluid className="bloc-connexion gap-3">
            <form className="coL gap-3">
              <input type="text" placeholder="Adresse e-mail" name="email" />
              <input
                type="password"
                placeholder="Mot de passe"
                name="mp"
                required
              />
              <Button type="submit">
                Se connecter
              </Button>
            </form>
            <a href="/">Mot de passe oublié ?</a>
            <Button>Créer un nouveau compte</Button>
          </Container>
          
        </Container>
      </Container>
    </>
  );
};

export default LoginScreen;
