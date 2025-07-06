declare module 'aos' {
  const AOS: {
    init: (config?: {
      duration?: number;
      easing?: string;
      once?: boolean;
    }) => void;
  };
  export default AOS;
}