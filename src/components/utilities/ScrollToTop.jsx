// import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unListen = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unListen();
//     };
//   }, [history]);

//   return null;
// }

// export default withRouter(ScrollToTop);

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
