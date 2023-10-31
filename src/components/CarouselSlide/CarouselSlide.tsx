interface CarouselSlideProps {
  children: React.ReactNode;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ children }) => {
  return <>{children}</>;
};

export default CarouselSlide;
