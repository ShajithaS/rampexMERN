import { Suspense, lazy } from "react";
const LazyComponent = lazy(() => import("../SignUp"));
const LazyLoadingAndSuspense = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>This is Lazy component</h1>
        <LazyComponent/>
      </Suspense>
      
    </div>
  );
};

export default LazyLoadingAndSuspense;
