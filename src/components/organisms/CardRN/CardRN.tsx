import React from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';

export const CardRN: React.FC = React.memo(() => {
  return (
    <Card>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Content>
        <Title>Manchester United</Title>
        <Paragraph>
          Manchester United, in full Manchester United Football Club, is an
          English professional football (soccer) team based in Manchester,
          England. It is one of the richest and best-supported football clubs
          not only in England but in the entire world.
        </Paragraph>
      </Card.Content>
    </Card>
  );
});

export default CardRN;
