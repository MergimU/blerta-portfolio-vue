import { ref, onMounted, onBeforeUnmount } from "vue";

export function useIntersectionObserver(
  options = { root: null, rootMargin: "0px", threshold: 0.2 }
) {
  const observer = ref(null);
  const observedElements = ref([]);

  const setupObserver = () => {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target, refName } = entry.target.__observeData;
          handleIntersection(target, refName);
        }
      });
    }, options);
  };

  const observeElement = (element, refName) => {
    if (element && observer.value) {
      element.__observeData = { target: element, refName };
      observer.value.observe(element);
      observedElements.value.push(element);
    }
  };

  const handleIntersection = (target, refName) => {
    if (refName === "right") {
      setTimeout(() => {
        target.classList.add("show");
      }, 300);
    } else {
      target.classList.add("show");
    }

    observer.value.unobserve(target);
  };

  onMounted(() => {
    setupObserver();
  });

  onBeforeUnmount(() => {
    if (observer.value) {
      observedElements.value.forEach((element) => {
        observer.value.unobserve(element);
      });
      observer.value.disconnect();
    }
  });

  return {
    observeElement,
  };
}
