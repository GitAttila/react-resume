interface CarouselSlideProps {
  children: React.ReactNode | React.ReactElement;
  className?: string;
}

export default function CarouselSlide(props: CarouselSlideProps): JSX.Element {
  return <div className={props.className}>{props.children}</div>;
}
