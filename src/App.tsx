import { FEATURE_SUMMARY } from './content/feature-summary.const';
import { EXPERIENCE_LIST } from './content/feature-experience.const';
import { EDUCATION_LIST } from './content/feature-education.const';
import { CONTACT_LIST, SOCIAL_LINKS_LIST } from './content/contact-links.const';
import { FOOTER_DESCRIPTORS } from './content/footer.const';
import { TECH_LINKS_LIST } from './content/tech-stripe-links.const';
import { LANGUAGE_SKILLS } from './content/skills-bar-charts';
import { Fragment } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import FeatureSummary from './components/features/feature-summary/FeatureSummary';
import NavigationSection from './components/NavigationSection/NavigationSection';
import FeatureTimeline from './components/features/feature-timeline/Feature-timeline';
import Footer from './components/features/footer/Footer';
import FeatureDownload from './components/features/feature-download/FeatureDownload';
import FeatureTechStripe from './components/features/feature-tech-stripe/FeatureTechStripe';
import FeatureContacts from './components/features/feature-contact/FeatureContact';
import FeatureDevStack from './components/features/feature-dev-stack/FeatureDevStack';
import FeatureProjects from './components/features/feature-projects/FeatureProjects';
import Carousel from './components/Carousel/Carousel';
import CarouselSlide from './components/CarouselSlide/CarouselSlide';

function App() {
  return (
    <Fragment>
      <Header className={styles['app-c-header']}></Header>
      <main className={styles['app-c-content']}>
        <div className={styles['app-c-content__carousel-wrapper']}>
          <Carousel rollOver={true} indicators={true}>
            <CarouselSlide className={styles['app-c-content__slide']}>
              slide 1
            </CarouselSlide>
            <CarouselSlide>slide 2</CarouselSlide>
            <CarouselSlide>slide 3</CarouselSlide>
          </Carousel>
        </div>

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
        <NavigationSection title="awards" className={styles['app-c-section']}>
          <></>
        </NavigationSection>
        <NavigationSection
          title="certificates"
          className={styles['app-c-section']}
        >
          <></>
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
    </Fragment>
  );
}

export default App;
