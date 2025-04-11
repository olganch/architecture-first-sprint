import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const AuthMF = React.lazy(() => import("auth_mf/Auth"));
const ProfileMF = React.lazy(() => import("profile_mf/Profile"));
const CardsMF = React.lazy(() => import("cards_mf/Cards"));
const ModalMF = React.lazy(() => import("modal_mf/Modals"));

function App() {
  // Состояние остается в хосте
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  // ... остальные состояния

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header email={email} onSignOut={onSignOut} />
        
        <React.Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={CardsMF}
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              loggedIn={isLoggedIn}
            />
            <Route path="/auth">
              <AuthMF onLogin={onLogin} onRegister={onRegister} />
            </Route>
            <Route path="/profile">
              <ProfileMF 
                onUpdateUser={handleUpdateUser}
                onUpdateAvatar={handleUpdateAvatar}
              />
            </Route>
          </Switch>
          <ModalMF 
            selectedCard={selectedCard}
            onClose={closeAllPopups}
            tooltipStatus={tooltipStatus}
          />
        </React.Suspense>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
