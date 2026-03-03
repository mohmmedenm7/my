type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "MOHAMED EISA — Portfolio",
    fullName: "MOHAMED EISA",
    email: "mohamed.eisa.dev@gmail.com",
  },
  hero: {
    name: "MOHAMED EISA",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I specialize in providing ready-made, high-quality digital templates and interactive solutions designed to kickstart your project. From professional e-commerce models to advanced educational platforms, I offer pre-designed, scalable, and user-friendly systems that solve real-world needs. Browse our collection and select the perfect model to bring your vision to life instantly.`,
    },
    experience: {
      p: "What I Know",
      h2: "Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Selection",
      h2: "Templates.",
      content: `The following ready-made templates are available for you to choose from. Each model is designed with specific features and styles, allowing you to select the one that best fits your vision and requirements.`,
    },
  },
};
