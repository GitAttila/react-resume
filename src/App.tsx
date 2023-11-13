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
import { Fragment, useState } from 'react';
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
import useScrollTo from './hooks/useScrollPositions';
import { NAV_ITEMS, NavItem } from './consts/nav-items.consts';
import { AHButton } from './models/ah-button.model';

export default function App() {
  const lightBoxSlides = initLightBoxData();
  const [lightboxOpened, setLightboxOpened] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<SlideImage[]>([]);
  const [lightBoxType, setLightBoxType] = useState<LightBoxGalleryType>(
    LightBoxGalleryType.ONE_SLIDE
  );

  const [navItems, setNavItems] = useState<AHButton[]>([...NAV_ITEMS]);

  const [heroSectionRef, scrollToHeroSection, heroIsIntersecting] =
    useScrollTo<HTMLDivElement>();
  const [profileSectionRef, scrollToProfileSection, profileIsIntersecting] =
    useScrollTo<HTMLElement>();
  const [devStackSectionRef, scrollToDevStackSection, devStackIsIntersecting] =
    useScrollTo<HTMLDivElement>();
  const [projectsSectionRef, scrollToProjectsSection, projectsIsIntersecting] =
    useScrollTo<HTMLDivElement>();
  const [awardsSectionRef, scrollToAwardsSection, awardsIsIntersecting] =
    useScrollTo<HTMLDivElement>();
  const [
    certificatesSectionRef,
    scrollToCertificatesSection,
    certificatesIsIntersecting,
  ] = useScrollTo<HTMLDivElement>();

  // if (heroIsIntersecting) {
  //   const udpated = navItems.map((item) => ({
  //     ...item,
  //     selected: item.id.includes(NavItem.HOME)
  //       ? heroIsIntersecting
  //       : item.selected,
  //   }));
  //   console.log(udpated);
  //   setNavItems(udpated);
  // }

  console.log(heroSectionRef.current?.id, heroIsIntersecting);
  console.log(profileSectionRef.current?.id, profileIsIntersecting);
  console.log(devStackSectionRef.current?.id, devStackIsIntersecting);
  console.log(projectsSectionRef.current?.id, projectsIsIntersecting);
  console.log(awardsSectionRef.current?.id, awardsIsIntersecting);
  console.log(certificatesSectionRef.current?.id, certificatesIsIntersecting);

  const navHandler = (navItem: AHButton) => {
    const updated = navItems.map((item) => ({
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
        navClicked={(navItem) => navHandler(navItem)}
        className={styles['app-c-header']}
      ></Header>
      <main className={styles['app-c-content']}>
        <FeatureHero
          id={NavItem.HOME}
          featureHeroRef={heroSectionRef}
          slides={HERO_SLIDES}
        ></FeatureHero>
        <NavigationSection
          id={NavItem.PROFILE}
          sectionRef={profileSectionRef}
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
          sectionRef={devStackSectionRef}
          title="dev stack"
          className={`${styles['app-c-section']} ${styles['app-c-section--dev-stack']}`}
        >
          <FeatureDevStack />
        </NavigationSection>
        <NavigationSection
          id={NavItem.PROJECTS}
          sectionRef={projectsSectionRef}
          title="projects"
          className={styles['app-c-section']}
        >
          <FeaturePortfolios
            buttonsGroup={PROJECTS_BUTTONS_GROUP}
            cards={PROJECT_CARDS}
            buttonClicked={(id) => clickHandlerLightbox(id)}
            linkClicked={(link) => clickHandlerLink(link)}
          ></FeaturePortfolios>
        </NavigationSection>

        <NavigationSection
          id={NavItem.AWARDS}
          sectionRef={awardsSectionRef}
          title="awards"
          className={`${styles['app-c-section']} ${styles['app-c-section--awards']}`}
        >
          <FeatureAwards
            cards={AWARD_CARDS}
            buttonClicked={(id) => clickHandlerLightbox(id)}
            linkClicked={(link) => clickHandlerLink(link)}
          ></FeatureAwards>
        </NavigationSection>

        <NavigationSection
          id={NavItem.CERTIFICATES}
          sectionRef={certificatesSectionRef}
          title="certificates"
          className={styles['app-c-section']}
        >
          <FeaturePortfolios
            buttonsGroup={CERTIFICATES_BUTTONS_GROUP}
            cards={CERTIFICATE_CARDS}
            buttonClicked={(id) => clickHandlerLightbox(id)}
            linkClicked={(link) => clickHandlerLink(link)}
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
