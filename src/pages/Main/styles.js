import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 100vw;
  background: black;
  overflow: hidden;
  background: -webkit-linear-gradient(
      rgba(29, 38, 113, 0.8),
      rgba(10, 120, 255, 0.2)
    ),
    url('https://www.backyardtravel.com/wp-content/uploads/2018/03/MtFujiHeader.jpg');
  background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(10, 120, 255, 0.2)),
    url('https://www.backyardtravel.com/wp-content/uploads/2018/03/MtFujiHeader.jpg');

  div {
    max-width: 666px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  div img {
    margin: 30px 0;
  }

  div h1 {
    margin: 60px 0;
    font-size: 4.8em;
    text-align: center;
    letter-spacing: 1.5px;
    color: #fff;
  }

  div button {
    background-color: #fff;
    color: #222;
    padding: 8px 80px;
    font-size: 2em;
    font-weight: bold;
    font-style: uppercase;
    border: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 3% 6.5%;

  h2,
  p {
    font-size: 4.8em;
    color: #333;
    font-weight: bold;
  }

  p {
    font-size: 1.8em;
    margin-bottom: 20px;
  }

  background-color: ${props => props.growth};
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 500px;

  div {
    margin: 1% 0;
    background: black;
    overflow: hidden;
    padding: 30px;
    height: 400px;

    h3,
    p {
      color: #fff;
      font-weight: bold;
    }

    h3 {
      font-size: 4.8em;
    }

    p {
      font-size: 1.8em;
    }
  }

  div[attr='nature'],
  div[attr='pictures'] {
    width: 28%;
  }

  div[attr='daily'],
  div[attr='analysis'] {
    width: 70%;
  }

  div[attr='analysis'] {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  div[attr='together'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div[attr='nature'] {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=1920');
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=1920');
  }

  div[attr='daily'] {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('https://www.stlawu.edu/sites/default/files/Culture-Eats-Strategy-For-Breakfast-1.jpg');
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('https://www.stlawu.edu/sites/default/files/Culture-Eats-Strategy-For-Breakfast-1.jpg');
    background-size: cover;
    background-position-y: -12rem;
  }

  div[attr='together'] {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://steemitimages.com/p/HNWT6DgoBc14riaEeLCzGYopkqYBKxpGKqfNWfgr368M9UoSwwjUzNdJCeQ7gKmZRNZX8HbjimUcZHdQ5fuGu57UKyQQxSHrwgsF2UoMX5P7nZ6FABH1hooBsvn?format=match&mode=fit');
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://steemitimages.com/p/HNWT6DgoBc14riaEeLCzGYopkqYBKxpGKqfNWfgr368M9UoSwwjUzNdJCeQ7gKmZRNZX8HbjimUcZHdQ5fuGu57UKyQQxSHrwgsF2UoMX5P7nZ6FABH1hooBsvn?format=match&mode=fit');
    background-size: cover;
    background-position-y: -29rem;
  }

  div[attr='analysis'] {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://www.telegraph.co.uk/content/dam/news/2017/11/11/Lam1_trans_NvBQzQNjv4BqnAdySV0BR-4fDN_-_p756cVfcy8zLGPV4EhRkjQy7tg.jpg?imwidth=1400');
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://www.telegraph.co.uk/content/dam/news/2017/11/11/Lam1_trans_NvBQzQNjv4BqnAdySV0BR-4fDN_-_p756cVfcy8zLGPV4EhRkjQy7tg.jpg?imwidth=1400');
    background-position-y: -23rem;
  }

  div[attr='pictures'] {
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://www.denverpost.com/wp-content/uploads/2018/01/day_in_pictures_010818_001.jpg?w=910');
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('https://www.denverpost.com/wp-content/uploads/2018/01/day_in_pictures_010818_001.jpg?w=910');
    background-size: contain;
  }
`;

export const Growth = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  header {
    align-self: flex-start;
    position: absolute;

    h2 {
      font-size: 5.5em;
    }
  }

  div {
    max-width: 85%;
    min-height: 100px;

    h3,
    h4,
    small {
      font-weight: bold;
      color: #fff;
    }

    h3 {
      font-size: 3.8em;
    }

    h4 {
      font-size: 2.2em;
    }

    small {
      font-size: 1.35em;
      font-weight: 400;
    }
  }

  div[attr='main'] {
    margin-top: 20px;
    align-self: flex-end;
  }

  div[attr='price'] {
    background-color: #3872c1;
    padding: 20px;
  }

  div[attr='text'] {
    display: flex;
    align-items: flex-end;
    background-color: #068ee8;
    padding: 20px;
  }

  div[index='1'] {
    height: 200px;
  }
  div[index='2'] {
    height: 270px;
  }
  div[index='3'] {
    height: 340px;
  }
  div[index='4'] {
    height: 410px;
  }
  div[index='5'] {
    height: 480px;
  }
`;
