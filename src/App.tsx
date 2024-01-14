import {Route, Routes} from 'react-router-dom';
import Home from "@/pages/home/Home.tsx";
import ErrorBoundary from "@/helpers/errorBoundary.tsx";
import LazyCharacterDetails from "@/pages/characterDetails/lazyCharacterDetails.tsx";
import {Suspense} from "react";
import LoadingFallback from "@/helpers/loadingFallback.tsx";

const App = () => {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route
                    path="/character/:id"
                    element={
                        <Suspense fallback={<LoadingFallback/>}>
                            <LazyCharacterDetails />
                        </Suspense>
                    }
                />
            </Routes>
        </ErrorBoundary>
    );
};
export default App;

