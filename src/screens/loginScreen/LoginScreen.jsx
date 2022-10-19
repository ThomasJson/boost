import "./loginScreen.scss";
import React, { useEffect } from "react";
import { SiBitcoinsv } from "react-icons/si";
import { Button, Container } from "react-bootstrap";
import RegisterModal from "./RegisterModal";
import axios from "axios";

const LoginScreen = () => {
  useEffect(() => {
    // Hello Boost
    axios.get("http://localhost:3000/").then((res) => console.log(res.data));
    axios     
      .post( // Get JWT Token
        "http://localhost:3000/api/login",
        { username: "pikachu", password: "pikachu" },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        return res.token;
      });
    // .then((token) => fetchAccountList(token))
  }, []);

  // const fetchAccountList = (token) => {
  //   return (
  //     axios.get("http://localhost:3000/api/accounts"),
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   ).then((res) => res.data).then((res) => console.log(res.data))
  // };
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Container fluid className="loginScreen-bloc">
        <Container className="logo-form-bloc">
          <Container>
            <SiBitcoinsv />
          </Container>

          <Container fluid className="bloc-connexion gap-3 border-Radius">
            <form className="coL gap-3">
              <input type="text" placeholder="Adresse e-mail" name="email" />
              <input
                type="password"
                placeholder="Mot de passe"
                name="mp"
                required
              />
              <Button type="submit">Se connecter</Button>
            </form>
            <a href="/">Mot de passe oublié ?</a>
            <Button onClick={() => setModalShow(true)}>
              Créer un nouveau compte
            </Button>
            <RegisterModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default LoginScreen;
