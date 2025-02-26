<template>
  <div class="case-study">
    <TitleTag title="UX / UI Designer and Illustrator" lineSize="small" />
    <div class="case-study__title">
      <h1>Uniseguros Platform</h1>
    </div>

    <div class="case-study__large-image mb-80">
      <img :src="imageDummy" alt="" />
    </div>

    <div class="case-study__description">
      <p>
        Uniseguros is a panamian service company that acts as a middle man for
        clients and insurance companies. Its main goal was to simplify the
        experience when applying, managing, or making a claim or a quote.
        <br /><br />

        Before the design, the company would function mainly based on verbal
        communication and physical interactions between agents, clients,
        carriers and occasionally third party contractors. <br />
        Naturally, communication between parties suffered from inefficiencies
        like misunderstandings, lack of transparency, and other issues.<br />
        So when we came in, we started identifying those pain points and think
        about how we could digitalize all those interactions so that
        communication, and work became more efficient and seamless.
      </p>
    </div>

    <div class="case-study__description">
      <h2 class="case-study__subtitle mb-3 mt-80">Design process</h2>
      <p>Our design process was mainly divided into four steps:</p>
      <ul class="bullet-list">
        <li>
          Creating a feature map that was a list of platform modules to be built
          and prioritized.
        </li>
        <li>
          Designing user flows depicting how users would interact with the
          platform to complete common tasks.
        </li>
        <li>Translating the user flows into wireframes.</li>
        <li>
          Woking on the visual design, micro-interactions, illustations and
          refnining the whole user interface and user experience.
        </li>
      </ul>
    </div>

    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <h2 class="case-study__subtitle mb-3">My responsibilities</h2>
      <p>
        My main responsibility was translating user flows into wireframes and
        then going through multiple iterations until we were satisfied with the
        results.
        <br />
        <br />
        We’d usually practice the diverge and converge approach- I’d try out
        various versions of a flow then through feedback with the UX architect,
        PO and client we’d decide on the best approach. We worked closely so
        that problems were defined and dealt with as early as possible.
      </p>
    </div>

    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Demographics</h2>
        <p>
          Demographics was an aspect that influenced the design decisions quite
          often in the project.
          <br />
          <br />
          Panama had custom social norms that differed from the U.S. and Kosovo.
          They varied from small details, like the name format in legal
          documents (names in Panama keep maternal’s surname too and not just
          paternal one), to much bigger, subjective ones, like the spending
          culture and how they dealt with payments.
          <br />
          <br />
          We had to think about how carriers would be involved (since payments
          using carriers were very common), how we could allow payments to be
          broken down into multiple steps, and how insurances would be handled
          when users were insuring first and even second cousins.
        </p>
      </div>
    </div>

    <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Defining the layout</h2>
        <p>
          Another challenge we faced was designing a suitable architecture that
          would be able to hold even if more information was added later on the
          design.
          <br /><br />
          We tried out multiple approaches regarding the hierarchy, testing each
          design for flaws and elements that wouldn’t hold for the long run.
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
        <h2 class="case-study__subtitle mb-3">
          Information hierarchy in cards
        </h2>
        <p>
          The People section was a particular fun but complex section in the
          Agent platform. Seen from the agents’ perspective, it featured
          individual clients, who had multiple people under their coverage,
          parent organization along with their branches, and for the super
          admins, the agents and staff as well.
          <br /><br />
          An agent would spend a considerate amount of time here where they
          would keep track of their client list, follow up on any issues with
          claims, payments, provide support and so on.
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
        <p>
          We began by creating surveys, holding additional interviews, mapping
          out user journeys to see what would be essential to the agents. We
          found out that most agents were going through these information while
          simultanoulsy on the phone with the client, so the attention on the
          card a lot of times would be shared between a phone conversation and
          actually skimming the page.
          <br /><br />
          So we ended up creating cards that were easy to scan, and very easy to
          pick up key information from by using UI elements like chips and icons
          to create easy to interpret informartion.

          <br /><br />
          We went with a smilar layout for cards throughout the platform, so
          that whether the user was looking at a person, or an organization,
          claim or a quote, they would always know where the main information
          was located therefore spending very little mental power on learning or
          keeping up with various patterns.
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
        <h2 class="case-study__subtitle mb-3">Visualising progress</h2>
        <p>
          Another complex section we designed was the Quote and Claims flows.
          From an agent's perspective, a client had to be followed through
          multiple steps when making a quote or a claim, and to complicate
          things further, an agent had up to 50 clients that they handled, each
          on different steps along the process.
          <br /><br />
          Each step had different actions/tasks the agent had to do to make sure
          the client went through the necessary steps to become a client, buy a
          quote, or make a claim.
          <br /><br />
          So keeping in mind best UX practices, we came up with an approach that
          made it easy for the agents to manage clients from an overview
          perspective and as well as from an individual one.
          <br /><br />
          We added elemets that kept the user continously on the loop by
          displaying information accordingly and highlighting the places they
          needed to take action, helping them understand what was happening and
          what were the next steps. We used the same principles as for the
          People section by keeping the cards consistent where they could to
          reduce unneccesary visual noise.
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
        <h2 class="case-study__subtitle mb-3">Mobile version</h2>
        <p>
          Since our main focus was the desktop version, we started designing for
          mobile once all obstacles were handled on the desktop and the design
          phase was finished. Having already defined and dealt with most of the
          design issues while working on desktop, our main difficulty for mobile
          was fitting all the content in the size of your hand.
          <br /><br />
          Because of the sheer size of the platform we had to make necessary
          changes to the content, we prioritised the most important features
          first, implementing them as close to the desktop version as possible
          then moving on to the smaller features, in some cases removing some
          less important features from the mobile version altogether.
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
        <h2 class="case-study__subtitle mb-3">Finishing words</h2>
        <p>
          Using the design language we created while making the website, the end
          result was a platform that harnessed elements from behavioural
          psychology to simplify interactions, and clean, well thought UI
          elements to create a complex platform that was not complicated to use.
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-4">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Wallet and Payment interactions</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import TitleTag from "@/components/ui/TitleTag.vue";

export default {
  name: "UnisegurosPlatform",
  components: {
    TitleTag,
  },
  data() {
    return {
      imageDummy: require("@/assets/images/thrive/thrive-1.png"),
    };
  },
};
</script>
