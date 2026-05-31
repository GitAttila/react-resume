import { FEATURE_SUMMARY } from './content/feature-summary.const';
import { EXPERIENCE_LIST } from './content/feature-experience.const';
import { EDUCATION_LIST } from './content/feature-education.const';
import { CONTACT_LIST, SOCIAL_LINKS_LIST } from './content/contact-links.const';
import { FOOTER_DESCRIPTORS } from './content/footer.const';
import { TECH_LINKS_LIST } from './content/tech-stripe-links.const';
import { LANGUAGE_SKILLS } from './content/skills-bar-charts';
import { HERO_SLIDES } from './content/carousel-hero.const';
import { AWARD_CARDS } from './content/award-cards.const';
import { CERTIFICATE_CARDS } from './content/certificate-cards.const';
import { CERTIFICATES_BUTTONS_GROUP } from './content/certificates-buttonsGroup';
import { PROJECTS_BUTTONS_GROUP } from './content/projects-buttonsGroup';
import { PROJECT_CARDS } from './content/project-cards.const';
import { Fragment, useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import FeatureSummary from './components/Features/feature-summary/FeatureSummary';
import NavigationSection from './components/NavigationSection/NavigationSection';
import FeatureTimeline from './components/Features/feature-timeline/Feature-timeline';
import Footer from './components/Features/footer/Footer';
import FeatureDownload from './components/Features/feature-download/FeatureDownload';
import FeatureTechStripe from './components/Features/feature-tech-stripe/FeatureTechStripe';
import FeatureContacts from './components/Features/feature-contact/FeatureContact';
import FeatureDevStack from './components/Features/feature-dev-stack/FeatureDevStack';
import FeatureHero from './components/Features/feature-hero/FeatureHero';
import FeatureAwards from './components/Features/feature-awards/FeatureAwards';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {
  LightboxKeys,
  initLightBoxData,
} from './content/lightbox/lightbox.map';
import FeaturePortfolios from './components/Features/feature-portfolios/FeaturePortfolios';
import { Link } from './models/link.model';
import {
  LIGHTBOX_FULL_SETTINGS,
  LightBoxGalleryType,
} from './consts/lightbox.consts';
import { NAV_ITEMS, NavItem } from './consts/nav-items.consts';
import { AHButton } from './models/ah-button.model';
import useScrollIntersection from './hooks/useScrollIntersection';
import { AHIcon } from './models/ah-icon.model';

export default function App() {
  const lightBoxSlides = initLightBoxData();
  const [lightboxOpened, setLightboxOpened] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<SlideImage[]>([]);
  const [lightBoxType, setLightBoxType] = useState<LightBoxGalleryType>(
    LightBoxGalleryType.ONE_SLIDE
  );

  const [navItems, setNavItems] = useState<AHButton[]>([...NAV_ITEMS]);

  const [heroSectionRef, scrollToHeroSection, heroIsIntersecting] =
    useScrollIntersection<HTMLDivElement>();
  const [profileSectionRef, scrollToProfileSection, profileIsIntersecting] =
    useScrollIntersection<HTMLElement>();
  const [devStackSectionRef, scrollToDevStackSection, devStackIsIntersecting] =
    useScrollIntersection<HTMLDivElement>();
  const [projectsSectionRef, scrollToProjectsSection, projectsIsIntersecting] =
    useScrollIntersection<HTMLDivElement>();
  const [awardsSectionRef, scrollToAwardsSection, awardsIsIntersecting] =
    useScrollIntersection<HTMLDivElement>();
  const [
    certificatesSectionRef,
    scrollToCertificatesSection,
    certificatesIsIntersecting,
  ] = useScrollIntersection<HTMLDivElement>();

  useEffect(() => {
    setNavItems(navItems => {
      return navItems.map(item => ({
        ...item,
        selected: !!(
          (heroIsIntersecting && item.id.includes(NavItem.HOME)) ||
          (profileIsIntersecting && item.id.includes(NavItem.PROFILE)) ||
          (devStackIsIntersecting && item.id.includes(NavItem.DEV_STACK)) ||
          (projectsIsIntersecting && item.id.includes(NavItem.PROJECTS)) ||
          (awardsIsIntersecting && item.id.includes(NavItem.AWARDS)) ||
          (certificatesIsIntersecting && item.id.includes(NavItem.CERTIFICATES))
        ),
      }));
    });
  }, [
    heroIsIntersecting,
    profileIsIntersecting,
    devStackIsIntersecting,
    projectsIsIntersecting,
    awardsIsIntersecting,
    certificatesIsIntersecting,
  ]);

  const headerVisibleClass = heroIsIntersecting
    ? ''
    : styles['app-c-header--visible'];

  const navHandler = (navItem: AHButton) => {
    const updated = navItems.map(item => ({
      ...item,
      selected: item.id === navItem.id,
    }));
    setNavItems(updated);
    navItem.id.includes(NavItem.HOME) && scrollToHeroSection(true);
    navItem.id.includes(NavItem.PROFILE) && scrollToProfileSection(true);
    navItem.id.includes(NavItem.DEV_STACK) && scrollToDevStackSection(true);
    navItem.id.includes(NavItem.PROJECTS) && scrollToProjectsSection(true);
    navItem.id.includes(NavItem.AWARDS) && scrollToAwardsSection(true);
    navItem.id.includes(NavItem.CERTIFICATES) &&
      scrollToCertificatesSection(true);
  };

  const plugins =
    lightBoxType === LightBoxGalleryType.FULL
      ? [...LIGHTBOX_FULL_SETTINGS]
      : [];
  const renderButtons = lightBoxType === LightBoxGalleryType.FULL;

  const clickHandlerLink = (link: Link) => {
    link?.link && window.open(link.link, '_blank');
  };

  const iconClickHandler = (icon: AHIcon) => {
    document.body.classList.add(
      icon.id.includes('light') ? 'light-theme' : 'dark-theme'
    );
    document.body.classList.remove(
      icon.id.includes('light') ? 'dark-theme' : 'light-theme'
    );
  };

  const clickHandlerLightbox = (id: string) => {
    const idFragmentsCount = id.split('--').length;
    const key = idFragmentsCount ? id.split('--')[idFragmentsCount - 1] : '';
    const foundSlides = lightBoxSlides.get(key as LightboxKeys) || [];
    setCurrentSlides(foundSlides);
    setLightBoxType(
      key.includes('cert')
        ? LightBoxGalleryType.ONE_SLIDE
        : LightBoxGalleryType.FULL
    );
    setLightboxOpened(true);
  };

  return (
    <Fragment>
      <Header
        navItems={navItems}
        navClicked={navItem => navHandler(navItem)}
        iconClicked={icon => iconClickHandler(icon)}
        className={`${styles['app-c-header']} ${headerVisibleClass}`}
      ></Header>
      <main className={styles['app-c-content']}>
        <FeatureHero
          id={NavItem.HOME}
          ref={heroSectionRef}
          slides={HERO_SLIDES}
        ></FeatureHero>
        <NavigationSection
          id={NavItem.PROFILE}
          ref={profileSectionRef}
          title="profile"
          className={styles['app-c-section']}
        >
          <FeatureSummary
            className={styles['app-c-feature']}
            title="Summary"
            summaryList={FEATURE_SUMMARY}
          />
          <FeatureTimeline
            className={styles['app-c-feature']}
            title="Professional experience"
            timelineList={EXPERIENCE_LIST}
          />
          <FeatureTimeline
            className={styles['app-c-feature']}
            title="Education"
            timelineList={EDUCATION_LIST}
          />
          <FeatureContacts
            chartData={LANGUAGE_SKILLS}
            contactsList={CONTACT_LIST}
          />
        </NavigationSection>
        <NavigationSection
          id={NavItem.DEV_STACK}
          ref={devStackSectionRef}
          title="dev stack"
          className={`${styles['app-c-section']} ${styles['app-c-section--dev-stack']}`}
        >
          <FeatureDevStack />
        </NavigationSection>
        <NavigationSection
          id={NavItem.PROJECTS}
          ref={projectsSectionRef}
          title="projects"
          className={styles['app-c-section']}
        >
          <FeaturePortfolios
            buttonsGroup={PROJECTS_BUTTONS_GROUP}
            cards={PROJECT_CARDS}
            buttonClicked={id => clickHandlerLightbox(id)}
            linkClicked={link => clickHandlerLink(link)}
          ></FeaturePortfolios>
        </NavigationSection>

        <NavigationSection
          id={NavItem.AWARDS}
          ref={awardsSectionRef}
          title="awards"
          className={`${styles['app-c-section']} ${styles['app-c-section--awards']}`}
        >
          <FeatureAwards
            cards={AWARD_CARDS}
            buttonClicked={id => clickHandlerLightbox(id)}
            linkClicked={link => clickHandlerLink(link)}
          ></FeatureAwards>
        </NavigationSection>

        <NavigationSection
          id={NavItem.CERTIFICATES}
          ref={certificatesSectionRef}
          title="certificates"
          className={styles['app-c-section']}
        >
          <FeaturePortfolios
            buttonsGroup={CERTIFICATES_BUTTONS_GROUP}
            cards={CERTIFICATE_CARDS}
            buttonClicked={id => clickHandlerLightbox(id)}
            linkClicked={link => clickHandlerLink(link)}
          ></FeaturePortfolios>
        </NavigationSection>
        <NavigationSection
          title="this site was built with"
          className={`${styles['app-c-section']} ${styles['app-c-section--tech-stripe']} ah-bg-gradient--yelloworange`}
        >
          <FeatureTechStripe techLinks={TECH_LINKS_LIST} />
        </NavigationSection>
        <FeatureDownload />
        <Footer
          contactLinks={SOCIAL_LINKS_LIST}
          description={FOOTER_DESCRIPTORS}
        />
      </main>

      <Lightbox
        open={lightboxOpened}
        close={() => setLightboxOpened(false)}
        slides={[...currentSlides]}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        render={{
          buttonPrev: renderButtons ? undefined : () => null,
          buttonNext: renderButtons ? undefined : () => null,
        }}
        plugins={[...plugins]}
      ></Lightbox>
    </Fragment>
  );
}
