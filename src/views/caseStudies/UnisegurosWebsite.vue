<template>
  <div class="case-study">
    <TitleTag title="UX / UI Designer and Illustrator" lineSize="small" />
    <div class="case-study__title">
      <h1>Uniseguros Website</h1>
    </div>

    <div class="case-study__large-image mb-80">
      <img :src="imageDummy" alt="" />
    </div>

    <div class="case-study__description">
      <p>
        Uniseguros is a panamian service company that acts as a middle man for
        clients and insurance companies. One of the key features of the
        Uniseguros website was the ability to create a quote request without
        signing up, that way using the foot in the door technique we would
        slightly push potential clients in the direction of becoming users.
      </p>
    </div>

    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>

    <div class="case-study__description">
      <h2 class="case-study__subtitle mb-3">Defining the obstacles</h2>
      <p>
        The main challenge we started out with was that the quote request
        procedures were long, and boring, They could have as much as forty
        questions, they used insurance jargon, and some of them had long
        repetative forms, so it was clear to us that if we wanted to simplify
        insurance quotes for the user and make them easy to manage , we had to
        break down the questionnaires into bite sized chunks; keep the questions
        as simple as possible and enhance the message using illustrations,
        microinteractions and occasional ux delights.
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
        <h2 class="case-study__subtitle mb-3">
          Choosing the right style for the illustrations
        </h2>
        <p>
          Because there was a wide variety of topics we would need to enhance
          via illustrations (bond, health, fire, auto etc) some with very
          specific elements and others very abstract, we settled on a style of
          illustrations that was very simple, and very clear when representing
          people, animals and innante objects, making both figurative and
          literal messages appear very clear and easy to understand while still
          maintaing a unique style that was going to be used throughout the
          platform and website.
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
        <h2 class="case-study__subtitle mb-3">Breaking down the content</h2>
        <p>
          We used a progressive disclosure approach to keep the users more easy
          engaged with the content. We broke down each quote flow into one
          question per screen, that way each question had the right amount of
          attention, we also simplified the way questions were formed and
          removed the possibility for wrong interpretations, that way each
          question was clear and effortless to answer.
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
  name: "UnisegurosWebsite",
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
