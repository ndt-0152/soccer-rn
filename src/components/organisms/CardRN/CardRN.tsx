import React from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';

export interface ICardRN {
  id: string;
  src: string;
  name: string;
  des: string;
}

export const CardRN: React.FC<ICardRN> = React.memo(({src, name, des, id}) => {
  return (
    <Card onPress={() => console.log(id)} mode="outlined">
      <Card.Cover source={{uri: src}} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph numberOfLines={1}>{des}</Paragraph>
      </Card.Content>
    </Card>
  );
});

export default CardRN;
