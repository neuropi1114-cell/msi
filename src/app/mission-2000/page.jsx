import IgsHeader from './components/IgsHeader';
import IgsHero from './components/IgsHero';
import IgsIntroduction from './components/IgsIntroduction';
import IgsFeatureCarousel from './components/IgsFeatureCarousel';
import IgsGatewayLink from './components/IgsGatewayLink';
import IgsFeaturedNews from './components/IgsFeaturedNews';
import IgsDirectory from './components/IgsDirectory';
import IgsFooter from './components/IgsFooter';
import IgsPopup from './components/IgsPopup';
import IgsScripts from './components/IgsScripts';

const enrolmentTitle = '<span class="multi-language-title" data-titles=\'[{"title":"Enrolment"},{"title":"Iscrizione"},{"title":"注册"},{"title":"Anmeldung"},{"title":"Inscription"}]\'>注册</span>';

export default function Mission2000Page() {
  return (
    <div className="igs home page page-parent no-header">
      <noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-MDBW9V5" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <IgsHeader />
      <div className="wrap" role="document">
        <main className="main">
          <IgsHero />
          <IgsIntroduction />
          <IgsFeatureCarousel />
          <IgsGatewayLink
            variant="enrolment"
            theme="transparent"
            imagePosition="left"
            imageSrc="/mission2000/assets/KidssmilingComputer.png"
            imageAlt="Kids looking at computer smiling"
            imageCrop="none"
            heading="Join our local school with a global perspective"
            titleHtml={enrolmentTitle}
            content="<p>Our unique bilingual education reaps multiple benefits for girls and boys from their earliest years. Articulate, curious and well-informed, IGS students enjoy fresh perspectives and diverse experiences.</p>"
            linkHref="https://www.igssyd.nsw.edu.au/enrolment/"
            linkText="Find out more"
            hasBindingFabric={false}
          />
          <IgsGatewayLink
            variant="scholarships"
            theme="orange"
            imagePosition="right"
            imageSrc="/mission2000/assets/igs-indigenous-students-diversity-1-1600x1068.jpg"
            imageAlt="Two girls in school uniforms stand arm-in-arm, smiling at the camera on a playground."
            imageCrop="circle"
            heading="Celebrating Diversity and Excellence with Scholarships"
            titleHtml="Scholarships"
            content="<p>In keeping with our values of diversity, personal achievement, connectedness, vibrancy and authenticity, the School has a long and proud tradition of educating young people through our scholarship programs.</p>"
            linkHref="https://www.igssyd.nsw.edu.au/enrolment/scholarships/"
            linkText="Find out more"
            hasBindingFabric={true}
          />
          <IgsGatewayLink
            variant="principal"
            theme="transparent"
            imagePosition="left"
            imageSrc="/mission2000/assets/ShaunaColnanALP2017-23-e1626393140216-1600x1452.jpg"
            imageAlt="Shauna Colnan, IGS Principal"
            imageCrop="circle"
            heading="Unity Through Diversity"
            titleHtml="A message from our Principal"
            content="<p><strong>International Grammar School (IGS)</strong>&nbsp;opened its doors in 1984 with a unique vision to provide its students with a globally-focused bilingual education, rich in the study of music and the arts.</p><p>Today, this pioneering spirit continues.</p>"
            linkHref="https://www.igssyd.nsw.edu.au/home/principals-welcome"
            linkText="Read more from Shauna Colnan"
            hasBindingFabric={true}
          />
          <IgsFeaturedNews />
          <IgsGatewayLink
            variant="virtual-tour"
            theme="orange_pastel"
            imagePosition="right"
            imageSrc="/mission2000/assets/SCRIBBLE_IGS_LANGUAGE_PRIMARY_73591-1-1600x1067.jpg"
            imageAlt="Two children sit at a table playing a memory card game together."
            imageCrop="none"
            heading="Take a Virtual Tour of different parts of our School."
            titleHtml="Virtual Tour"
            content="<p>Explore our vibrant campuses from wherever you are. Walk through our learning spaces, facilities, creative centres, outdoor areas and more. Experience the unique environment that makes IGS a place of inspiration, diversity and discovery.</p>"
            linkHref="https://igss.youtour.com.au/#"
            linkText="Take Virtual Tour"
            hasBindingFabric={true}
            linkTarget="_blank"
          />
        </main>
      </div>
      <IgsDirectory />
      <IgsFooter />
      <IgsPopup />
      <IgsScripts />
    </div>
  );
}
