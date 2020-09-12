import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import store from './store';
// import CountDown from './countdown';

const logos = {
  treekkari: require('../images/TT_logo.png')
}

const TagsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  // transform: translate(-50%, 0);
  // top: 0;
`;

const LogoContainer = styled.div`
  z-index: 9001;
  opacity: ${props => props.opacity};
  display:flex;
  transition: opacity linear 1s;
`;

const TriangleContainer = styled.div`
  z-index: -1;
  height: 200px;
  width: 200px;
  transition: opacity linear 1s;
  position: absolute;
  bottom: 0px;
  left: 0px;

  background-color: #8C9C9A;
`;
const TriangleShade = styled.div`
  z-index: -2;
  height: 210px;
  width: 210px;
  transition: opacity linear 1s;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #991C38;
  box-shadow: 3px 3px 7px 3px #202020;
`;

const TextContainer = styled.div`
    z-index: -3;
    opacity: 50px;
    width: 360px;
    height: 140px;
    justify-content: center;
    background-color: #8C9C9A;
    position: absolute;
    bottom: 30px;
    left: 210px;
    box-shadow: 3px 3px 7px 3px #202020;
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
`;
const TextSpecial = styled(Text)`
  font-family: Franklin Gothic;
`;

const TitleText = styled.span`
  font-weight: bold;
  font-size: 300px;
  height: 50px;
  line-height: 50px;
  transition: opacity linear 1s;
  z-index: 10;
  color: black;
  width: 100px;
`;

@observer
class LeftBanner extends Component {
  componentDidMount() {
    this.setListeners('kilta');
    this.setListeners('seuraavaksi');
    this.setListeners('fillertext');
  }

  setListeners(name) {
    const replicant = nodecg.Replicant(name);
    NodeCG.waitForReplicants(replicant).then(() => {
      replicant.on('change', value => {
        console.log(replicant.name, value);
        store.setLeft(replicant.name, value);
      });
    });
  }

  render() {

    return (
      <TagsContainer>
          <TriangleContainer></TriangleContainer>
          <TriangleShade></TriangleShade>
        <LogoContainer>
            <Logo src={require('../images/TT_logo.png')} />
        </LogoContainer>
        <TextContainer><TitleText>{store.left.kilta}</TitleText></TextContainer>
      </TagsContainer>
    )
  }
}

const root = document.getElementById('app');
ReactDOM.render(<LeftBanner />, root);
