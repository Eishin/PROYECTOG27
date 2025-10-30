// Styled Components - Ejemplo de uso (requiere: npm install styled-components)
import styled from 'styled-components';

// ProductCard Styles
export const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  background: linear-gradient(to bottom right, #dbeafe, #fae8ff);
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Emoji = styled.span`
  font-size: 3.75rem;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StockBadge = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`;

export const Description = styled.p`
  color: #4b5563;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
`;

export const AddButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

// Navigation Styles
export const Nav = styled.nav`
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const NavContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const Logo = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1d4ed8;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

// Hero Styles
export const Hero = styled.div`
  background: linear-gradient(to right, #2563eb, #9333ea);
  color: white;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
`;

// Search Bar Styles
export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px #2563eb;
  }
`;

// Category Filter Styles
export const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$active ? '#2563eb' : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#374151'};

  &:hover {
    background: ${props => props.$active ? '#2563eb' : '#e5e7eb'};
  }
`;

// Grid Styles
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Empty State Styles
export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

export const EmptyStateTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const EmptyStateDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: #1d4ed8;
  }
`;

/* 
Uso en componentes:

import { Card, ImageContainer, Title } from './styles/StyledComponents';

function ProductCard() {
  return (
    <Card>
      <ImageContainer>
        ...
      </ImageContainer>
      <Title>Producto</Title>
    </Card>
  );
}
*/