<template>
  <div class="case-study">
    <TitleTag title="Design Lead" lineSize="small" />
    <div class="case-study__title">
      <h1>Thrive - Core and Activity app</h1>
    </div>

    <div class="case-study__large-image mb-80">
      <img :src="imageDummy" alt="" />
    </div>

    <div class="case-study__description">
      <p>
        Thrive is a community based, web3 platform for people to contribute and
        share skills with one another by exchanging the platform's signature
        coin — thrivecoin.
      </p>
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Role and process</h2>
        <p>
          I joined the team at Thrive very early on in the process, so I
          assisted the Project manager in defining the IA, which initially
          consisted of the Core app (Application where the core features lived,
          like Profile, Groups, Support, etc) and first of what would be many
          Activity Apps (individual part of the platform where user would browse
          specific listings, complete transactions, etc.).
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <p>
        Being a startup, and still in search for the right look and feel, we
        went through multiple rounds of iterations on the early stages, multiple
        times even requiring to go back to the IA and re-invent the approach so
        that it would feel more engaging to users.
      </p>
    </div>

    <div class="case-study__large-image mt-4">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Early visual explorations</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">
          Blockchain and the entry level barrier
        </h2>
        <p>
          Thrive's aim was to appeal to a larger audience than just the people
          inside the blockchain community. <br />
          We wanted to expand beyond that, but with an industry just starting to
          grab the attention of larger audiences, many people still struggled
          with blockchain jargon, creating mental patterns around the concept
          and even figuring out how to manage/create their wallets. <br />
          These issues became main pain points that we had to design/think about
          when we started building the product. <br /><br />

          So as to not overwhelm users as soon as they entered the site, we
          decided we wanted them to engage and explore our content first while
          asking very little commitment in the beginning.<br /><br />

          We allowed users to browse through listings, and groups without an
          account, and only after the user would want to interact in depth and
          felt comfortable, would we ask for sign up details, or if they had
          previously done so, they would only have to add the wallet information
          so that we wouldn't overwhelm them with multiple requirements right at
          the start.
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-4">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Designs from the Listing flow</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">E-Wallets and Payments</h2>
        <p>
          The process of connecting an e-wallet to your account and making
          payments were some of the flows we struggled more during the design
          phase. <br /><br />There was no industry standard when it came to
          handling wallets and payments. Users could have multiple wallets, with
          multiple currencies. To complicate things further, we had to encourage
          users that they set up specific networks so that gas fees were more
          affordable to us and the user.<br /><br />
          Explaining all this to the user in terms they could understand, while
          keeping a high level of transparency when it came to sensitive
          subjects like money and payments, at times became quite difficult.
          Competition-wise we had very little to go with, so we had to do
          research on already existing mental models and build on those.
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-4">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Wallet and Payment interactions</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Activity app</h2>
        <p>
          Another important design challenge we faced was the Activity App. The
          activity app was technically a separate app where transactions and
          payments were processed and all the details of a group or listing
          lived in.<br />
          This infrastructure allowed enough flexibility for users to create
          their own activity apps down the road, with unique needs and
          challenges that would further grow the ecosystem. So while the Core
          app provided the pillars for transactions, the actual groups and
          activities were created in individual Activity apps.
        </p>

        <ListAppFeature :listAppFeature="listAppFeature" />

        <p>
          So for example, we had to design the Listings page in the Core app,
          while claiming your reward or going into details of that Listing had
          to be done through the Activity app. We had to sew these two seperate
          apps together seemlesly so that the user would perceive the entire
          flow as one continous experience. <br /><br />
          We worked closely with the devs to define the limiations of what
          information from the Activity app we could display and update
          instantly in the Core app, so that the user didn't have to go through
          many loading states and pages.We defined potetntial places were
          feedback loops could help and were possible and by using modals, cards
          and ther components managed to bring the two apps closer together to
          look like one.<br /><br />
          We also designed a visual language that was easy to personalize for
          upcoming users that would create their own activity apps.
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-4 mb-4">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">
          Designs from the Core and Activity App
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import TitleTag from "@/components/ui/TitleTag.vue";
import ListAppFeature from "@/components/ListAppFeature.vue";

export default {
  name: "Thrive",
  components: {
    TitleTag,
    ListAppFeature,
  },
  data() {
    return {
      caseStudy: null,
      imageDummy: require("@/assets/images/thrive/thrive-1.png"),
      listAppFeature: [
        {
          title: "Core app",
          list: ["Profile", "Dashboard", "Groups", "Listings"],
        },
        {
          title: "Activity app",
          list: ["Groups - Detail page", "Listings - Detail page"],
        },
      ],
    };
  },
  // created() {
  // FEATURE: might use this later (to avoid using a state manager)
  // this.caseStudy = JSON.parse(this.$route.query.caseStudy);
  // },
};
</script>
