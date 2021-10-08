const handleToggle = (dataRef, stateVal, e) => {
  const panel = dataRef.current.nextElementSibling;

  if (stateVal) {
    panel.classList.add('show-option');
    dataRef.current.classList.add('toggle-arrow');
  } else {
    panel.classList.remove('show-option');
    dataRef.current.classList.remove('toggle-arrow');
  }
};

export default handleToggle;
