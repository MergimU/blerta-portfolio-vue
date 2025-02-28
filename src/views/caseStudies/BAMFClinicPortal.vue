<template>
  <div class="case-study">
    <TitleTag title="Design Lead" lineSize="small" />
    <div class="case-study__title">
      <h1>BAMF Clinic Portal</h1>
    </div>

    <div class="case-study__large-image mb-80">
      <img :src="imageDummy" alt="" />
    </div>

    <div class="case-study__description">
      <p>
        BAMF Clinic is part of the BAMF ecosystem focusing on managing the day
        to day of nurses, technicians and physicians, that includes setting up
        meetings with clinic staff and patients, setting up treatment plans,
        managing staff and patient schedules, and monitoring drug inventory. The
        platform now has more than 20 nurses and other clinical staff and has
        been accountable for treating over 300 patients just last year.
      </p>

      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Research phase</h2>
        <p>
          Designing for such a complex product required a lot of back and forth
          with the clinical staff to define common struggles and needs that were
          not met by previous competitor products, and tailoring an experience
          exclusive for BAMF's unique clinic scenarios.
          <br /><br />
          The first part of the process involved sitting with the clinical staff
          on a weekly basis for simple interviews to gather as much data as
          possible, occasionally following the clinicians on their workday
          obligations to observe their process and identify potential issues
          being overlooked by the staff.
          <br /><br />
          Later those meetings became biweekly as we started sharing progress of
          the designs, often requiring multiple iterations before we were
          satisfied with the results.
        </p>
      </div>
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Alert fatigue</h2>
        <p>
          Having adapted to using generic industry tools (common in health
          industry) that were not tailored to any specific task, meant the
          clinic staff was using a generalized interface where almost everything
          sent back a type of alert, with the BAMF platform we focused on
          reducing the amount of unnecessary alerts and through careful
          consideration set up a system where alerts made sense and didn't
          fatigue the staff by everything constantly requiring their attention.
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
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Scheduling templates flow</h2>
        <p>
          One of the most complicated user personas we had to design around was
          the Clinical Operations Director (COD for short). One of the
          director's responsibilities was creating templates for various
          treatment processes.
          <br /><br />
          Each treatment required specific medical personnel, equipments and
          spaces, so the process involved carefully managing the available
          rooms, available equipment, and drugs and also giving them enough
          flexibility to select substitutes for an action if the main
          role/resource was not available.

          <br /><br />
          We also had to consider that while a treatment took 2 hours to
          complete, a staff member required didn't have to be involved for 2
          hours. For example, an average doctor-patient interaction lasts 15
          min, we had to design around allowing the possibility of a doctor
          participating on more treatments during those 2 hours to maximize
          efficiency, at the same time be flexible enough if they are needed
          longer than 15 minutes.
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
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">The Resource reservation flow</h2>
        <p>
          Another unique feature, this one for the Head Nurse, was setting up
          tasks for each role in a template fashion, (e.g. greeting patients
          when they arrive) that they could later assign to various staff
          members for a specific day of the week.
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
      <div class="mt-5">
        <p>
          This feature included the template creation part(shown left), as well
          as a calendar view(right) where clinic staff could see their daily
          calendar updated based on the role they were assigned. <br />E.g. John
          Doe, a nurse, was assigned the role of nurse #2 which on Tuesdays
          greets patients.
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-5 mb-80">
      <img :src="imageDummy" />
    </div>

    <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">Creating the treatment plans</h2>
        <p>
          While the COD set up the times and equipment that would be blocked for
          a type of treatment in an overview style, the treatment plan focused
          on the details of those treatments. That meant requesting specific
          labs, scans, drug injections, etc.
          <br />That meant also following the patient through multiple steps in
          a visit, monitoring their condition and even requesting multiple
          different visits.
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
        <h2 class="case-study__subtitle mb-3">Conclusion</h2>
        <p>
          While a complex product I would easily say it was one of the most
          exciting projects I had the chance to work on.
        </p>
      </div>
    </div>

    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>

    <!-- <div class="case-study__description">
      <div class="mt-5">
        <h2 class="case-study__subtitle mb-3">
          Want to see more about my exploration phase? Check out this project
        </h2>
      </div>
    </div>

    <div class="work-home__cases">
      <CaseStudy :caseStudy="visitCaseStudy" />
    </div> -->

    <ExploreCaseStudy />
  </div>
</template>

<script>
import TitleTag from "@/components/ui/TitleTag.vue";
// import CaseStudy from "@/components/CaseStudy.vue";
import ExploreCaseStudy from "@/components/ExploreCaseStudy.vue";

export default {
  name: "BAMFClinicPortal",
  components: {
    TitleTag,
    ExploreCaseStudy,

    // CaseStudy,
  },
  data() {
    return {
      caseStudy: null,
      visitCaseStudy: {
        titleTag: "DESKTOP",
        titleTagColor: "#636CE5",
        workInfo: "Design Lead · 2021 - 2022",
        name: "Thrive - Core & Activity app",
        description:
          "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
        route: "thrive",
        src: require("@/assets/images/work-images/thrivecoin.webp"),
      },
      imageDummy: require("@/assets/images/thrive/thrive-1.png"),
    };
  },

  // created() {
  // FEATURE: might use this later (to avoid using a state manager)
  // this.caseStudy = JSON.parse(this.$route.query.caseStudy);
  // },
};
</script>
