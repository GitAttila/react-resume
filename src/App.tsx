import { FEATURE_SUMMARY } from './content/feature-summary.const';
import { EXPERIENCE_LIST } from './content/feature-experience.const';
import { EDUCATION_LIST } from './content/feature-education.const';
import { CONTACT_LIST, SOCIAL_LINKS_LIST } from './content/contact-links.const';
import { FOOTER_DESCRIPTORS } from './content/footer.const';
import { TECH_LINKS_LIST } from './content/tech-stripe-links.const';
import { LANGUAGE_SKILLS } from './content/skills-bar-charts';
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
import FeatureProjects from './components/Features/feature-projects/FeatureProjects';
import FeatureCertificates from './components/Features/feature-certificates/featureCertificates';
import FeatureHero from './components/Features/feature-hero/FeatureHero';
import { HERO_SLIDES } from './content/carousel-hero.const';
import FeatureAwards from './components/Features/feature-awards/FeatureAwards';
import { AWARD_CARDS } from './content/award-cards.const';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  LightboxKeys,
  initLightBoxData,
} from './content/lightbox/lightbox.map';
import { CERTIFICATE_CARDS } from './content/certificate-cards.const';

function App() {
  const lightBoxSlides = initLightBoxData();
  const [lightboxOpened, setLightboxOpened] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<SlideImage[]>([]);

  const clickHandlerLightbox = (id: string) => {
    const idFragmentsCount = id.split('--').length;
    const key = idFragmentsCount ? id.split('--')[idFragmentsCount - 1] : '';
    const foundSlides = lightBoxSlides.get(key as LightboxKeys) || [];
    setCurrentSlides(foundSlides);
    setLightboxOpened(true);
  };

  return (
    <Fragment>
      <Header className={styles['app-c-header']}></Header>
      <main className={styles['app-c-content']}>
        <FeatureHero slides={HERO_SLIDES}></FeatureHero>

        <NavigationSection title="profile" className={styles['app-c-section']}>
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
          title="dev stack"
          className={`${styles['app-c-section']} ${styles['app-c-section--dev-stack']}`}
        >
          <FeatureDevStack />
        </NavigationSection>
        <NavigationSection title="projects" className={styles['app-c-section']}>
          <FeatureProjects></FeatureProjects>
        </NavigationSection>

        <NavigationSection
          title="awards"
          className={`${styles['app-c-section']} ${styles['app-c-section--awards']}`}
        >
          <FeatureAwards
            cards={AWARD_CARDS}
            buttonClicked={(id) => clickHandlerLightbox(id)}
          ></FeatureAwards>
        </NavigationSection>

        <NavigationSection
          title="certificates"
          className={styles['app-c-section']}
        >
          <FeatureCertificates
            cards={CERTIFICATE_CARDS}
            buttonClicked={(id) => clickHandlerLightbox(id)}
          ></FeatureCertificates>
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
      ></Lightbox>
    </Fragment>
  );
}

export default App;
