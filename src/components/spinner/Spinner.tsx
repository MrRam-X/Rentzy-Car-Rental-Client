/*
    COMPONENT: SPINNER WITH BACKDROP OVERLAY
    
    (hide = remove "flex" class and add "hidden" class to spinner-overlay)
    (show = add "flex" class and remove "hidden" class to spinner-overlay)

    Note:- we need to add "overflow-hidden" class inside body tag to restrict the scroll behavior
*/

const Spinner = () => {
  return (
    <div
      id="spinner-overlay"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center"
    >
      <div className="w-16 h-16 border-2 border-white/20 border-t-brand-gold rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
