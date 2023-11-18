interface CarouselHeroProps {
  children: React.ReactNode | React.ReactElement;
  className?: string;
}

export default function CarouselHero(props: CarouselHeroProps): JSX.Element {
  return props?.className ? (
    <div className={props?.className || ''}>{props.children}</div>
  ) : (
    <>{props.children}</>
  );
}
