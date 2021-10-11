import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/home"
import {HomeProvider} from "./components/providers/Products/products"
import Events from "./components/pages/Events/events"
import Graduation from "./components/pages/Graduation/graduation"
import Wedding from "./components/pages/Wedding/wedding"
import Confraternization from "./components/pages/Confraternization/confraternization"
import { BasketProvider } from "./components/providers/Basket/index";
import {GraduationProvider} from "./components/providers/GraduationProvider/index"
import {WeddingProvider} from "./components/providers/WeddingProvider/index"
import {ConfraternizationProvider} from "./components/providers/ConfraternizationProvider/index"

const Routes = () => {
    return (
        <HomeProvider>
            <BasketProvider>
                <GraduationProvider>
                    <WeddingProvider>
                        <ConfraternizationProvider>
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/events">
                                    <Events/>
                                </Route>
                                <Route path="/graduation">
                                    <Graduation/>
                                </Route>
                                <Route path="/wedding">
                                    <Wedding/>
                                </Route>
                                <Route path="/confraternization">
                                    <Confraternization/>
                                </Route>
                            </Switch>
                        </ConfraternizationProvider>
                    </WeddingProvider>
                </GraduationProvider>
            </BasketProvider>
        </HomeProvider>
    )
}

export default Routes