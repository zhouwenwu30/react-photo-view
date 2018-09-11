import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { PhotoProvider, PhotoConsumer } from '../src';

const Container = styled.div`
  font-size: 32px;
`;

const Header = styled.header`
  padding: 40px;
  font-size: 32px;
  border-bottom: 1px solid #ccc;
`;

const ImageList = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SmallImage = styled.img`
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

class Example extends React.Component {
  state = {
    photoImages: ['1.png', '2.jpg', '1.png'],
  };

  render() {
    const { photoImages } = this.state;

    return (
      <Container>
        <Header>React 图片预览组件</Header>
        <PhotoProvider>
          <ImageList>
            {photoImages.map((item, index) => (
              <PhotoConsumer key={index} src={item}>
                <SmallImage src={item} />
              </PhotoConsumer>
            ))}
          </ImageList>
        </PhotoProvider>
      </Container>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
