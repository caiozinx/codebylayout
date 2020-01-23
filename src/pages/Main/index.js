/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container } from '../../components/container';
import { Header, Wrapper, Cards, Growth } from './styles';

export default class Main extends Component {
  state = {
    content: {
      price: [100, 150, 200, 250, 300, 350],
      hours: [100, 180, 260, 380, 420, 520]
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

  render() {
    const { content, text } = this.state;
    return (
      <Container>
        <Header>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Mountain-Icon_%28white%29.svg"
              alt="Logo Escalator"
            />
            <h1>we have ideas to growth your business</h1>
            <button type="button">see now</button>
          </div>
        </Header>
        <Wrapper>
          <h2>categories</h2>

          <p>discover new possibilities to help you today</p>
          <Cards direction="row">
            <div attr="nature">
              <h3>nature</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div attr="daily">
              <h3>daily</h3>
              <p>Praesent tincidunt consectetur diam</p>
            </div>

            <div attr="together">
              <h3>together</h3>
              <p>
                Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum
              </p>
            </div>

            <div attr="analysis">
              <h3>analysis</h3>
              <p>Duis sollicitudin mauris vitae venenatis aliquet</p>
            </div>

            <div attr="pictures">
              <h3>pictures</h3>
              <p>Quisque eu nisl purus</p>
            </div>
          </Cards>
        </Wrapper>
        <Wrapper growth="#f3f3f3">
          <Growth>
            <header>
              <h2>growth plans</h2>

              <p>take your business to the next level</p>
            </header>
            {content.hours.map((ele, index) => (
              <>
                <div key={ele.toString()} attr="main">
                  <div attr="price">
                    <h3>$ {content.price[index]}</h3>
                    <h4>{ele} + hours</h4>
                  </div>
                  <div attr="text" index={index}>
                    <small>{text}</small>
                  </div>
                </div>
              </>
            ))}
          </Growth>
        </Wrapper>
      </Container>
    );
  }
}
