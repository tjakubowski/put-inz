import React from 'react';
import {
  StyledContainer,
  StyledText,
  StyledActions,
  StyledTitle,
  StyledImage,
} from './styled';

export interface ICardProps {}

interface CardComposition {
  Title: React.FC;
  Text: React.FC;
  Actions: React.FC;
  Image: typeof StyledImage;
}

const Card: React.FC<ICardProps> & CardComposition = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Card.Title = StyledTitle;
Card.Text = StyledText;
Card.Actions = StyledActions;
Card.Image = StyledImage;

export default Card;
