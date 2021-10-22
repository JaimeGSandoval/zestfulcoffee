const handleToggle = (dataRef, stateVal) => {
  const panel = dataRef.current.nextElementSibling;

  if (stateVal) {
    panel.classList.add('showOption');
    dataRef.current.classList.add('toggleArrow');
  } else {
    panel.classList.remove('showOption');
    dataRef.current.classList.remove('toggleArrow');
  }
};

export default handleToggle;
